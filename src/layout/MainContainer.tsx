import { Outlet } from "react-router-dom"
import Header from "./Header"
import Navigation from "./Navigation"

const MainContainer = () => {

  return (
    <div className="flex flex-row flex-nowrap">
      <Navigation />

      <div id="scrollableDiv" className=" mb-12 w-full min-h-screen p-4 overflow-y-auto h-screen flex flex-col items-center space-y-6" style={{ overflowY: "auto" }}>
        <Header />
        <main className="pb-10 flex flex-col space-y-6 max-w-7xl w-full">
          <Outlet />
        </main>
      </div>

    </div >
  )
}

export default MainContainer