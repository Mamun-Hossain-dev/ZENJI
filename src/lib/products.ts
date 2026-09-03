export type Product = {
  name: string;
  price: string;
  compareAt?: string;
  frontImage: string;
  backImage: string;
  tag?: "SALE" | "NEW";
  color: string;
  view: "FRONT" | "BACK" | "ON MODEL";
};

export const products: Product[] = [
  {
    name: "Blue Flame Tee",
    price: "A$33.99",
    compareAt: "A$39.99",
    frontImage: "/images/blue-flame.png",
    backImage: "/images/blue-flame-back.png",
    tag: "SALE",
    color: "Cobalt / 240 GSM",
    view: "FRONT",
  },
  {
    name: "Bushido Tee",
    price: "A$39.99",
    frontImage: "/images/bushido-front.png",
    backImage: "/images/bushido.png",
    tag: "NEW",
    color: "Bone / 240 GSM",
    view: "BACK",
  },
  {
    name: "Demon Blood Tee",
    price: "A$33.99",
    compareAt: "A$39.99",
    frontImage: "/images/demon-blood.png",
    backImage: "/images/demon-blood-back.png",
    tag: "SALE",
    color: "Dust Rose / 240 GSM",
    view: "FRONT",
  },
  {
    name: "Domain Expansion Tee",
    price: "A$39.99",
    frontImage: "/images/domain-expansion.png",
    backImage: "/images/domain-expansion-back.png",
    tag: "NEW",
    color: "Void Violet / 240 GSM",
    view: "ON MODEL",
  },
];

export type CollectionFilter = "SALE" | "NEW_ARRIVAL" | "LIMITED" | "ZANGETSU";

export type CollectionProduct = Product & {
  id: string;
  categories: CollectionFilter[];
};

const collectionVariants: Array<{
  id: string;
  base: number;
  name: string;
  categories: CollectionFilter[];
  reverse?: boolean;
}> = [
  {
    id: "blue-flame",
    base: 0,
    name: "Blue Flame Tee",
    categories: ["SALE", "LIMITED"],
  },
  {
    id: "bushido",
    base: 1,
    name: "Bushido Tee",
    categories: ["NEW_ARRIVAL", "LIMITED"],
  },
  {
    id: "demon-blood",
    base: 2,
    name: "Demon Blood Tee",
    categories: ["SALE", "ZANGETSU"],
  },
  {
    id: "domain-expansion",
    base: 3,
    name: "Domain Expansion Tee",
    categories: ["NEW_ARRIVAL"],
  },
  {
    id: "tide-crest",
    base: 0,
    name: "Tide Crest Tee",
    categories: ["LIMITED", "ZANGETSU"],
    reverse: true,
  },
  {
    id: "wandering-ronin",
    base: 1,
    name: "Wandering Ronin Tee",
    categories: ["NEW_ARRIVAL"],
    reverse: true,
  },
  {
    id: "oni-moon",
    base: 2,
    name: "Oni Moon Tee",
    categories: ["LIMITED"],
    reverse: true,
  },
  {
    id: "void-sigil",
    base: 3,
    name: "Void Sigil Tee",
    categories: ["SALE", "ZANGETSU"],
    reverse: true,
  },
  {
    id: "blue-hour",
    base: 0,
    name: "Blue Hour Tee",
    categories: ["NEW_ARRIVAL", "ZANGETSU"],
  },
  {
    id: "last-samurai",
    base: 1,
    name: "Last Samurai Tee",
    categories: ["SALE", "LIMITED"],
  },
];

export const collectionProducts: CollectionProduct[] = collectionVariants.map(
  ({ id, base, name, categories, reverse }) => {
    const source = products[base];
    return {
      ...source,
      id,
      name,
      categories,
      frontImage: reverse ? source.backImage : source.frontImage,
      backImage: reverse ? source.frontImage : source.backImage,
      tag: categories.includes("SALE")
        ? "SALE"
        : categories.includes("NEW_ARRIVAL")
          ? "NEW"
          : source.tag,
    };
  },
);

export function productSlug(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function getProductBySlug(slug: string) {
  return collectionProducts.find(
    (product) => productSlug(product.name) === slug,
  );
}
