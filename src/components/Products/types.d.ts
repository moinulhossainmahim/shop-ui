import { ICategory, ISubCategory } from "../ProductsWithSidebar/types.d";

export interface IProduct {
  id: string;
  img: string;
  name: string;
  discountPrice: string;
  regularPrice: string;
  offerPercent: string;
  amount: number;
}

export interface IProductTemp {
  id: string;
  featuredImg: string | File;
  galleryImg: File[] | string[];
  name: string;
  categories: ICategory[];
  subcategories: ISubCategory[];
  slug: string;
  unit: string;
  desc: string;
  price: string;
  salePrice: string;
  quantity: number;
  status: string;
  sku: string;
}

export interface IMeta {
  page: number;
  take: number;
  itemCount: number;
  pageCount: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}

export interface IProductsResponse {
  content: IProductTemp[];
  success: boolean;
  message: string;
}
