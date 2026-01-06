import { notFound } from "next/navigation";
import { getGallery } from "@/lib/galleries";
import GalleryViewer from "@/components/GalleryViewer";

export default async function WorkPage({
  params,
}: {
  params: Promise<{ slug: string }> | { slug: string };
}) {
  const resolvedParams = await params;
  const gallery = getGallery(resolvedParams.slug);

  if (!gallery) return notFound();

  return <GalleryViewer images={gallery.images} />;
}
