import Badge from "@mui/material/Badge";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import styles from './Product.module.scss'

import { IProduct } from "../types.d";

export default function Product({ product } : { product: IProduct }) {
  return (
    <article className={styles.Product}>
      <div className={styles.ProductImg__container}>
        { product.offerPercent ? (
          <Badge color="info" badgeContent={product.offerPercent} className={styles.Offer__badge} />
        ) : null}
        <img className={styles.Product__img} src={product.img} alt={product.name} loading="lazy" />
      </div>
      <div className={styles.Product__details}>
        <div>
          <span className={styles.Price}>{product.discountPrice}</span>
          { product.regularPrice ? (
            <span className={styles.Price}>{product.regularPrice}</span>
          ) : <span className={styles.Price}></span> }
        </div>
        <Typography variant="body2" color='rgb(107,114,128)'>{product.name}</Typography>
        <Button variant="contained" className={styles.Add__btn}>Add</Button>
      </div>
    </article>
  )
}
