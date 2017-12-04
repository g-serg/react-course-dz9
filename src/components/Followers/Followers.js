import React, {PureComponent} from 'react';
import Follower from '../Follower';
import {fetchFollowersRequest} from '../../actions/followers';
import {
  getIsFetching,
  getIsFetched,
  getIDs,
  getError
} from '../../reducers/followers';
import {connect} from 'react-redux';
import Spinner from 'react-svg-spinner';
import './Followers.css';

export class Followers extends PureComponent {
  componentDidMount() {
    const {login, fetchFollowersRequest} = this.props;

    fetchFollowersRequest && fetchFollowersRequest(login);
  }

  render() {
    const {isFetching, ids, error} = this.props;

    if (isFetching)
      return (
        <div className="followers">
          <Spinner size="64px" color="fuchsia" gap={5} />
        </div>
      );

    if (error) {
      return <p style={{color: 'red'}}>Ошибка! {error}</p>;
    }

    if (!isFetching && !ids) return <div />;

    return (
      <div className="followers">
        {ids.map(({id, login, avatar_url}) => (
          <Follower key={id} login={login} img={avatar_url} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = store => ({
  isFetching: getIsFetching(store),
  isFetched: getIsFetched(store),
  ids: getIDs(store),
  error: getError(store)
});

const mapDispatchToProps = {
  fetchFollowersRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(Followers);
