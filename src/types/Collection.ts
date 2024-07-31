
export interface Collection {
  name: string;
  description: string[];
  mintAddress: string;

  id?: number;
  src?: string;
  exchange?: string;
}

export enum HoodlumCollections {
  TheFoundersCollection = "The Founders Collection",
  TheHonoraries = "The Honoraries",
  TheAllies = "The Allies",
  HoodlumsTheStory = "Hoodlums - The Story",
}

export interface Hoodlums extends Collection {
  collection: HoodlumCollections;
}

export interface HoodlumCollectionsType {
  name: HoodlumCollections;
  src: string;
}