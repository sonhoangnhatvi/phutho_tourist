export interface ArticleCollection {
  id: string;
  author: string;
  content: string;
  publish_date?: {
    seconds: number;
    nanoseconds: number;
  };

  tags: string[];
  title: string;
  views: number;
  img: string;
}
