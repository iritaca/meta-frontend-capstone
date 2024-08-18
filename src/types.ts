interface Card {
  title: string;
  img?: {
    src: string;
    alt: string;
  };
}

export interface dish extends Card {
  price: string;
  highlighted?: boolean;
  description: string;
  link: string;
}

export interface testimonialData extends Card {
  rating: number;
  review: string;
}

export interface footerListProps {
  title?: string;
  list: { content: React.ReactNode; href?: string }[];
}

export interface reservation {
  name: string;
  email: string;
  seatOptions: string;
  dinners: string;
  ocassion: string;
  date: string;
  time: string;
  comments: string;
}
