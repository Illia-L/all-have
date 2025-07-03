'use client';

import { ReactNode, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Collapse from '@mui/material/Collapse';
import Stack from '@mui/material/Stack';
import ButtonSeeAll from './ButtonSeeAll';

type Props = {
  title: string;
  visibleNode: ReactNode;
  hiddenNode: ReactNode;
};

export default function SectionCollapsible({
  title,
  visibleNode,
  hiddenNode,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box>
      <Stack
        direction='row'
        sx={{ justifyContent: 'space-between', alignItems: 'center' }}
      >
        <Typography
          component='h2'
          sx={{
            typography: {
              xs: 'h2Mob',
              md: { fontSize: '1.5rem', fontWeight: '600' },
              lg: 'h2',
            },
          }}
        >
          {title}
        </Typography>

        <ButtonSeeAll
          onClick={() => setIsOpen(is => !is)}
          sx={{ display: { xs: 'none', md: 'flex' } }}
        />
      </Stack>

      {visibleNode}

      <Collapse in={isOpen}>{hiddenNode}</Collapse>

      <ButtonSeeAll
        onClick={() => setIsOpen(is => !is)}
        sx={{ display: { xs: 'flex', md: 'none' } }}
      />
    </Box>
  );
}
