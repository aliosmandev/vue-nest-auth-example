import { User } from '@prisma/client';

export class AuthResponse {
  user: User;
  accessToken: string;
}
