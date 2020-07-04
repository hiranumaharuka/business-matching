export interface Post {
  postId: number;
  title: string;
  content: string;
  category: string;
  authorId: string;
}

export interface User {
  id: number;
  userName: string;
  mail: string;
  pwd: string;
}

export interface PostWithAuthor  {
  postId: number;
  title: string;
  content: string;
  category: string;
  userName: string;
}

