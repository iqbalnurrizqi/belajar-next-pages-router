export type ProductsType = {
    length: number;
    map(arg0: (product: ProductsType) => React.JSX.Element): React.ReactNode;
    id: number;
    name: string;
    price: number;
    image: string;
    size: number;
    category: string;
    description: string;
  };