// ! Objets utilisées
export const NavLinks = [
  {
    path: "",
    name: "Accueil",
  },
  {
    path: "Flavors",
    name: "Nos Saveurs",
  },
  {
    path: "Sale",
    name: "Nos Offres",
  },
  {
    path: "About",
    name: "A Propos",
  },
];

export const DatasCarouselFlavor = [
  {
    image: "/Images/intro.jpg",
    title1: 'Des ingrédients',
    title2: "sélectionnés avec soin",
    bgImg: "bg-[url(/Images/bg-yogurt1.jpg)]",
    description:
      "Nous croyons que la qualité commence à la source. C'est pourquoi nous n'utilisons que des fruits frais de saison et du lait pur, sans conservateur ni aromes artificiels.",
  },
  {
    image: "/Images/yogurt4.jpg",
    title1: 'Des Gouts',
    title2: "Onctueux",
    bgImg: "bg-[url(/Images/bg-yogurt2.webp)]",
    description:
      "Laissez vos séduire par une texture aérienne et fondant incomparable. Notre secret? Un brassage lent et traditionnel qui préserve toute l'onctuosité du lait entier pour un plaisir pur à chaque bouchée.",
  },
  {
    image: "/Images/yogurt6.png",
    title1: 'Des prix défiant',
    title2: "toutes concurence",
    bgImg: "bg-[url(/Images/yogurt4.jpg)]",
    description:
      "Profiter d'une qualité artisanale ne devrait pas etre un luxe. Nous optimisons nos circuits courts pour vous offrir le meilleur du yaourt au prix le plus juste, sans jamais compromettre la fraicheur de nos ingrédients.",
  },
  {
    image: "/Images/yogurt.jpg",
    title1: 'Une variété',
    title2: "de formats",
    bgImg: "bg-[url(/Images/yogurt2.jpg)]",
    description:
      "Que ce soit pour un encas; un dessert familial ou une pause au bureau, nous avons le format idéal. Du pot individuel au format familial, La Lactiere s'adapte a tous vos moments de vie.",
  },
];

export const FilterTable = [
  {
    name: "Noix de Coco",
    bgColor: "bg-stone-600",
  },
  {
    name: "Ananas",
    bgColor: "bg-yellow-700",
  },
  {
    name: "Pomme",
    bgColor: "bg-green-600",
  },
  {
    name: "Poire",
    bgColor: "bg-green-400",
  },
  {
    name: "Fraise",
    bgColor: "bg-red-400",
  },
];

export const PartnersData = [
  {
    img: "./user.jpg",
    name: "Partner's Name",
    description:
      "Grace à notre collaboration, nous garantissons un approvisionnement éthique et des produits de premiére qualité pour tous nos clients.",
    link: "",
  },
  {
    img: "./user2.jpg",
    name: "Partner's Name",
    description:
      "Grace à notre collaboration, nous garantissons un approvisionnement éthique et des produits de premiére qualité pour tous nos clients.",
    link: "",
  },
  {
    img: "./user3.jpg",
    name: "Partner's Name",
    description:
      "Grace à notre collaboration, nous garantissons un approvisionnement éthique et des produits de premiére qualité pour tous nos clients.",
    link: "",
  },
];

export const ProductsTable = [
  {
    id: 0,
    statut: "NOUVEAU",
    titre: "L'Incontournable Fraise Gourmande",
    name: "Fraise",
    bgImg: 'bg-[url("/ImagesProducts/fraise-front-1.jpg")]',
    image: "/ImagesProducts/fraise-back-1.jpg",
    description:
      "Retrouvez le gout authentique du jardin avec notre recette a la fraise. Cueillies à pleine maturité, nos fraises libèrent tout leur parfum dans un ecrin de lait velouté. Un intensément fruité, qui ravira les petits comme les grands gourmets.",
    textFont: "text-red-400",
    bgFont: "bg-rose-300",
    price: "17.00 £",
  },
  {
    id: 1,
    statut: "NOUVEAU",
    titre: "Escale tropicale a l'ananas",
    name: "Ananas",
    bgImg: 'bg-[url("/ImagesProducts/ananas-front-2.jpg")]',
    image: "/ImagesProducts/ananas-back-2.jpg",
    description:
      "Laissez-vous transporter par l'exotisme de notre Elixir. Nous avons sélectionner des fruits muris à point, gorgés de soleil, pour vous offrir une explosion de fraicheur acidulée. Une texture onctueuse parsemée de morceaux juteux pour un voyage sensoriel immédiat.",
    textFont: "text-gray-400",
    bgFont: "bg-amber-200",
    price: "17.00 £",
  },
  {
    id: 2,
    statut: "NOUVEAU",
    titre: "L'Incontournable Fraise Gourmande",
    name: "Fraise",
    bgImg: 'bg-[url("/ImagesProducts/fraise-front-2.jpg")]',
    image: "/ImagesProducts/fraise-back-2.jpg",
    description:
      "Retrouvez le gout authentique du jardin avec notre recette a la fraise. Cueillies à pleine maturité, nos fraises libèrent tout leur parfum dans un ecrin de lait velouté. Un intensément fruité, qui ravira les petits comme les grands gourmets.",
    textFont: "text-red-400",
    bgFont: "bg-rose-300",
    price: "17.00 £",
  },
  {
    id: 4,
    statut: "NOUVEAU",
    titre: "Escale tropicale a l'ananas",
    name: "Ananas",
    bgImg: 'bg-[url("/ImagesProducts/ananas-front-3.jpg")]',
    image: "/ImagesProducts/ananas-back-1.jpg",
    description:
      "Laissez-vous transporter par l'exotisme de notre Elixir. Nous avons sélectionner des fruits muris à point, gorgés de soleil, pour vous offrir une explosion de fraicheur acidulée. Une texture onctueuse parsemée de morceaux juteux pour un voyage sensoriel immédiat.",
    textFont: "text-gray-400",
    bgFont: "bg-amber-200",
    price: "17.00 £",
  },
  {
    id: 5,
    statut: "PROMO",
    titre: "Douceur de Poire d'Automne",
    name: "Poire",
    bgImg: 'bg-[url("/ImagesProducts/poire-1.jpg")]',
    image: "/ImagesProducts/poire-2.jpg",
    description:
      "Succombez à la finesse et à la delicatesse de la poire. Sa chair fondante et ses notes subtilement sucrées se marient harmonieusement avec la rondeur de notre yaourt brassé. Une aliance légère, idéale pour finir le repas sur une note de douceur naturelle.",
    textFont: "text-red-400",
    bgFont: "bg-rose-300",
    price: "17.00 £",
  },
  {
    id: 6,
    statut: "ENERGISANT",
    titre: "Pomme du terroir",
    name: "Pomme de France",
    bgImg: 'bg-[url("/ImagesProducts/pomme-front-4.jpg")]',
    image: "/ImagesProducts/pomme-back-1.jpg",
    description:
      "Toute la richesse de nos terroir dans un pot. Nous utilisons des pommes croquantes récoltées dans nos vergers; lentement compotée pour libérer leurs aromes naturels. Avec L'Elixir Lacté, retrouvez le gout authentique du fruit comme si étiez au verger.",
    textFont: "text-gray-800",
    bgFont: "bg-gray-300",
    price: "17.00 £",
  },
  {
    id: 7,
    statut: "PROMO",
    titre: "Douceur de coco",
    name: "Noix de Coco",
    bgImg: 'bg-[url("/ImagesProducts/noix-front-3.jpg")]',
    image: "/ImagesProducts/noix-back-1.jpg",
    description:
      "Decouvrez l'onctuosité signature de l'Elixir Lacté mariée à la finesse de la noix de coco. Une texture veloutée et un gout délicatement parfumé qui vous transporte instantanément sous les tropiques. L'équilibre parfait entre fraicheur et Gourmandise.",
    textFont: "text-gray-400",
    bgFont: "bg-amber-200",
    price: "17.00 £",
  },
  {
    id: 8,
    statut: "PROMO",
    titre: "Douceur de Poire d'Automne",
    name: "Poire",
    bgImg: 'bg-[url("/ImagesProducts/poire-2.jpg")]',
    image: "/ImagesProducts/poire-1.jpg",
    description:
      "Succombez à la finesse et à la delicatesse de la poire. Sa chair fondante et ses notes subtilement sucrées se marient harmonieusement avec la rondeur de notre yaourt brassé. Une aliance légère, idéale pour finir le repas sur une note de douceur naturelle.",
    textFont: "text-red-400",
    bgFont: "bg-rose-300",
    price: "17.00 £",
  },
  {
    id: 9,
    statut: "ENERGISANT",
    titre: "Douceur de coco",
    name: "Noix de Coco",
    bgImg: 'bg-[url("/ImagesProducts/noix-front-2.jpg")]',
    image: "/ImagesProducts/noix-back-1.jpg",
    description:
      "Decouvrez l'onctuosité signature de l'Elixir Lacté mariée à la finesse de la noix de coco. Une texture veloutée et un gout délicatement parfumé qui vous transporte instantanément sous les tropiques. L'équilibre parfait entre fraicheur et Gourmandise.",
    textFont: "text-gray-400",
    bgFont: "bg-amber-200",
    price: "17.00 £",
  },
  {
    id: 10,
    statut: "ENERGISANT",
    titre: "Pomme du terroir",
    name: "Pomme de France",
    bgImg: 'bg-[url("/ImagesProducts/pomme-front-3.jpg")]',
    image: "/ImagesProducts/pomme-back-2.jpg",
    description:
      "Toute la richesse de nos terroir dans un pot. Nous utilisons des pommes croquantes récoltées dans nos vergers; lentement compotée pour libérer leurs aromes naturels. Avec L'Elixir Lacté, retrouvez le gout authentique du fruit comme si étiez au verger.",
    textFont: "text-gray-800",
    bgFont: "bg-gray-300",
    price: "17.00 £",
  },
  {
    id: 11,
    statut: "NOURRISANT",
    titre: "L'Incontournable Fraise Gourmande",
    name: "Fraise",
    bgImg: 'bg-[url("/ImagesProducts/fraise-front-3.jpg")]',
    image: "/ImagesProducts/fraise-back-1.jpg",
    description:
      "Retrouvez le gout authentique du jardin avec notre recette a la fraise. Cueillies à pleine maturité, nos fraises libèrent tout leur parfum dans un ecrin de lait velouté. Un intensément fruité, qui ravira les petits comme les grands gourmets.",
    textFont: "text-red-400",
    bgFont: "bg-rose-300",
    price: "17.00 £",
  },
  {
    id: 12,
    statut: "PROMO",
    titre: "Escale tropicale a l'ananas",
    name: "Ananas",
    bgImg: 'bg-[url("/ImagesProducts/ananas-front-4.jpg")]',
    image: "/ImagesProducts/ananas-back-2.jpg",
    description:
      "Laissez-vous transporter par l'exotisme de notre Elixir. Nous avons sélectionner des fruits muris à point, gorgés de soleil, pour vous offrir une explosion de fraicheur acidulée. Une texture onctueuse parsemée de morceaux juteux pour un voyage sensoriel immédiat.",
    textFont: "text-gray-400",
    bgFont: "bg-amber-200",
    price: "17.00 £",
  },
];

export const features =[
  {
    id: 0,
    statut: "NOUVEAU",
    titre: "L'Incontournable Fraise Gourmande",
    name: "Fraise",
    bgImg: 'bg-[url("/ImagesProducts/fraise-front-1.jpg")]',
    image: "/ImagesProducts/fraise-back-1.jpg",
    description:
      "Retrouvez le gout authentique du jardin avec notre recette a la fraise. Cueillies à pleine maturité, nos fraises libèrent tout leur parfum dans un ecrin de lait velouté. Un intensément fruité, qui ravira les petits comme les grands gourmets.",
    textFont: "text-red-400",
    bgFont: "bg-rose-300",
    price: "17.00 £",
  },
  {
    id: 1,
    statut: "NOUVEAU",
    titre: "Escale tropicale a l'ananas",
    name: "Ananas",
    bgImg: 'bg-[url("/ImagesProducts/ananas-front-2.jpg")]',
    image: "/ImagesProducts/ananas-back-2.jpg",
    description:
      "Laissez-vous transporter par l'exotisme de notre Elixir. Nous avons sélectionner des fruits muris à point, gorgés de soleil, pour vous offrir une explosion de fraicheur acidulée. Une texture onctueuse parsemée de morceaux juteux pour un voyage sensoriel immédiat.",
    textFont: "text-gray-400",
    bgFont: "bg-amber-200",
    reverse: true,
    price: "17.00 £",
  },
  {
    id: 2,
    statut: "NOUVEAU",
    titre: "L'Incontournable Fraise Gourmande",
    name: "Fraise",
    bgImg: 'bg-[url("/ImagesProducts/fraise-front-2.jpg")]',
    image: "/ImagesProducts/fraise-back-2.jpg",
    description:
      "Retrouvez le gout authentique du jardin avec notre recette a la fraise. Cueillies à pleine maturité, nos fraises libèrent tout leur parfum dans un ecrin de lait velouté. Un intensément fruité, qui ravira les petits comme les grands gourmets.",
    textFont: "text-red-400",
    bgFont: "bg-rose-300",
    price: "17.00 £",
  },
  {
    id: 4,
    statut: "NOUVEAU",
    titre: "Escale tropicale a l'ananas",
    name: "Ananas",
    bgImg: 'bg-[url("/ImagesProducts/ananas-front-3.jpg")]',
    image: "/ImagesProducts/ananas-back-1.jpg",
    description:
      "Laissez-vous transporter par l'exotisme de notre Elixir. Nous avons sélectionner des fruits muris à point, gorgés de soleil, pour vous offrir une explosion de fraicheur acidulée. Une texture onctueuse parsemée de morceaux juteux pour un voyage sensoriel immédiat.",
    textFont: "text-gray-400",
    bgFont: "bg-amber-200",
    reverse: true,
    price: "17.00 £",
  }
]
// ! Objets utilisées
