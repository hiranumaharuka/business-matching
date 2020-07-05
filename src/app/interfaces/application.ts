export interface Application {
  applicationId: number;
  content: string;
  authorId: string;
  postId: string;
}

export interface ApplicationWithAuthor {
  applicationId: number;
  content: string;
  userName: string;
}
