interface Tag {
  _id: string;
  name: string;
  color?: string;
}

interface Author {
  _id: string;
  name: string;
  image?: string;
}

interface Question {
  _id: string;
  title: string;
  description: string;
  tags: Tag[];
  author: Author;
  createdAt: number;
  upvotes: number;
  answers: number;
  views: number;
}
