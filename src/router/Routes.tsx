import {
  Routes,
  Route,
} from "react-router-dom";
import MainContainer from "../layout/MainContainer";
import RegisterContainer from "../containers/auth/RegisterContainer";
import LoginContainers from "../containers/auth/SignInContainers";
import AuthRoute from "./AuthRoute";
import LibrariContainer from "../containers/client/librari/LibrariContainer";
import UserPageContainer from "../containers/client/user/UserPageContainer";
import LibrariViewContainer from "../containers/client/librari/LibrariViewContainer";
import CoursesContainer from "../containers/client/courses/CoursesContainer";
import CoursesViewContainer from "../containers/client/courses/CoursesViewContainer";
import CategoriesContainer from "../containers/client/categories/CategoriesContainer";
import CategoriesViewContainer from "../containers/client/categories/CategoriesViewContainer";
import BooksList from "../containers/admin/librari/BooksList";
import SignInAdminProfileContainer from "../containers/admin/profile/SignInAdminProfileContainer";
import AdminProfileContainer from "../containers/admin/profile/AdminProfileContainer";
import CreateBookContainer from "../containers/admin/librari/crud/CreateBookContainer";
import CoursesList from "../containers/admin/courses/CoursesList";
import CreateCourseContainer from "../containers/admin/courses/crud/CreateCourseContainer";
import EditBookContainer from "../containers/admin/librari/crud/EditBookContainer";

export default function AppRouter() {
  return (
    <Routes>

      <Route element={<AuthRoute />}>
        <Route path="/register" element={<RegisterContainer />} />
        <Route path="/sign-in" element={<LoginContainers />} />
      </Route>

      <Route element={<MainContainer />}>
        <Route path='/user-profile' element={<UserPageContainer />} />

        <Route path='/librari' element={<LibrariContainer />} />
        <Route path='/librari/:id' element={<LibrariViewContainer />} />

        <Route path='/courses' element={<CoursesContainer />} />
        <Route path='/courses/:id' element={<CoursesViewContainer />} />

        <Route path='/categories' element={<CategoriesContainer />} />
        <Route path='/categories/:id' element={<CategoriesViewContainer />} />

        {/* ADMIN */}
        <Route path='/admin/sign-in' element={<SignInAdminProfileContainer />} />
        <Route path='/admin/profile' element={<AdminProfileContainer />} />

        <Route path='/admin/book-list' element={<BooksList />} />
        <Route path='/admin/create-book' element={<CreateBookContainer />} />
        <Route path='/admin/edit-book/:id' element={<EditBookContainer />} />

        <Route path='/admin/courses-list' element={<CoursesList />} />
        <Route path='/admin/create-course' element={<CreateCourseContainer />} />

      </Route>





      <Route
        path="*"
        element={
          <main className="">
            <p>There is nothing here!</p>
          </main>
        }
      />
    </Routes>
  )
}