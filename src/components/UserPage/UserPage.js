import React, {PureComponent} from 'react';
import {fetchUserRequest} from '../../actions/users';
import {getIsFetching, getIsFetched, getData, getError} from '../../reducers/users';
import Spinner from 'react-svg-spinner';
import Followers from '../Followers';
import {connect} from 'react-redux';
import './UserPage.css';

export class UserPage extends PureComponent {
  componentDidMount() {
    const {fetchUserRequest, match} = this.props;

    if (fetchUserRequest && match) {
      fetchUserRequest(match.params.name);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.name !== nextProps.match.params.name) {
      const {fetchUserRequest} = this.props;
      const {name} = nextProps.match.params;

      fetchUserRequest(name);
    }
  }

  renderUserPage = () => {
    const {data, match} = this.props;
    const {avatar_url, followers, public_repos} = data;
    const login = match && match.params.name;

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
    const {isFetching, data, error} = this.props;

    if (isFetching)
      return (
        <div className="user_container">
          <Spinner size="64px" color="fuchsia" gap={5} />
        </div>
      );

    if (error) return <p style={{color: 'red'}}>Ошибка! {error}</p>;

    if (!isFetching && !data) return <p>User not found</p>;

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
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
