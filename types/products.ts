export interface Product {
  _id: string;
  title: string;
  _type: "product";
  description: string;
  price: number;
  category: string;
  productImage?: {
    asset: {
      _ref: string;
      _type: "image";
    };
  };
  tags?: string[]; 
  discountPercentage?: number;
  isNew?: boolean; 
  slug: {
    _type: "slug";
    current: string;
  };
}
