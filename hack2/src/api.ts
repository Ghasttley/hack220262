import axios from 'axios';
import type { news, wanted } from './types';

const api = axios.create({ baseURL: import.meta.env.VITE_API_BASE_URL });

export const getWanted = () =>
  api.get<wanted[]>('/wanted').then(r => r.data);

export const getNews = () =>
  api.get<news[]>('/news/feed').then(r => r.data);
