import React, {PureComponent} from 'react';
import {authorize} from '../../actions/auth';
import {getToken, getIsAuthorized} from '../../reducers/auth';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import './AuthPage.css';

export class AuthPage extends PureComponent {
  state = {value: ''};

  handleChange = event => {
    const {value} = event.target;

    this.setState({value});
  };

  handleKeyDown = event => {
    if (event.keyCode === 13) {
      const {value} = this.state;
      const {authorize} = this.props;

      if (value.length) {
        authorize(value);
      }
    }
  };

  render() {
    const {value} = this.state;

    const {token} = this.props;

    if (token !== null) return <Redirect to="/" />;

    return (
      <div className="container">
        <div className="auth_page">
          <p>
            Получить токен нужно на своей странице github, перейдите по
            <a href="https://github.com/settings/tokens">адресу</a> и создать
            себе токен. Запишите куда нибудь токен, так как после создания
            доступ к нему будет только один раз.
          </p>
          <input
            className="auth_page__input"
            placeholder="auth_token"
            value={value}
            onChange={this.handleChange}
            onKeyDown={this.handleKeyDown}
          />
          <p>После ввода нажать Enter</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  token: getToken(store),
  isAuthorized: getIsAuthorized(store)
});

const mapDispatchToProps = {
  authorize
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthPage);
