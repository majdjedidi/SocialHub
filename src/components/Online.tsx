interface Props {
    user:{
     id:number,
     profilePicture: string;
     username: string;
    }
}
const Online:React.FC<Props> = ({user}) => {
  return (
    <li className="flex mb-3 items-center">
            <div className=" mr-3 relative">
              <img src={user.profilePicture} className="w-10 h-10 rounded-full object-cover"/>
              <span className="w-3 h-3 rounded-full bg-lime-500 absolute -top-[2px] right-0 border-2 border-white"></span>
            </div>
            <span className="font-medium">{user.username} </span>
          </li>
  )
}

export default Online