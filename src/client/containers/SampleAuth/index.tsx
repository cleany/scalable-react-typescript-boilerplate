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
import { Heading, Section } from './styles';
import { Button } from 'components';

const mapStateToProps = (state: State): SampleAuthProps => ({
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
    this.handleSingin = this.handleSingin.bind(this);
    this.state = {
      isAuthed: false,
      isLoading: false,
      error: null,
    };
  }
  private handleSingin(event: React.SyntheticEvent<undefined>) {
    event.preventDefault();
    console.log('!');
  }
  public render() {
    return (
      <Section>
        <Button
          isHero
          onClick={this.handleSingin}
        >
          Click Me!
        </Button>
        <Heading>
          Best container ever!
        </Heading>
      </Section>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SampleAuth);
