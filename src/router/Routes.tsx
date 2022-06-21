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