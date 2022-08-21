import React from 'react';

export type PropsTypes = {
  label: string;
};

const Button = (props: PropsTypes) => {
  return <button>{props.label}</button>;
};

export default Button;
