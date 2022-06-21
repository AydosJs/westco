import { getAdmin, postAdmin } from "./ApiAdmin";

export function createProfile(data?: object) {
  return postAdmin<any>('https://coursesnodejs.herokuapp.com/employee/create', data);
}
export function signInAdmin(data?: object) {
  return postAdmin<any>('https://coursesnodejs.herokuapp.com/employee/sign-in', data);
}

export function getAdminProfile() {
  return getAdmin<any>(`https://coursesnodejs.herokuapp.com/employee/profile`);
}
