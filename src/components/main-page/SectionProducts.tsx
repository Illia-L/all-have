import Box from '@mui/material/Box';
import SectionCollapsible from './SectionCollapsible';
import ProductList from './ProductList';

const products = Array.from({ length: 20 }, (_, i) => i + 1);

export default function SectionProducts() {
  const visibleProducts = products.slice(0, 8);
  const hiddenProducts = products.slice(8);

  return (
    <Box sx={{ mt: { xs: 4.5, md: 5, lg: 7 } }}>
      <SectionCollapsible
        title='ПОПУЛЯРНІ ТОВАРИ'
        visibleNode={
          <Box sx={{ mt: { xs: 2, md: 5, lg: 7 } }}>
            <ProductList products={visibleProducts} />
          </Box>
        }
        hiddenNode={
          <Box sx={{ mt: { xs: 2, md: 2.5, lg: 3 } }}>
            <ProductList products={hiddenProducts} />
          </Box>
        }
      />
    </Box>
  );
}
