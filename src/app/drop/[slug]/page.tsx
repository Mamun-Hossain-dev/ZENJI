import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetails } from "@/components/product/ProductDetails";
import {
  collectionProducts,
  getProductBySlug,
  productSlug,
} from "@/lib/products";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return collectionProducts.map((product) => ({
    slug: productSlug(product.name),
  }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  return product
    ? {
        title: product.name,
        description: `${product.name} from the ZENJI Origin Drop.`,
      }
    : { title: "Product Not Found" };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  return <ProductDetails product={product} />;
}
