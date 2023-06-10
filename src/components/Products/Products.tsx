import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

import Product from './Product/Product';
import { products } from './test-data';

const drawerWidth = 240;

const Main = styled('div', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  backgroundColor: 'rgb(243,244,246)',
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

export default function Products() {
  return (
    <>
      <Main open={true}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            {products.map((product) => {
              return (
                <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={product.id}>
                  <Product product={product} />
                </Grid>
              )
            })}
          </Grid>
        </Box>
      </Main>
    </>
  )
}
