import { Users } from "../dummyData"
import Online from "./Online"
interface Props{
  profile:boolean;
}
const Rightbar:React.FC<Props> = ({profile}) => {

  const HomeRightbar = () =>{
    return(
      <>
              <div className="flex items-center">
          <img src="assets\gift.png" className="h-10 w-10 mr-3"/>
          <span className="font-light text-sm">
            <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today
          </span>
        </div>
        
        <img src="assets\ad.png" className="w-full rounded-xl my-2 mx-0"/>
        <h4 className=" mb-5">Online Friends</h4>
        <ul className="p-0 l-0 list-none">
          {Users.map(u=>(
            <Online key={u.id} user={u} />
          ))}
          
        </ul>
        </>
    )
  }
  const ProfileRightbar = () =>{
    return(
      <>
      <h4 className="text-lg font-medium mb-2">User information</h4>
      <div className="mb-7">
        <div className="mb-2">
          <span className="font-medium text-gray-700 mr-4">City :</span>
          <span className="font-light">Sousse</span>
        </div>
        <div>
          <span className="font-medium text-gray-700 mr-4">From :</span>
          <span className="font-light">Sousse</span>
        </div>
        <div>
          <span className="font-medium text-gray-700 mr-4">Relationship :</span>
          <span className="font-light">Single</span>
        </div>
      </div>
      <h4 className="text-lg font-medium mb-2">User Friends</h4>
      <div className="flex flex-wrap justify-between">
        <div className="flex flex-col mb-5 cursor-pointer">
          <img className="w-24 h-24 object-cover rounded-md"src="assets/person/1.jpeg" alt="" />
          <span>Jhon Carter</span>
        </div>
        <div className="flex flex-col mb-5 cursor-pointer">
          <img className="w-24 h-24 object-cover rounded-md"src="assets/person/2.jpeg" alt="" />
          <span>Jhon Carter</span>
        </div>
        <div className="flex flex-col mb-5 cursor-pointer">
          <img className="w-24 h-24 object-cover rounded-md"src="assets/person/3.jpeg" alt="" />
          <span>Jhon Carter</span>
        </div>
        <div className="flex flex-col mb-5 cursor-pointer">
          <img className="w-24 h-24 object-cover rounded-md"src="assets/person/4.jpeg" alt="" />
          <span>Jhon Carter</span>
        </div>
        <div className="flex flex-col mb-5 cursor-pointer">
          <img className="w-24 h-24 object-cover rounded-md"src="assets/person/5.jpeg" alt="" />
          <span>Jhon Carter</span>
        </div>
        <div className="flex flex-col mb-5 cursor-pointer">
          <img className="w-24 h-24 object-cover rounded-md"src="assets/person/6.jpeg" alt="" />
          <span>Jhon Carter</span>
        </div>
        <div className="flex flex-col mb-5 cursor-pointer">
          <img className="w-24 h-24 object-cover rounded-md"src="assets/person/7.jpeg" alt="" />
          <span>Jhon Carter</span>
        </div>
        <div className="flex flex-col mb-5 cursor-pointer">
          <img className="w-24 h-24 object-cover rounded-md"src="assets/person/8.jpeg" alt="" />
          <span>Jhon Carter</span>
        </div>
      </div>
      </>
    )
  }
  return (
    <div className=" basis-[30%]">
      <div className="p-0 pt-5 pr-5 ">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  )
}

export default Rightbar