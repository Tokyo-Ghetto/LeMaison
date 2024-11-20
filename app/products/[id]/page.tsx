import { ProductPage } from "@/components/app-products-id-page";
import { use } from "react";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default function Page(props: PageProps) {
  const params = use(props.params);
  return <ProductPage productId={params.id} />;
}
