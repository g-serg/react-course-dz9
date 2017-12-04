import React, {PureComponent} from 'react';
import {logout} from '../../actions/auth';
import {connect} from 'react-redux';
import './Logout.css';

export class Logout extends PureComponent {
  handleClick = () => {
    const {logout} = this.props;

    logout();
  };

  render() {
    return (
      <div className="logout">
        <button onClick={this.handleClick}>logout</button>
      </div>
    );
  }
}

const mapDispatchToProps = {
  logout
};

export default connect(null, mapDispatchToProps)(Logout);
