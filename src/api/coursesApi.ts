import { get } from './ApiClient';

export function getCourses(data?: object) {
  return get<any>('https://coursesnodejs.herokuapp.com/user/course', data);
}

export function getCourseItem(id: string) {
  return get<any>(`https://coursesnodejs.herokuapp.com/user/course/${id}`);
}
