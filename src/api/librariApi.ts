import { get, post, put } from './ApiClient';

// export type CardTypesResponse = {
//   types: TypeItem[];
//   success: boolean;
// };

export function getBooks(data?: object) {
  return get<any>('https://coursesnodejs.herokuapp.com/user/book', data);
}
