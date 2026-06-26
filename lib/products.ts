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
    name: "Conjunto Tule & Tricot",
    category: "Conjuntos",
    image: PRINCESS_PATH + "anonyig.io_Instagram_lovea.princess_3876190829430111130_6935682506.jpg",
  },
  {
    id: "p2",
    name: "Suéter Cachorrinho",
    category: "Inverno",
    image: PRINCESS_PATH + "anonyig.io_Instagram_lovea.princess_3854316831570566061_6935682506.jpg",
  },
  {
    id: "p3",
    name: "Sacola Presente LOVEA",
    category: "Acessórios",
    image: PRINCESS_PATH + "anonyig.io_Instagram_lovea.princess_3793929324966375065_6935682506.jpg",
  },
  {
    id: "p4",
    name: "Coleção Hello Kitty",
    category: "Papelaria",
    image: PRINCESS_PATH + "anonyig.io_Instagram_lovea.princess_3793929325167705267_6935682506.jpg",
  },
];

const babiesProducts: Product[] = [
  {
    id: "b1",
    name: "Macacão Cachorrinho",
    category: "Recém-nascido",
    image: BABIES_PATH + "anonyig.io_Instagram_lovea.babies_3814309110343636931_45268260388.jpg",
  },
  {
    id: "b2",
    name: "Vestido Xadrez & Laço",
    category: "Meninas",
    image: BABIES_PATH + "anonyig.io_Instagram_lovea.babies_3562776921923673221_45268260388.jpg",
  },
  {
    id: "b3",
    name: "Blusa Xadrez Rosa",
    category: "Coleção Rosa",
    image: BABIES_PATH + "anonyig.io_Instagram_lovea.babies_3576061821465515794_45268260388.jpg",
  },
  {
    id: "b4",
    name: "Conjunto Xadrez Rosa",
    category: "Coleção Rosa",
    image: BABIES_PATH + "anonyig.io_Instagram_lovea.babies_3576061821155119618_45268260388.jpg",
  },
  {
    id: "b5",
    name: "Sapatinhos de Bebê",
    category: "Calçados",
    image: BABIES_PATH + "anonyig.io_Instagram_lovea.babies_3674517879203257170_45268260388.jpg",
  },
  {
    id: "b6",
    name: "Conjunto Cerejinha",
    category: "Recém-nascido",
    image: BABIES_PATH + "anonyig.io_Instagram_lovea.babies_3677358982956640665_45268260388.jpg",
  },
];

export function getProducts(theme: Theme): Product[] {
  if (theme === "babies") return babiesProducts;
  return princessProducts;
}
