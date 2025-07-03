'use client';

import { Category } from '@/dev-data/categories';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import CategoryCard from './CategoryCard';

type Props = {
  categories: Category[];
};

export default function CategoryList({ categories }: Props) {
  return (
    <List
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: { xs: 2, md: 3.5, lg: 3 },
        rowGap: { md: 2.5, lg: 3 },
        mt: 0,
        width: '100%',
        p: 0,
      }}
    >
      {categories.map(cat => (
        <ListItem
          disablePadding
          key={cat.id}
          sx={{
            width: {
              xs: '100%',
              md: 'calc((100% - 2 * 28px) / 3)',
              lg: 'calc((100% - 3 * 24px) / 4)',
            },
          }}
        >
          <CategoryCard category={cat} />
        </ListItem>
      ))}
    </List>
  );
}
