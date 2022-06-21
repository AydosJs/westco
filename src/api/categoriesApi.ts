import { get } from './ApiClient';

export function getCategories(data?: object) {
  return get<any>('https://coursesnodejs.herokuapp.com/user/category', data);
}

export function getCategorieItem(id: string) {
  return get<any>(`https://coursesnodejs.herokuapp.com/user/category/${id}`);
}
