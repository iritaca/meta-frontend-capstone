interface Card {
  title: string;
}

export interface highlightsData extends Card {
  description: string;
  price: string;
  link: string;
  img: {
    src: string;
    alt: string;
  };

  highlighted?: boolean;
}

export interface testimonialData extends Card {
  rating: number;
  review: string;
}
