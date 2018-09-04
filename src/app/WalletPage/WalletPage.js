import React from 'react';
import WalletPageRenderer from './WalletPageRenderer';
import { Redirect } from 'react-router-dom';

type Props = {
  loading: boolean,
  queryAccountData: void => void,
  depositTableData: Array<Object>,
};

class WalletPage extends React.PureComponent<Props> {
  componentDidMount() {
    this.props.queryAccountData();
    // this.props.removeNotification(1);
  }
  render() {
    const {
      loading,
      provider,
      pvtKeyLocked,
      depositTableData,
      authenticated,
      accountAddress,
      accountPrivateKey,
    } = this.props;
    if (!authenticated) {
      return <Redirect to="/login" />;
    }

    return (
      <WalletPageRenderer
        loading={loading}
        accountPrivateKey={accountPrivateKey}
        provider={provider}
        pvtKeyLocked={pvtKeyLocked}
        accountAddress={accountAddress}
        depositTableData={depositTableData}
      />
    );
  }
}

export default WalletPage;
