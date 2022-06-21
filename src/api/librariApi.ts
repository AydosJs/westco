import { get } from './ApiClient';

// export type CardTypesResponse = {
//   types: TypeItem[];
//   success: boolean;
// };

export function getBooks(data?: object) {
  return get<any>('https://coursesnodejs.herokuapp.com/user/book', data);
}

export function getBookitem(id: string) {
  return get<any>(`https://coursesnodejs.herokuapp.com/user/book/${id}`);
}
