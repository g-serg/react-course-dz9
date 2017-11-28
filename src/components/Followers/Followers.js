import React, {PureComponent} from 'react';
import Follower from '../Follower';
import Spinner from 'react-svg-spinner';
import './Followers.css';

export default class Followers extends PureComponent {
  componentDidMount() {}

  render() {
    const {isFetching, followers} = this.props;

    if (isFetching) return <Spinner size="64px" color="fuchsia" gap={5} />;

    return (
      <div className="followers">
        {(followers || []).map(({login, img}) => (
          <Follower key={login} login={login} img={img} />
        ))}
      </div>
    );
  }
}
