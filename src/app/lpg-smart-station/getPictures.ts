export type LPGCarousel = {
    src: string,
    alt: string,
    title: string,
    description: string,
}

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

function mapToLPG(item: any): LPGCarousel {
  const src = item.src;
  const image =
    src?.formats?.large?.url ||
    src?.formats?.medium?.url ||
    src?.formats?.small?.url ||
    src?.url ||
    null;

  return {
    src: image,
    alt: item.alt,
    title: item.title,
    description: item.description
  };
}

export async function getPictures(): Promise<LPGCarousel[]> {
  const res = await fetch(`${STRAPI_URL}/jgo-carousels?populate=*`, {
    cache: "no-store", // or { next: { revalidate: 60 } } if you want ISR
  });
  if (!res.ok) throw new Error("Failed to fetch pictures");
  const json = await res.json();
  return json.data.map(mapToLPG);
}