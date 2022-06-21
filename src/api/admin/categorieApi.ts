import { getAdmin } from "./ApiAdmin";

export function getCategoriesAdmin(data?: object) {
  return getAdmin<any>('https://coursesnodejs.herokuapp.com/employee/category', data);
}

export function getCategorieAdmin(id: string) {
  return getAdmin<any>(`https://coursesnodejs.herokuapp.com/employee/category/${id}`);
}