'use client';

import { Category } from '@/dev-data/categories';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import Typography from '@mui/material/Typography';

type Props = {
  category: Category;
};

export default function CategoryCard({ category }: Props) {
  return (
    <Card
      elevation={0}
      sx={{
        width: '100%',
        height: '100%',
      }}
    >
      <CardActionArea component='a'>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: { xs: 'flex-start', md: 'center' },
            borderRadius: 2,
            px: { xs: 2, md: 3, lg: 4 },
            pb: { xs: 2, md: 2.75, lg: 1.75 },
            pt: { xs: 2, md: 5.25, lg: 5.5 },
            backgroundColor: 'custom.categoryCard',
            transition: 'background-color 150ms ease-in-out',
            '&:hover': {
              backgroundColor: theme => theme.palette.custom.categoryHover,
              color: theme => theme.palette.custom.text2,
              stroke: theme => theme.palette.custom.text2,
            },
          }}
        >
          <Stack
            sx={{
              flexDirection: { xs: 'row', md: 'column' },
              alignItems: 'center',
              justifyContent: 'center',
              gap: 2,
            }}
          >
            <Box sx={{ width: { xs: 40, md: 96 }, height: { xs: 40, md: 96 } }}>
              <svg
                style={{
                  width: '100%',
                  height: '100%',
                  fill: 'none',
                }}
              >
                <use
                  href={`/images/category-icons/icons.svg#${category.iconName}`}
                />
              </svg>
            </Box>
            <Typography
              sx={{
                height: { md: 48, lg: 58 },
                typography: {
                  xs: 'categoryMob',
                  md: 'categoryTab',
                  lg: 'category',
                },
                textAlign: 'center',
              }}
            >
              {category.name}
            </Typography>
          </Stack>
        </Box>
      </CardActionArea>
    </Card>
  );
}
