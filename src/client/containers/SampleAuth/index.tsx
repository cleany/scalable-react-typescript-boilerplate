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
import { Button, Box, Paragraph } from 'ui';

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
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      isAuthed: false,
      isLoading: false,
      error: null,
    };
  }
  private handleClick(event: React.SyntheticEvent<undefined>) {
    event.preventDefault();
    const { actions, isAuthed } = this.props;
    actions.authenticate(!isAuthed);

  }
  public render() {
    const { isAuthed } = this.props;
    return (
      <Section>
        <Button
          isHero
          onClick={this.handleClick}
        >
          {isAuthed ? 'Log Out' : 'Log In'}
        </Button>
        <Heading>
          Best container ever!
        </Heading>
        {isAuthed &&
          <Box>
            <Paragraph>
              Super Secret Resource!
            </Paragraph>
          </Box>
        }
      </Section>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SampleAuth);
