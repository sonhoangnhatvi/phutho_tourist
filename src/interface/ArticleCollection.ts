export interface ArticleCollection {
  id: string;
  author: string;
  content: string;
  publish_date?: {
    seconds: number;
    nanoseconds: number;
  };

  tags: number[];
  title: string;
  views: number;
  img: string;
}
