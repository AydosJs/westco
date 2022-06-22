import { getAdmin, postAdmin, putAdmin } from "./ApiAdmin";

export function getBooksAdmin(data?: object) {
  return getAdmin<any>('https://coursesnodejs.herokuapp.com/employee/book', data);
}

export function getBookitemAdmin(id: string) {
  return getAdmin<any>(`https://coursesnodejs.herokuapp.com/employee/book/${id}`);
}

export function updateBookAdmin(data?: object) {
  return putAdmin<any>('https://coursesnodejs.herokuapp.com/employee/book', data);
}

export function createBookAdmin(data: object) {
  return postAdmin<any>(`https://coursesnodejs.herokuapp.com/employee/book`, data);
}
