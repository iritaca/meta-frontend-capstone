interface Card {
  title: string;
  img: {
    src: string;
    alt: string;
  };
}

export interface highlightsData extends Card {
  description: string;
  price: string;
  link: string;
  highlighted?: boolean;
}

export interface testimonialData extends Card {
  rating: number;
  review: string;
}

export interface footerListProps {
  title?: string;
  list: { content: React.ReactNode; href?: string }[];
}
