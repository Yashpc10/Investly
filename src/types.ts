// src/types.ts
export type User = {
  _id: string;
  name: string;
  email: string;
  userType: 'startup' | 'investor';
  startupName?: string;
  category?: string;
  createdAt?: string;
  updatedAt?: string;
};

export type AuthContextType = {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  register: (userData: {
    name: string;
    email: string;
    password: string;
    userType: 'startup' | 'investor';
    startupName?: string;
    category?: string;
  }) => Promise<void>;
};