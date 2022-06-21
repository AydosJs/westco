import { get } from "../ApiClient";

export function getBooksAdmin(data?: object) {
  return get<any>('https://coursesnodejs.herokuapp.com/employee/book', data);
}

export function getBookitemAdmin(id: string) {
  return get<any>(`https://coursesnodejs.herokuapp.com/employee/book/${id}`);
}
