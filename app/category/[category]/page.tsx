import { CategoryPage } from "@/components/app-category-page";
import { use } from "react";

type PageProps = {
  params: Promise<{ category: string }>;
};

export default function Page(props: PageProps) {
  const params = use(props.params);
  return <CategoryPage category={params.category} />;
}
