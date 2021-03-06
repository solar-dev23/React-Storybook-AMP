// @flow
import React from 'react';
import { Redirect } from 'react-router-dom';
import LoginPageRenderer from './LoginPageRenderer';
import { createWalletFromJSON } from '../../store/services/wallet';
import type { LoginWithWallet } from '../../types/loginPage';

type Props = {
  authenticated: boolean,
  loginWithMetamask: () => void,
  loginWithLedger: () => void,
  loginWithWallet: LoginWithWallet => void,
  removeNotification: any => void,
};

//TODO: Remove Notification handling

type State = {
  view: string,
  metamaskStatus: 'unlocked' | 'locked' | 'undefined',
};

class LoginPage extends React.PureComponent<Props, State> {
  state = {
    view: 'loginMethods',
    metamaskStatus: 'undefined',
  };

  componentDidMount = () => {
    typeof window.web3 === 'undefined'
      ? this.setState({ metamaskStatus: 'undefined' })
      : typeof window.web3.eth.defaultAccount === 'undefined'
        ? this.setState({ metamaskStatus: 'locked' })
        : this.setState({ metamaskStatus: 'unlocked' });
  };

  showWalletLoginForm = () => {
    this.setState({ view: 'wallet' });
  };

  showLoginMethods = () => {
    this.setState({ view: 'loginMethods' });
  };

  showCreateWallet = () => {
    this.setState({ view: 'createWallet' });
  };

  hideModal = () => {
    this.setState({ view: 'loginMethods' });
  };

  componentWillMount = () => {
    // this.props.removeNotification({ id: 1 });
  };

  walletCreated = async (props: Object) => {
    const { password, encryptedWallet, storeWallet, storePrivateKey } = props;
    var { wallet } = await createWalletFromJSON(encryptedWallet, password);

    if (wallet) this.props.loginWithWallet({ wallet, encryptedWallet, storeWallet, storePrivateKey });
  };

  render() {
    const {
      props: { 
        loginWithMetamask, 
        loginWithWallet, 
        loginWithLedger,
        authenticated
      },
      state: { view, metamaskStatus },
      showWalletLoginForm,
      showLoginMethods,
      showCreateWallet,
      hideModal,
      walletCreated,
    } = this;

    if (authenticated) {
      return <Redirect to="/wallet" />;
    }
    return (
      <div>
        <LoginPageRenderer
          view={view}
          metamaskStatus={metamaskStatus}
          loginWithWallet={loginWithWallet}
          loginWithLedger={loginWithLedger}
          loginWithMetamask={loginWithMetamask}
          showCreateWallet={showCreateWallet}
          hideModal={hideModal}
          walletCreated={walletCreated}
          showWalletLoginForm={showWalletLoginForm}
          showLoginMethods={showLoginMethods}
        />
      </div>
    );
  }
}

export default LoginPage;
