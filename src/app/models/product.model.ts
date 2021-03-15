export interface ProductModelServer {
  id: number;
  name: string;
  price: number;
  priceNoTax: number;
  brand: string;
  sku: string;
  aviability: string;
  description: string;
  img1: string;
  img2: string;
  img3: string;
}

export interface ProductServerResponse {
  count: number;
  products: ProductModelServer[];
}