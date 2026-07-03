import fs from "node:fs";
import path from "node:path";
import { Dish, DishWithAvailability } from "@/types/dish";

/**
 * Checks the real filesystem inside /public/models so availability reflects
 * whatever files you've actually dropped in — no code changes required
 * when you add or remove a .glb / .usdz.
 */
function fileExists(publicRelativePath: string): boolean {
  try {
    const absolute = path.join(process.cwd(), "public", publicRelativePath);
    return fs.existsSync(absolute) && fs.statSync(absolute).size > 0;
  } catch {
    return false;
  }
}

export function withAvailability(dish: Dish): DishWithAvailability {
  return {
    ...dish,
    glbAvailable: fileExists(dish.modelPath.replace(/^\//, "")),
    usdzAvailable: fileExists(dish.iosModelPath.replace(/^\//, "")),
  };
}

export function getDishesWithAvailability(dishes: Dish[]): DishWithAvailability[] {
  return dishes.map(withAvailability);
}
