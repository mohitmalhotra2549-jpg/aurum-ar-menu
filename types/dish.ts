export type Category = "Snacks" | "Mains" | "Desserts";

export interface Dish {
  id: string;
  slug: string;
  name: string;
  category: Category;
  description: string;
  price: number;
  currency: string;
  vegetarian: boolean;
  prepTime: string;
  ingredients: string[];
  image: string;
  /** Paths are fixed by convention: /models/<slug>.glb and /models/<slug>.usdz */
  modelPath: string;
  iosModelPath: string;
}

export interface DishAvailability {
  glbAvailable: boolean;
  usdzAvailable: boolean;
}

export type DishWithAvailability = Dish & DishAvailability;
