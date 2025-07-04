import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
// import products from '../../dev-data/productUrls_1.json'
import ProductCard from './ProductCard';

type Props = {
  products: number[];
};

export default function ProductList({ products }: Props) {
  return (
    <List
      sx={{
        display:'flex',
        flexWrap: 'wrap',
        gap: { xs: 1.875, md: 2.25, lg: 3 },
        rowGap: { xs: 2, md: 2.5, lg: 3 },
        p: 0,
      }}
    >
      {products.map(i => (
        <ListItem
          disablePadding
          key={i}
          sx={{
            width: {
              xs: 'calc((100% - 15px) / 2)',
              md: 'calc((100% - 18px) / 2)',
              lg: 'calc((100% - 3 * 24px) / 4)',
            },
          }}
        >
          <ProductCard />
        </ListItem>
      ))}
    </List>
  );
}
