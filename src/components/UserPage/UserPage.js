import React, {PureComponent} from 'react';
import {fetchUserRequest, fetchTokenOwnerRequest} from '../../actions/users';
import {getIsFetching, getIsFetched, getData, getError} from '../../reducers/users';
import Spinner from 'react-svg-spinner';
import Followers from '../Followers';
import {connect} from 'react-redux';
import './UserPage.css';

export class UserPage extends PureComponent {
  componentDidMount() {
    const {fetchUserRequest, fetchTokenOwnerRequest, match} = this.props;

    if (fetchUserRequest && match) {
      const name = match.params.user;

      if (name) {
        fetchUserRequest(name);
      } else {
        fetchTokenOwnerRequest(name);
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.user !== nextProps.match.params.user) {
      const {fetchUserRequest} = this.props;
      const {user} = nextProps.match.params;

      fetchUserRequest(user);
    }
  }

  renderUserPage = () => {
    const {data, match} = this.props;
    const {avatar_url, followers, public_repos} = data;
    const login = (match && match.params.user) || (data && data.login);

    return (
      <div className="user_page">
        <div className="user_page__info">
          <div className="user_info__avatar">
            <img src={avatar_url} alt={login} />
          </div>
          <div className="user_info__login">
            <h3>{login}</h3>
            <p>Followers: {followers}</p>
            <p>Public repos: {public_repos}</p>
          </div>
        </div>
        <Followers login={login} />
      </div>
    );
  };

  render() {
    const {isFetching, isFetched, data, match} = this.props;
    const login = (match && match.params.user) || (data && data.login);

    if (isFetching)
      return (
        <div className="user_container">
          <Spinner size="64px" color="fuchsia" gap={5} />
        </div>
      );

    if (isFetched && !data) return <p>User {login} not founded !</p>;

    if (!data) return <div />;

    return <div className="user_container">{this.renderUserPage()}</div>;
  }
}

const mapStateToProps = store => ({
  isFetching: getIsFetching(store),
  isFetched: getIsFetched(store),
  data: getData(store),
  error: getError(store),
});

const mapDispatchToProps = {
  fetchUserRequest,
  fetchTokenOwnerRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
