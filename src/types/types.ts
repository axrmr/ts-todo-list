export type Task = {
  id: number;
  value: string;
  isCompleted: boolean;
};

export type PromiseError = { code: string; message: string };

export type User = {
  uid: string;
  name: string | null;
  email: string | null;
  avatar?: string | null;
  tasks?: Task[];
};
