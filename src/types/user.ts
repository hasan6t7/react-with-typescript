export type User = {
  id: number;
  name: string;
  email: string;
};

export type ApiResponse<T> = {
  data: T;
  status: number;
  message: string;
};
