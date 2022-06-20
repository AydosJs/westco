import {
  Routes,
  Route,
} from "react-router-dom";
import MainContainer from "../containers/layout/MainContainer";


export default function AppRouter() {
  return (
    <Routes>
      <Route path='/' element={<MainContainer />} />
    </Routes>
  )
}