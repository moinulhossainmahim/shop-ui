import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

const ProductsLoader = () => {
  return (
    <Stack>
      <Skeleton variant="rectangular" width="100%" height={118} />
      <Skeleton width="100%" height={40} />
    </Stack>
  )
}

export default ProductsLoader;
