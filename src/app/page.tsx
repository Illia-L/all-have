'use client';

import SectionCategories from '@/components/main-page/SectionCategories';
import TopBanner from '@/components/main-page/TopBanner';
import Box from '@mui/material/Box';

export default function Home() {
  return (
    <Box
      sx={{
        width: { xs: 375, md: 833, lg: 1440 },
        px: { xs: 2, md: 4, lg: 10 },
        color: 'custom.text1'
      }}
    >
      <TopBanner/>

      <SectionCategories/>
    </Box>
  );
}
