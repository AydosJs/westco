import { deleteAdmin, getAdmin, postAdmin, putAdmin } from "./ApiAdmin";

export function getCategoriesAdmin(data?: object) {
  return getAdmin<any>('https://coursesnodejs.herokuapp.com/employee/category', data);
}

export function getCategorieAdmin(id: string) {
  return getAdmin<any>(`https://coursesnodejs.herokuapp.com/employee/category/${id}`);
}

export function createCategorieAdmin(data: object) {
  return postAdmin<any>(`https://coursesnodejs.herokuapp.com/employee/category`, data);
}

export function updateCategorieAdmin(data?: object) {
  return putAdmin<any>('https://coursesnodejs.herokuapp.com/employee/category', data);
}

export function deleteCategorieAdmin(id: string) {
  return deleteAdmin<any>(`https://coursesnodejs.herokuapp.com/employee/genre/${id}`);
}