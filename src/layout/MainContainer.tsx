import { useState } from "react"
import { Outlet } from "react-router-dom"
import Header from "./Header"
import Navigation from "./Navigation"

const MainContainer = () => {
  const [open, setOpen] = useState(false)
  console.log("bolean", open)
  return (
    <div className="flex flex-row flex-nowrap">
      <Navigation open={open} toggleMenu={() => setOpen(!open)} />
      <Header toggleMenu={() => setOpen(!open)} />

      <div id="scrollableDiv" className="lg:ml-[256px] w-full p-4 flex flex-col items-center space-y-6 " style={{ overflowY: "auto" }}>
        <main style={{ minHeight: 'calc(100vh - 113px)' }} className="py-20 flex flex-col space-y-6 z-0 max-w-7xl w-full">
          <Outlet />
        </main>
      </div>

    </div >
  )
}

export default MainContainer