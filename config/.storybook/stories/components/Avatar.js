import * as React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { Avatar } from 'components';

const avatarUrl="https://avatars1.githubusercontent.com/u/19292575";
storiesOf('Avatar', module)
  .add('Avatar with default props', () => 
    <Avatar />
  )
  .add('Avatar with props', () => 
    <Avatar 
      name="Abhishek Ghosh"
      avatarUrl={avatarUrl}
    />
  );
