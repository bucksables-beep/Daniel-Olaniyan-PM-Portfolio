export interface Project {
  id: number;
  image: string;
  alt: string;
  title: string;
  description: string;
  tags: string[];
  categories: string[];
  impact: {
    title: string;
    description: string;
  };
}
