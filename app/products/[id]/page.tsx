"use client";

import { ProductPage } from "@/components/app-products-id-page";

interface PageProps {
  params: {
    id: string;
  };
}

export default function Page({ params }: PageProps) {
  return <ProductPage productId={params.id} />;
}
