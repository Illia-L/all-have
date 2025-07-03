import { ArrowForward } from '@mui/icons-material';
import Button, { ButtonProps } from '@mui/material/Button';
import { forwardRef } from 'react';

const ButtonSeeAll = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    return (
      <Button
        ref={ref}
        {...props}
        variant='outlined'
        endIcon={<ArrowForward />}
        sx={{
          mt: { xs: 2, md: 0 },
          minWidth: 209,
          width: { xs: '100%', md: 'unset' },
          ...props.sx,
        }}
      >
        Дивитись всі
      </Button>
    );
  }
);

ButtonSeeAll.displayName = 'ButtonSeeAll';

export default ButtonSeeAll;
