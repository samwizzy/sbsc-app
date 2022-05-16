export interface User {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: UserData[];
  support: { url: string; text: string };
}

export interface UserData {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface UserDetail {
  data: UserData;
  support: { url: string; text: string };
}

export const userData: UserData = {
  id: 0,
  first_name: '',
  last_name: '',
  email: '',
  avatar: '',
};
