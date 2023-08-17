import Feed from "../components/Feed"
import Rightbar from "../components/Rightbar"
import Sidebar from "../components/Sidebar"
import Topbar from "../components/Topbar"

const Profile:React.FC = () => {
  return (
    <>
    <Topbar />
    <div className="flex">
      <Sidebar />
      <div className="basis-9/12">
        <div className="profileRightTop">
          <div className="h-80 relative">
            <img
              className="w-full h-64 object-cover"
              src="assets/post/3.jpeg"
              alt=""
            />
            <img
              className="w-36 h-36 rounded-full object-cover absolute left-0 right-0 m-auto top-40 border-white border-4 "
              src="assets/person/7.jpeg"
              alt=""
            />
          </div>
          <div className="flex flex-col items-center justify-center">
              <h4 className="text-2xl">Safak Kocaoglu</h4>
              <span className="font-light">Hello my friends!</span>
          </div>
        </div>
        <div className="flex">
          <Feed />
          <Rightbar profile={true}/>
        </div>
      </div>
    </div>
  </>
  )
}

export default Profile