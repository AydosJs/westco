const MainContainer = () => {
  return (
    <div className="flex flex-row flex-nowrap ">
      <div className="max-w-[296px] min-w-[296px] bg-red-200 min-h-screen p-2.5 border-r">
        navigate
      </div>
      <div className="w-full min-h-screen bg-slate-300 p-2.5 overflow-y-auto h-screen flex flex-col items-center space-y-6" style={{ overflowY: "auto" }}>
        <main className="flex flex-col space-y-6 max-w-7xl w-full">
          {Array(23).fill(0).map(item => (
            <div className="p-4 bg-slate-900 text-white">1</div>
          ))}
        </main>
      </div>
    </div>
  )
}

export default MainContainer