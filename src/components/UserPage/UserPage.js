import React, {PureComponent} from 'react';
import Spinner from 'react-svg-spinner';
import Followers from '../Followers';
import {fetchUserRequest} from '../../actions/users';
import {
  getIsFetching,
  getIsFetched,
  getData,
  getError
} from '../../reducers/users';
import {connect} from 'react-redux';
import './UserPage.css';

export class UserPage extends PureComponent {
  constructor(props) {
    super(props);

    const {match} = this.props;
    this.login = match && match.params.name;
  }

  componentDidMount() {
    const {fetchUserRequest} = this.props;

    fetchUserRequest && fetchUserRequest(this.login);
  }

  componentWillReceiveProps() {
    const {match, fetchUserRequest} = this.props;
    var newLogin = match && match.params.name;

    if (newLogin !== this.login) {
      this.login = newLogin;
      fetchUserRequest && fetchUserRequest(this.login);
    }
  }

  render() {
    const {isFetching, data, error} = this.props,
      login = this.login,
      {avatar_url, followers, public_repos} = data || {};

    if (isFetching)
      return (
        <div className="user_page">
          <Spinner size="64px" color="fuchsia" gap={5} />
        </div>
      );

    if (error) return <p style={{color: 'red'}}>Ошибка! {error}</p>;

    if (!isFetching && !data) return <p>User not found</p>;

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
  }
}

const mapStateToProps = state => ({
  isFetching: getIsFetching(state),
  isFetched: getIsFetched(state),
  data: getData(state),
  error: getError(state)
});

const mapDispatchToProps = {
  fetchUserRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
