import { getAdmin } from "./ApiAdmin";

export function getRoles(data?: object) {
  return getAdmin<any>('https://coursesnodejs.herokuapp.com/employee/role', data);
}