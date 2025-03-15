import { Outlet } from "react-router-dom";
import NavBar from "./components/includes/NavBar";

function App() {
  return (
    <div className='min-h-screen text-white w-full'>
      <NavBar />
      <Outlet />
    </div>

  )
}

export default App
