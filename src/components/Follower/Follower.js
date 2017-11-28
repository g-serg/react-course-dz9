import React, {PureComponent} from 'react';
import './Follower.css';

export default class Follower extends PureComponent {
  render() {
    const {login, img} = this.props;

    return (
      <div className="followers">
        <div className="followers_avatar">
          <img src={img} alt={login} />
        </div>
        <div className="followers_url">
          <a href={`/user/${login}`}>
            <h3>{login}</h3>
          </a>
        </div>
      </div>
    );
  }
}
