import { Role } from "../types";

export interface User {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  role: Role;
  employees?: User[];
  createdAt: Date;
  updatedAt: Date;
}
