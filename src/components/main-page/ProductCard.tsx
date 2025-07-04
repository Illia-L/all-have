import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

export default function ProductCard() {
  return (
    <Card
      elevation={0}
      sx={{ borderRadius: 2 }}
    >
      <CardActionArea
        component='a'
        sx={{
          backgroundColor: theme => theme.palette.custom.cardArticle,
          transition: 'background-color 200ms ease-in-out',
          '&:hover': {
            backgroundColor: theme => theme.palette.custom.cardArticleHover,
          },
        }}
      >
        <Box sx={{ width: '100%', height: '100%', p: { xs: 1, md: 2 } }}>
          <Stack sx={{ gap: { xs: 2, md: 3 } }}>
            <Box
              sx={{
                position: 'relative',
                borderRadius: 2,
                width: { xs: 148, md: 345, lg: 270 },
                height: { xs: 144, md: 224 },
                overflow: 'hidden',
              }}
            >
              <Image
                src='/images/products/template-smartphone.jpg'
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                alt='Alt text'
              />
            </Box>

            <Typography sx={{ typography: { xs: 'body2Mob', md: 'body2' } }}>
              Samsung Galaxy A06 A065F 4/128GB Black ...
            </Typography>

            <Stack
              sx={{
                flexDirection: { xs: 'row', md: 'column' },
                gap: 3,
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Typography
                sx={{
                  typography: { xs: 'body1Mob', md: 'body1' },
                }}
              >
                4600 UAH
              </Typography>

              <Button
                variant='outlined'
                sx={{
                  gap: 1,
                  borderRadius: { xs: 1, md: 4 },
                  minWidth: 0,
                  width: { xs: 44, md: '100%' },
                  height: { xs: 44, md: 56 },
                  p: 0,
                  backgroundColor: { xs: '#F3EDF7', md: 'transparent' },
                }}
              >
                <Box
                  component='span'
                  sx={{ display: { xs: 'none', md: 'inline' } }}
                >
                  Додати в кошик
                </Box>

                <Box
                  component='span'
                  sx={{ width: { xs: 27, md: 34 }, height: { xs: 25, md: 31 } }}
                >
                  <svg style={{ width: '100%', height: '100%' }}>
                    <use href='/images/app-icons/icons.svg#cart' />
                  </svg>
                </Box>
              </Button>
            </Stack>
          </Stack>
        </Box>
      </CardActionArea>
    </Card>
  );
}
