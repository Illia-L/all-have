import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

export default function TopBanner() {
  return (
    <Box sx={{ mt: 4 }}>
      <Stack
        sx={{
          alignItems: 'center',
          flexDirection: { xs: 'column', md: 'row' },
          gap: { xs: 2.25, md: 2, lg: 3 },
        }}
      >
        <Box
          sx={{
            position: 'relative',
            flexShrink: 0,
            borderRadius: 2,
            width: { xs: 375, md: 377, lg: 737 },
            height: { xs: 385, md: 432 },
            overflow: 'hidden',
          }}
        >
          <Image
            src='/images/banners/main-banner.png'
            alt='Alt'
            fill
            style={{ objectFit: 'cover' }}
          />
        </Box>

        <Box>
          <Typography
            component='h3'
            sx={{
              typography: {
                xs: 'h1Mob',
                md: { fontWeight: 500, fontSize: '2.25rem' },
                lg: 'h1',
              },
            }}
          >
            Електросамокат Segway-Ninebot MAX G30E II
          </Typography>

          <Typography
            sx={{
              mt: { xs: 2, md: 3 },
              typography: { xs: 'body1Mob', md: 'body2' },
            }}
          >
            Lorem ipsum dolor sit amet consectetur. Posuere aliquet facilisis
            vulputate libero lectus a hac nec aenean.
          </Typography>

          <Button
            variant='contained'
            sx={{
              mt: { xs: 2, md: 3 },
              minWidth: 203,
              width: { xs: '100%', md: 'unset' },
            }}
          >
            Купити зараз
          </Button>
        </Box>
      </Stack>
    </Box>
  );
}
