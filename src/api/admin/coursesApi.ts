import { deleteAdmin, getAdmin, postAdmin, putAdmin } from "./ApiAdmin";

export function getCoursesAdmin(data?: object) {
  return getAdmin<any>('https://coursesnodejs.herokuapp.com/employee/course', data);
}

export function getCoursesItemAdmin(id: string) {
  return getAdmin<any>(`https://coursesnodejs.herokuapp.com/employee/course/${id}`);
}

export function createCoursesAdmin(data: object) {
  return postAdmin<any>(`https://coursesnodejs.herokuapp.com/employee/course`, data);
}

export function updateCourseAdmin(data?: object) {
  return putAdmin<any>('https://coursesnodejs.herokuapp.com/employee/course', data);
}

export function deleteCourseAdmin(id: string) {
  return deleteAdmin<any>(`https://coursesnodejs.herokuapp.com/employee/course/${id}`);
}