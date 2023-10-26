export interface ISidebar {
  id: string;
  icon: IconType;
  parentText: string;
  childText?: string[];
}

export interface ISubCategory {
  id: string;
  name: string;
  description: string;
  slug: string;
}

export interface ICategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  slug: string;
  subCategories: ISubCategory[]
}

export interface ICateogryResponse {
  success: boolean;
  content: ICategory[];
  message: string;
  meta?: IMeta;
}
