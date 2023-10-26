import { IMeta, IProductTemp } from "../../components/Products/types";

interface IWishlistItem {
  id: string;
  product: IProductTemp;
}

export interface IWishlistResponse {
  success: boolean;
  message: string;
  content: IWishlistItem[];
  meta: IMeta;
}
