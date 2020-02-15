import React from 'react';
import { action } from '@storybook/addon-actions';
import Paper from "./paper"
import { Button } from '@storybook/react/demo';

export default {
  title: 'Paper',
  component: Paper,
};

export const Blank = () => <Paper/>

export const Text = () => <Button onClick={action('clicked')}>Hello Button</Button>;

export const Emoji = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
