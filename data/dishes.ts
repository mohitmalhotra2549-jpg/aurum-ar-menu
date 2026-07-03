import { Dish } from "@/types/dish";

/**
 * The ONLY place dish content lives. To add/change a dish, edit this file
 * and drop a matching GLB (and optional USDZ) into /public/models named
 * exactly "<slug>.glb" / "<slug>.usdz". Nothing else needs to change —
 * pages, cards and the AR viewer all derive their paths from `slug`.
 */
export const dishes: Dish[] = [
  {
    id: "1",
    slug: "chocolate-cake",
    name: "Chocolate Cake",
    category: "Desserts",
    description:
      "Dark Valrhona sponge, whipped ganache and a molten praline core, finished tableside.",
    price: 425,
    currency: "₹",
    vegetarian: true,
    prepTime: "8 min",
    ingredients: [
      "Valrhona 64% chocolate",
      "Cultured butter",
      "Free-range eggs",
      "Hazelnut praline",
      "Madagascar vanilla",
      "Cocoa nib crumble",
    ],
    modelPath: "/models/chocolate-cake.glb",
    iosModelPath: "/models/chocolate-cake.usdz",
  },
  {
    id: "2",
    slug: "grilled-sandwich",
    name: "Grilled Sandwich",
    category: "Snacks",
    description:
      "Charred sourdough, smoked gouda and slow-roasted peppers pressed over an open flame.",
    price: 285,
    currency: "₹",
    vegetarian: true,
    prepTime: "10 min",
    ingredients: [
      "Sourdough loaf",
      "Smoked gouda",
      "Roasted bell peppers",
      "Basil pesto",
      "Sundried tomato",
      "Cultured butter",
    ],
    modelPath: "/models/grilled-sandwich.glb",
    iosModelPath: "/models/grilled-sandwich.usdz",
  },
  {
    id: "3",
    slug: "momos",
    name: "Momos",
    category: "Snacks",
    description:
      "Hand-pleated steamed dumplings, a delicate vegetable filling and a smoked chilli oil.",
    price: 245,
    currency: "₹",
    vegetarian: true,
    prepTime: "12 min",
    ingredients: [
      "Refined flour dough",
      "Cabbage & carrot",
      "Spring onion",
      "Ginger-garlic",
      "Toasted sesame",
      "Smoked chilli oil",
    ],
    modelPath: "/models/momos.glb",
    iosModelPath: "/models/momos.usdz",
  },
  {
    id: "4",
    slug: "pastry",
    name: "Pastry",
    category: "Desserts",
    description:
      "A rotating single-origin fruit pastry — light Chantilly cream over a delicate genoise.",
    price: 195,
    currency: "₹",
    vegetarian: true,
    prepTime: "5 min",
    ingredients: [
      "Genoise sponge",
      "Chantilly cream",
      "Seasonal fruit compote",
      "Almond flakes",
      "Vanilla bean glaze",
    ],
    modelPath: "/models/pastry.glb",
    iosModelPath: "/models/pastry.usdz",
  },
  {
    id: "5",
    slug: "zinger-burger",
    name: "Zinger Burger",
    category: "Mains",
    description:
      "Buttermilk-brined crispy chicken thigh, house slaw and smoked chipotle mayo on a brioche bun.",
    price: 349,
    currency: "₹",
    vegetarian: false,
    prepTime: "14 min",
    ingredients: [
      "Buttermilk-brined chicken thigh",
      "Brioche bun",
      "House slaw",
      "Smoked chipotle mayo",
      "Pickled jalapeño",
      "Iceberg lettuce",
    ],
    modelPath: "/models/zinger-burger.glb",
    iosModelPath: "/models/zinger-burger.usdz",
  },
];

export const categories = ["All", "Snacks", "Mains", "Desserts"] as const;
