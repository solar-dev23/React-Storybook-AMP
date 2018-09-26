import * as appActionCreators from '../actions/app'
import * as actionCreators from '../actions/socketManager'
import { getAccountDomain } from '../domains'
import { getSigner } from '../services/signer'
import { getRandomNonce } from '../../utils/crypto'
import { signOrder } from '../services/signer/methods'

export default function socketManagerSelector(state: State) {
  return {
    authenticated: getAccountDomain(state).authenticated()
  }
}

// eslint-disable-next-line
export function subscribeChart(pair: string, increment: number): ThunkAction {
  return (dispatch, getState, { socket }) => {
    dispatch(actionCreators.subscribeChart(pair))

    //add something to verify if the subscribtion is needed
    const unsubscribe = socket.subscribeChart(pair, increment)

    return () => {
      dispatch(actionCreators.unsubscribeChart(pair))
      unsubscribe()
    }
  }
}

export function subscribeOrderBook(pair: string): ThunkAction {
  return (dispatch, getState, { socket }) => {
    dispatch(actionCreators.subscribeOrderBook(pair))

    const unsubscribe = socket.subscribeOrderBook(pair)

    return () => {
      dispatch(actionCreators.unsubscribeOrderBook(pair))
      unsubscribe()
    }
  }
}

// eslint-disable-next-line
export function openConnection(): ThunkAction {
  return (dispatch, getState, { socket }) => {
    socket.createConnection()

    dispatch(actionCreators.createConnection())

    const closeConnection = socket.openConnection(event => {
      switch (event.type) {
        case 'close':
          return handleWebsocketCloseMessage(dispatch, event, closeConnection)
        case 'error':
          return handleWebsocketErrorMessage(dispatch, event, closeConnection)
        case 'open':
          return dispatch(appActionCreators.addSuccessNotification({ message: 'Reconnected' }))
        default:
          break
      }
    })

    socket.onMessage((channel, payload) => {
      switch (channel) {
        case 'orders':
          return handleOrderMessage(dispatch, payload)
        case 'orderbook':
          return handleOrderBookMessage(dispatch, payload)
        case 'trades':
          return handleTradesMessage(dispatch, payload)
        case 'ohlcv':
          return handleOHLCVMessage(dispatch, payload)
        default:
          console.log('Receiving unknown message')
          break
      }
    })

    return () => {
      closeConnection()
      dispatch(actionCreators.closeConnection())
    }
  }
}

const handleWebsocketCloseMessage = (dispatch, event, closeConnection) => {
  // dispatch(actionCreators.closeConnection())/
  dispatch(appActionCreators.addDangerNotification({ message: 'Connection lost' }))
  setTimeout(() => dispatch(openConnection()), 5000)
}

const handleWebsocketErrorMessage = (dispatch, event, closeConnection) => {
  // closeConnection()
  console.log(event)
}

const handleOrderMessage = (dispatch, payload) => {
  const { type, hash, data } = payload

  switch (type) {
    case 'ORDER_ADDED':
      return dispatch(appActionCreators.addSuccessNotification({ message: 'Order added' }))
    case 'ORDER_CANCELED':
      return dispatch(appActionCreators.addSuccessNotification({ message: 'Order canceled' }))
    case 'REQUEST_SIGNATURE':
      dispatch(appActionCreators.addSuccessNotification({ message: 'Signing trade' }))
      dispatch(handleRequestSignature(payload))
    case 'ORDER_SUCCESS':
      return dispatch(appActionCreators.addSuccessNotification({ message: 'Order success' }))
    case 'ORDER_PENDING':
      return dispatch(appActionCreators.addSuccessNotification({ message: 'Order executed' }))
    case 'ORDER_ERROR':
      return dispatch(appActionCreators.addDangerNotification({ message: 'Order error' }))
    default:
      console.log('Unknown')
      return
  }
}

function handleRequestSignature(payload): ThunkAction {
  return async (dispatch, getState, { socket }) => {
    let { data, hash, type } = payload
    let signer = getSigner()

    if (data.matches != null) {
      data.matches.map(match => (match.trade.tradeNonce = getRandomNonce()))
      let promises = data.matches.map(match => signer.signTrade(match.trade))
      await Promise.all(promises)
    }

    if (data.order != null) {
      signer.signOrder(data.order)
    }

    socket.sendNewSubmitSignatureMessage(hash, data.matches, data.order)
  }
}

const handleOrderBookMessage = payload => {
  console.log('Receiving orderbook message', payload)
}

const handleTradesMessage = payload => {
  console.log('Receiving trades message', payload)
}

const handleOHLCVMessage = payload => {
  console.log('Receiving OHLCV message', payload)
}

const handleRawOrdersMessage = payload => {
  console.log('Receiving raw order message', payload)
}
