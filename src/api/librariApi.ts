import { get } from './ApiClient';

export function getBooks(data?: object) {
  return get<any>('https://coursesnodejs.herokuapp.com/user/book', data);
}

export function getBookitem(id: string) {
  return get<any>(`https://coursesnodejs.herokuapp.com/user/book/${id}`);
}
