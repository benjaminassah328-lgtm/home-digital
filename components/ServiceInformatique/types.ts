// ============================================================================
// TYPES & INTERFACES - Service Informatique
// ============================================================================

export type Service = {
  icon: string;
  title: string;
  description: string;
  features: string[];
};

export type License = {
  type: "personnel" | "professionnel" | "entreprise";
  duration: "1_mois" | "1_an" | "perpetuel";
  users: number;
  support: boolean;
};

export type Software = {
  id: number;
  name: string;
  price: number;
  priceFormatted: string;
  category: string;
  icon: string;
  description: string;
  image?: string;
  licenses: License[];
  stock: number;
  rating: number;
  reviews: number;
  features: string[];
  system: string;
  publisher: string;
};
