import { get, post, put } from './ApiClient';

// export type CardTypesResponse = {
//   types: TypeItem[];
//   success: boolean;
// };

export function getUser() {
  return get<any>('https://coursesnodejs.herokuapp.com/user/getProfile');
}
