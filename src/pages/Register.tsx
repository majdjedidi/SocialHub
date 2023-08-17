
const Register:React.FC = () => {
  return (
    <div className="w-screen h-screen bg-slate-100 flex items-center justify-center">
    <div className="w-2/3 h-2/3 flex">
      <div className=" flex flex-1 flex-col justify-center">
      <span className=' text-5xl text-blue-800 ml-5 cursor-pointer font-extrabold mb-2 '>Social<span className=' bg-blue-800 text-white rounded-lg ml-1'>Hub</span></span>
        <span className="text-2xl">
          Connect with friends and the world around you on SocialHub.
        </span>
      </div>
      <div className=" flex flex-1 flex-col justify-center">
        <div className="h-96 p-5 bg-white flex flex-col justify-between rounded-xl">
        <input placeholder="Username" className="h-12 rounded-xl text-lg pl-5 border border-gray-500 focus:outline-none" />
          <input placeholder="Email" className="h-12 rounded-xl text-lg pl-5 border border-gray-500 focus:outline-none" />
          <input placeholder="Password" className="h-12 rounded-xl text-lg pl-5 border border-gray-500 focus:outline-none" />
          <input placeholder="Password Again" className="h-12 rounded-xl text-lg pl-5 border border-gray-500 focus:outline-none" />
          <button className="h-12 rounded-xl border-none bg-blue-600 text-white text-xl font-medium cursor-pointer">Sign Up</button>
          
          <button className="h-12 w-3/5 self-center rounded-xl border-none bg-green-600 text-white text-xl font-medium cursor-pointer">
            Log into Account
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Register