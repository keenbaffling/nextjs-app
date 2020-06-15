import { Role } from './Role'
import { Log } from './Log';

export type User = {
  id: number;
  email: string;
  password: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  logs: Log[];
  role: Role;
};
