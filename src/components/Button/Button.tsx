import { useTheme } from '@mui/material';
import MUIButton, { ButtonProps } from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

import React from 'react';

export type PropsTypes = {
  /**
   * Button will be disabled when loading automatically.
   */
  loading?: boolean;
  /**
   * Should not use label with button children
   */
  label?: string;
};

const Button: React.FC<PropsTypes & ButtonProps> = ({
  children,
  loading,
  className,
  label,
  startIcon,
  color,
  variant,
  disabled,
  ...restProps
}) => {
  const theme = useTheme();

  return (
    <MUIButton
      color={color}
      variant={variant}
      disabled={loading ?? disabled}
      startIcon={
        loading ? (
          <CircularProgress
            size={20}
            style={{ color: theme.palette.grey[400] }}
          />
        ) : (
          startIcon
        )
      }
      className={`btn-component ${className || ''}`}
      {...restProps}
    >
      {label}
      {children}
    </MUIButton>
  );
};

export default Button;
