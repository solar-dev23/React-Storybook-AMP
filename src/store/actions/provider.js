//@flow
import type {
  SetProviderAction,
  RequestProviderAction,
  ProviderErrorAction,
  ProviderOptions,
} from '../../types/provider';

const actionTypes = {
  requestProvider: 'provider/REQUEST_PROVIDER',
  setProvider: 'provider/SET_PROVIDER',
  error: 'provider/ERROR',
};

export function setProvider(options: ProviderOptions): SetProviderAction {
  return {
    type: actionTypes.setProvider,
    payload: { options },
  };
}

export function requestProvider(): RequestProviderAction {
  return {
    type: actionTypes.requestProvider,
  };
}

export function error(error: string): ProviderErrorAction {
  return {
    type: actionTypes.error,
    payload: { message: error },
  };
}

export default actionTypes;