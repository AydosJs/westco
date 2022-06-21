import { post, get } from "../ApiClient";

export function getRoles(data?: object) {
  return get<any>('https://coursesnodejs.herokuapp.com/employee/role', data);
}

// export function getAdminProfile(id: string) {
//   return get<any>(`https://coursesnodejs.herokuapp.com/employee/profile/${id}`);
// }
