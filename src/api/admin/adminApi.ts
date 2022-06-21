import { post,get } from "../ApiClient";

export function createProfile(data?: object) {
  return post<any>('https://coursesnodejs.herokuapp.com/employee/create', data);
}
export function signInAdmin(data?: object) {
  return post<any>('https://coursesnodejs.herokuapp.com/employee/sign-in', data);
}

export function getAdminProfile(id: string) {
  return get<any>(`https://coursesnodejs.herokuapp.com/employee/profile/${id}`);
}
