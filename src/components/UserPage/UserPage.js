import React, {PureComponent} from 'react';
import Spinner from 'react-svg-spinner';
import Followers from '../Followers';
import './UserPage.css';

export default class UserPage extends PureComponent {
  componentDidMount() {}

  componentWillReceiveProps() {}

  render() {
    const {isFetching, user, followers, login} = this.props;

    if (isFetching === false && user === null) return <p>User not found</p>;

    if (isFetching) return <Spinner size="64px" color="fuchsia" gap={5} />;

    return (
      <div className="user_page">
        <div className="user_page__info">
          <div className="user_info__avatar">
            <img src="" alt="" />
          </div>
          <div className="user_info__login">
            <h3>{login}</h3>
            <p>Followers: {(followers || []).length}</p>
            <p>Public repos: </p>
          </div>
        </div>
        <Followers login={login} followers={followers} />
      </div>
    );
  }
}
