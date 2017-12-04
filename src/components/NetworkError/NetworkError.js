import React, {PureComponent} from 'react';
import {getNetworkError} from '../../reducers/network';
import {connect} from 'react-redux';
import './NetworkError.css';

export class NetworkError extends PureComponent {
  render() {
    const {networkError} = this.props;

    return (
      <div className="network_error">
        <p>{networkError}</p>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  networkError: getNetworkError(store),
});

export default connect(mapStateToProps)(NetworkError);
