export type Gallery = {
  slug: string;
  label: string; // what shows in the sidebar
  images: string[]; // paths inside /public
};

export const siteName = "Jack Clauss";

export const galleries: Gallery[] = [
  {
    slug: "work-1",
    label: "Whole",
    images: [
      "/work/work-1/01.jpg",
      "/work/work-1/02.jpg",
      "/work/work-1/03.jpg",
      "/work/work-1/04.jpg",
      "/work/work-1/05.jpg",
      "/work/work-1/06.jpg",
      "/work/work-1/07.jpg",
      "/work/work-1/08.jpg",
      "/work/work-1/09.jpg",
      "/work/work-1/10.jpg",
      "/work/work-1/11.jpg",

    ],
  },
  {
    slug: "work-2",
    label: "Figure",
    images: [
      "/work/work-2/01.jpg",
      "/work/work-2/02.jpg",
      "/work/work-2/03.jpg",
      "/work/work-2/04.jpg",
      "/work/work-2/05.jpg",
      "/work/work-2/06.jpg",
      "/work/work-2/07.jpg",
      "/work/work-2/08.jpg",
    ],
  },
  {
    slug: "work-3",
    label: "Either/Or",
    images: [
      "/work/work-3/01.jpg",
      "/work/work-3/02.jpg",
      "/work/work-3/03.jpg",
      "/work/work-3/04.jpg",
      "/work/work-3/05.jpg",
      "/work/work-3/06.jpg",
      "/work/work-3/07.jpg",
      "/work/work-3/08.jpg",
      "/work/work-3/09.jpg",
      "/work/work-3/10.jpg",
  
    ],
  },

  {
    slug: "work-4",
    label: "Installation",
    images: [
      "/work/work-4/01.jpg",
      "/work/work-4/02.jpg",
      "/work/work-4/03.jpg",
      "/work/work-4/04.jpg",
      "/work/work-4/05.jpg",
      "/work/work-4/06.jpg",
      "/work/work-4/07.jpg",
      "/work/work-4/08.jpg",
      "/work/work-4/09.jpg",
      "/work/work-4/10.jpg",
   
    ],
  },
  
];

export function getGallery(slug: string) {
  return galleries.find((g) => g.slug === slug);
}
