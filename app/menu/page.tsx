import type { Metadata } from "next";
import { dishes } from "@/data/dishes";
import { getDishesWithAvailability } from "@/lib/models.server";
import { MenuClient } from "@/components/MenuClient";

export const metadata: Metadata = {
  title: "AR Menu — Aurum",
  description: "Browse the menu and preview any dish in augmented reality.",
};

// Availability is checked against the filesystem on every request, so
// dropping/removing a .glb in /public/models is reflected immediately.
export const dynamic = "force-dynamic";

export default function MenuPage() {
  const dishesWithAvailability = getDishesWithAvailability(dishes);
  return <MenuClient dishes={dishesWithAvailability} />;
}
