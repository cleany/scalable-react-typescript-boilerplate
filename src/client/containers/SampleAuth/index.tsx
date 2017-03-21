import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { State } from '../../state';
import { SampleAuthActionType } from './actions';
import { SampleAuthState } from './reducer';
import actionCreators from './actionCreators';
import {
  SampleAuthProps,
  SampleAuthDispatchProps,
  SampleAuthPropTypes,
} from './types';
import { Section, Input, FormContainer } from './styles';
import { Button, Heading } from 'ui';

const mapStateToProps = (state: State): SampleAuthProps => ({
  username: state.sampleAuth.username,
  password: state.sampleAuth.password,
  isLoading: state.sampleAuth.isLoading,
  error: state.sampleAuth.error,
  data: state.sampleAuth.data,
  isAuthed: state.sampleAuth.isAuthed,
});

const mapDispatchToProps = (dispatch: Dispatch<SampleAuthActionType>): SampleAuthDispatchProps => ({
  actions: bindActionCreators(
    actionCreators,
    dispatch,
  ),
});

class SampleAuth extends React.Component<SampleAuthPropTypes, SampleAuthState> {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      username: '',
      password: '',
      isAuthed: false,
      isLoading: false,
      error: null,
    };
  }
  private handleClick(event: React.SyntheticEvent<undefined>) {
    event.preventDefault();
    const { actions } = this.props;
    const { username, password } = this.state;
    actions.loadInitiation();
    actions.authenticate({ username, password });
    // Fake async
    setTimeout(() => {
      actions.loadSuccess(null);
    }, 2000);
  }
  public render() {
    const { isLoading } = this.props;
    return (
      <Section style={{display: 'flex', justifyContent: 'center'}}>
        <FormContainer>
          <Heading tag="h2" textAlign="center">Dummy Login Form</Heading>
          <Input
            placeholder="username"
            onChange={(e) => this.setState({ username: e.target.value })}
            value={this.state.username}
          />
          <Input
            type="password"
            placeholder="password"
            onChange={(e) => this.setState({ password: e.target.value })}
            value={this.state.password}
          />
          <Button
            isHero
            style={{ margin: '5px' }}
            onClick={this.handleClick}
          >
            Log In!
          </Button>
          <Heading tag="h1">
            {isLoading ? 'Loading...' : 'Not Loading...!'}
          </Heading>
        </FormContainer>
      </Section>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SampleAuth);
