import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Grid from '@mui/material/Grid';

import ButtonComponent from '../src/components/Button';

export default {
  title: 'Core/Button',
  component: ButtonComponent,
} as ComponentMeta<typeof ButtonComponent>;

export const ContainedButton: ComponentStory<typeof ButtonComponent> = (
  args,
) => {
  return (
    <Grid container>
      <Grid item xs={2}>
        <ButtonComponent {...args} />
      </Grid>
      <Grid item xs={2}>
        <ButtonComponent color="error" {...args} />
      </Grid>
      <Grid item xs={2}>
        <ButtonComponent color="success" {...args} />
      </Grid>
      <Grid item xs={2}>
        <ButtonComponent loading {...args} />
      </Grid>
      <Grid item xs={2}>
        <ButtonComponent color="error" loading {...args} />
      </Grid>
    </Grid>
  );
};

export const OutlinedButton: ComponentStory<typeof ButtonComponent> = (
  args,
) => {
  return (
    <Grid container>
      <Grid item xs={2}>
        <ButtonComponent {...args} />
      </Grid>
      <Grid item xs={2}>
        <ButtonComponent color="error" {...args} />
      </Grid>
      <Grid item xs={2}>
        <ButtonComponent color="success" {...args} />
      </Grid>
      <Grid item xs={2}>
        <ButtonComponent loading {...args} />
      </Grid>
    </Grid>
  );
};

export const TextButton: ComponentStory<typeof ButtonComponent> = (args) => {
  return (
    <Grid container>
      <Grid item xs={2}>
        <ButtonComponent {...args} />
      </Grid>
      <Grid item xs={2}>
        <ButtonComponent color="error" {...args} />
      </Grid>
      <Grid item xs={2}>
        <ButtonComponent color="success" {...args} />
      </Grid>
      <Grid item xs={2}>
        <ButtonComponent loading {...args} />
      </Grid>
    </Grid>
  );
};

ContainedButton.args = {
  children: 'Primary Button',
  variant: 'contained',
};

OutlinedButton.args = {
  children: 'Outlined Button',
  variant: 'outlined',
};

TextButton.args = {
  children: 'Text Button',
  variant: 'text',
};
