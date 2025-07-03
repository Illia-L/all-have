'use client';

import { categories } from '@/dev-data/categories';
import { useMediaQuery } from '@mui/material';
import Box from '@mui/material/Box';
import SectionCollapsible from './SectionCollapsible';
import CategoryList from './CategoryList';

export default function SectionCategories() {
  const isTablet = useMediaQuery('(min-width: 833px) and (max-width: 1439px');
  const visibleNubmer = isTablet ? 3 : 4;
  const visibleCategories = categories.slice(0, visibleNubmer);
  const hiddenCategories = categories.slice(visibleNubmer);

  return (
    <Box sx={{ mt: { xs: 4.5, md: 5, lg: 8.5 } }}>
      <SectionCollapsible
        title='КАТЕГОРІЇ ТОВАРІВ'
        visibleNode={
          <Box sx={{ mt: { xs: 2, lg: 3 } }}>
            <CategoryList categories={visibleCategories} />
          </Box>
        }
        hiddenNode={
          <Box sx={{ mt: { xs: 2, md: 2.5, lg: 3 } }}>
            <CategoryList categories={hiddenCategories} />
          </Box>
        }
      />
    </Box>
  );
}
