export interface Product {
  name: string;
  category: string;
  color: string;
  price: number;
  description: string;
  image: string;
  quantity: number;
}

export interface Prod {
  id: number;
  title: string;
  category: string;
  price: number;
  description: string;
  image: string;
}

const CAPITALS = ['Tokyo', 'Italy', 'Vietnam', 'Canada', 'Brazil'] as const;

type Captial = (typeof CAPITALS)[number];
