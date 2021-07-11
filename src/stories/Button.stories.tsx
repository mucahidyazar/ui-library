import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Button } from '../ui';

export default {
  title: 'Example/Button',
  component: Button,
} as Meta;

const Template: Story = (args) => <Button {...args}>My button</Button>;

export const Default = Template.bind({});

Default.args = {
  disabled: false,
};
