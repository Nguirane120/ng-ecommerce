export interface Cart {
  status: number;
  cart: CartElement[];
}

export interface CartElement {
  id: number;
  user_id: string;
  product_id: number;
  product_qty: number;
  created_at: Date;
  updated_at: Date;
  product: Product;
}

export interface Product {
  status: number;
  products: ProductElement[];
}

export interface ProductElement {
  id: number;
  category_id: number;
  meta_title: string;
  meta_keywords: string;
  meta_description: string;
  slug: string;
  name: string;
  description: null;
  brand: string;
  selling_price: string;
  original_price: string;
  qt: string;
  image: string;
  feature: number;
  popular: number;
  status: number;
  created_at: Date;
  updated_at: Date;
  category: Category;
}

export interface Category {
  id: number;
  meta_title: string;
  meta_keywords: null;
  meta_description: null;
  slug: string;
  name: string;
  description: null;
  status: number;
  created_at: Date;
  updated_at: Date;
}
