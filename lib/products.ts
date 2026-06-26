import type { Theme } from "@/contexts/ThemeContext";

export interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
}

const PRINCESS_PATH = "/assets/produtos/lovea-princess/";
const BABIES_PATH = "/assets/produtos/lovea-babies/";

const princessProducts: Product[] = [
  {
    id: "p1",
    name: "Conjunto Floral Premium",
    category: "Conjuntos",
    image: PRINCESS_PATH + "baby-natur-O3kaBMOuJrQ-unsplash.jpg",
  },
  {
    id: "p2",
    name: "Vestido Laço & Renda",
    category: "Vestidos",
    image: PRINCESS_PATH + "balesstudio-SkWflzXpvcw-unsplash.jpg",
  },
  {
    id: "p3",
    name: "Conjunto Passeio Delicado",
    category: "Conjuntos",
    image: PRINCESS_PATH + "enis-yavuz-oD3X-e4L2ac-unsplash.jpg",
  },
  {
    id: "p4",
    name: "Vestido Festa Infantil",
    category: "Festas",
    image: PRINCESS_PATH + "jeremy-mcknight-11GZVrMzfUU-unsplash.jpg",
  },
  {
    id: "p5",
    name: "Look Princess Completo",
    category: "Coleção Princess",
    image: PRINCESS_PATH + "zoshua-colah-t9GojOvCqg0-unsplash.jpg",
  },
];

const babiesProducts: Product[] = [
  {
    id: "b1",
    name: "Macacão Fofo Bebê",
    category: "Recém-nascido",
    image: BABIES_PATH + "balesstudio-EdjNw_eIv68-unsplash.jpg",
  },
  {
    id: "b2",
    name: "Saída de Maternidade",
    category: "Enxoval",
    image: BABIES_PATH + "christopher-luther-CK0aTZqepTw-unsplash.jpg",
  },
  {
    id: "b3",
    name: "Conjunto Suave & Macio",
    category: "0 a 3 meses",
    image: BABIES_PATH + "flaviu-costin-FhAQLKYuE4M-unsplash.jpg",
  },
  {
    id: "b4",
    name: "Macacão Listrado",
    category: "Recém-nascido",
    image: BABIES_PATH + "jackson-kondili-5juo633uIEc-unsplash.jpg",
  },
  {
    id: "b5",
    name: "Body Manga Longa",
    category: "Bodies",
    image: BABIES_PATH + "jackson-kondili-x5VhI538fII-unsplash.jpg",
  },
  {
    id: "b6",
    name: "Kit Enxoval Completo",
    category: "Enxoval",
    image: BABIES_PATH + "marcin-jozwiak-v8m7Dza5a9c-unsplash.jpg",
  },
  {
    id: "b7",
    name: "Sacola Presente LUMEA",
    category: "Acessórios",
    image: BABIES_PATH + "mediamodifier-VoXqvbLAPjM-unsplash.jpg",
  },
];

export function getProducts(theme: Theme): Product[] {
  if (theme === "babies") return babiesProducts;
  return princessProducts;
}
