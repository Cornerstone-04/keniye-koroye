import { personal } from "./profile";

export type ShopProduct = {
  slug: string;
  name: string;
  category: string;
  description: string;
  image: string;
  gallery: string[];
  specsImage?: string;
  enquiryHref: string;
};

const shopEnquiryHref = (productName: string) =>
  `mailto:${personal.email}?subject=${encodeURIComponent(
    `Shop enquiry: ${productName}`,
  )}`;

export const shopProducts: ShopProduct[] = [
  {
    slug: "rive",
    name: "Rive",
    category: "Sculptural Table / Stool",
    description:
      "The RIVE is part table and part stool. It tells the story of how Africa has been shared like a cake due to colonialism, while still remaining one at the end of the day. The piece brings together technology, craftsmanship in Nigeria, and upcycled materials.",
    image: "/images/shop/rive/rive-top.jpg",
    gallery: [
      "/images/shop/rive/shop-rive-hero.jpeg",
      "/images/shop/rive/rive-spread.jpg",
      "/images/shop/rive/rive-3d-model.jpg",
    ],
    enquiryHref: shopEnquiryHref("Rive"),
  },
  {
    slug: "sagbama-bench",
    name: "Sagbama Bench",
    category: "Public Seating Prototype",
    description:
      "The Sagbama Bench was designed during the pandemic as a chair for public spaces that allowed social distancing while keeping a modern aesthetic. After a few years of working through the idea, Keniye built a prototype with a local manufacturer of seating for parks, airports, and hospitals.",
    image: "/images/shop/sagbama/sagbama-bench.jpeg",
    gallery: [
      "/images/shop/sagbama/sagbama-bench-person.jpg",
      "/images/shop/sagbama/sagbama-bench-high-angle.jpg",
    ],
    specsImage: "/images/shop/sagbama/sagbama-bench-specs.jpg",
    enquiryHref: shopEnquiryHref("Sagbama Bench"),
  },
];
