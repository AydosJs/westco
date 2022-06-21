import {
  Routes,
  Route,
} from "react-router-dom";
import MainContainer from "../layout/MainContainer";
import RegisterContainer from "../containers/auth/RegisterContainer";
import LoginContainers from "../containers/auth/SignInContainers";
import AuthRoute from "./AuthRoute";
import LibrariContainer from "../containers/librari/LibrariContainer";
import UserPageContainer from "../containers/user/UserPageContainer";
import LibrariViewContainer from "../containers/librari/LibrariViewContainer";
import CoursesContainer from "../containers/courses/CoursesContainer";
import CoursesViewContainer from "../containers/courses/CoursesViewContainer";
import CategoriesContainer from "../containers/categories/CategoriesContainer";
import CategoriesViewContainer from "../containers/categories/CategoriesViewContainer";

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