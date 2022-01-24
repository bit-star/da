import dayjs from 'dayjs';

export interface IApplication {
  id?: number;
  name?: string | null;
  url?: string | null;
}

export const defaultValue: Readonly<IApplication> = {};
