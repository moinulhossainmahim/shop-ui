import { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import { MdDelete } from 'react-icons/md';
import { BsFillBagPlusFill } from 'react-icons/bs'

import styles from './Product.module.scss'

import { IProductTemp } from "../types.d";
import { addProduct, removeProduct, toggleQuantity } from "../../../redux/reducers/cart";
import { ReduxStore } from "../../../redux/store";
import { ModalKey, setModal } from "../../../redux/reducers/modal";
import { calculatePercentage } from "../../../utils/calculatePercentage";
import classNames from "classnames";
import { HiMinusSm, HiPlusSm } from "react-icons/hi";
import { ProductToggleType } from "../../Cart/types.d";

interface Props {
  product: IProductTemp;
  setActiveProduct: React.Dispatch<React.SetStateAction<IProductTemp | null>>;
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

  const amountOfProduct = useMemo(() => {
    const cartItem = cartItems.find((cartItem) => cartItem.id === product.id);
    return cartItem?.amount;
  }, [cartItems, product.id])

  const activeCartProduct = useCallback(() => {
    return cartItems.find((cartItem) => cartItem.id === product.id);
  }, [cartItems, product.id])

  return (
    <>
      <article className={styles.Product}>
        <div className={styles.ProductImg__container}>
          { Number(product.salePrice) !== Number(product.price) ? (
            <Badge color="warning" badgeContent={calculatePercentage(Number(product.salePrice), Number(product.price)) + '%'} className={styles.Offer__badge} />
          ) : null}
          <img
            onClick={() => {
              dispatch(setModal({ key: ModalKey.ProductDetails, value: true }))
              setActiveProduct(product);
            }}
            className={styles.Product__img}
            src={String(product.featuredImg)} alt={product.name}
            loading="lazy"
          />
        </div>
        <div className={styles.Product__details}>
          <Typography variant="subtitle2">{product.name}</Typography>
          <div className={styles.Product__bottom}>
            <div className={styles.Product__price}>
              { Number(product.salePrice) !== Number(product.price) ? (
                <span className={styles.Price}>${product.price}</span>
              ) : <span className={styles.Price}></span> }
              <span className={classNames({
                [styles.Price]: true,
                [styles.Original__price]: true,
              })}>${product.salePrice}</span>
            </div>
            {isAddedToCart ? (
              <div className={classNames({
                [styles.Product__amount]: true,
                [styles.Btn]: true,
              })}>
                <button
                  className={styles.ProductAmount__btn}
                  onClick={() => dispatch(toggleQuantity({ type: ProductToggleType.DECREMENT, id: product.id }))}
                >
                  <HiMinusSm />
                </button>
                <span>{amountOfProduct}</span>
                <button
                  disabled={activeCartProduct()?.amount === product.quantity}
                  className={styles.ProductAmount__btn}
                  onClick={() => dispatch(toggleQuantity({ type: ProductToggleType.INCREMENT, id: product.id }))}
                >
                  <HiPlusSm />
                </button>
              </div>
            ) : (
              <Button
                variant="outlined"
                className={classNames({
                  [styles.Btn]: true,
                  [styles.Add__btn]: true,
                })}
                startIcon={<BsFillBagPlusFill />}
                onClick={() => {
                  dispatch(addProduct(product))
                }}
              >
                Cart
              </Button>
            )}
          </div>
        </div>
      </article>
    </>
  )
}
