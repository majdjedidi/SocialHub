import Feed from "../components/Feed"
import Rightbar from "../components/Rightbar"
import Sidebar from "../components/Sidebar"
import Topbar from "../components/Topbar"
const Home:React.FC = () => {
  return (

    <>
    <Topbar />
    <div className=" flex w-full">
      <Sidebar />
      <Feed />
      <Rightbar />
    </div>
    </>
  )
}

export default Home