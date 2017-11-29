import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';
import './Follower.css';

export default class Follower extends PureComponent {
  render() {
    const {login, img} = this.props;

    return (
      <div className="follower_item">
        <div className="follower_item__avatar">
          <img src={img} alt={login} />
        </div>
        <div className="follower_item__url">
          <Link to={`/user/${login}`}>
            <h3>{login}</h3>
          </Link>
        </div>
      </div>
    );
  }
}
