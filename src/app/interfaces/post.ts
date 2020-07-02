export interface Post {
  id: number;
  title: string;
  content: string;
  category: string;
  createdAt: Date;
}

export interface User {
  id: number;
  name: string;
  mail: string;
  pwd: string;
  createdAt: Date;
}



