import { getAdmin, postAdmin } from "./ApiAdmin";

export function getCoursesAdmin(data?: object) {
  return getAdmin<any>('https://coursesnodejs.herokuapp.com/employee/course', data);
}

export function getCoursesItemAdmin(id: string) {
  return getAdmin<any>(`https://coursesnodejs.herokuapp.com/employee/course/${id}`);
}

export function createCoursesAdmin(data: object) {
  return postAdmin<any>(`https://coursesnodejs.herokuapp.com/employee/course`, data);
}
