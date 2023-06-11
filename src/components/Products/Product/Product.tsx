import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Button from "@mui/material/Button";
import Badge from "@mui/material/Badge";
import Typography from "@mui/material/Typography";
import { MdDelete } from 'react-icons/md';
import { IoMdAdd } from 'react-icons/io'

import styles from './Product.module.scss'

import { IProduct } from "../types.d";
import { addProduct, removeProduct } from "../../../redux/reducers/cart";
import { ReduxStore } from "../../../redux/store";
import { ModalKey, setModal } from "../../../redux/reducers/modal";

interface Props {
  product: IProduct;
  setActiveProduct: React.Dispatch<React.SetStateAction<IProduct | null>>;
}

export default function Product({ product, setActiveProduct } : Props) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: ReduxStore) => state.cart.cartProducts);
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  useEffect(() => {
    const isFound = cartItems.some(cartProduct => cartProduct.id === product.id);
    setIsAddedToCart(isFound);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartItems.length])

  return (
    <>
      <article className={styles.Product}>
        <div className={styles.ProductImg__container}>
          { product.offerPercent ? (
            <Badge color="info" badgeContent={product.offerPercent} className={styles.Offer__badge} />
          ) : null}
          <img
            onClick={() => {
              dispatch(setModal({ key: ModalKey.ProductDetails, value: true }))
              setActiveProduct(product);
            }}
            className={styles.Product__img}
            src={product.img} alt={product.name}
            loading="lazy"
          />
        </div>
        <div className={styles.Product__details}>
          <div>
            <span className={styles.Price}>{product.discountPrice}</span>
            { product.regularPrice ? (
              <span className={styles.Price}>{product.regularPrice}</span>
            ) : <span className={styles.Price}></span> }
          </div>
          <Typography variant="body2" color='rgb(107,114,128)'>{product.name}</Typography>
          {isAddedToCart ? (
            <Button
              variant="contained"
              color="warning"
              startIcon={<MdDelete />}
              onClick={() => {
                dispatch(removeProduct({ id: product.id }))
              }}
            >Remove</Button>
          ) : (
            <Button
              variant="contained"
              className={styles.Add__btn}
              startIcon={<IoMdAdd />}
              onClick={() => {
                dispatch(addProduct(product))
              }}
            >
              Add
            </Button>
          )}
        </div>
      </article>
    </>
  )
}
