

const Login:React.FC = () => {
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
          <div className="h-72 p-5 bg-white flex flex-col justify-between rounded-xl">
            <input placeholder="Email" className="h-12 rounded-xl text-lg pl-5 border border-gray-500 focus:outline-none" />
            <input placeholder="Password" className="h-12 rounded-xl text-lg pl-5 border border-gray-500 focus:outline-none" />
            <button className="h-12 rounded-xl border-none bg-blue-600 text-white text-xl font-medium cursor-pointer">Log In</button>
            <span className="text-center text-blue-600">Forgot Password?</span>
            <button className="h-12 w-3/5 self-center rounded-xl border-none bg-green-600 text-white text-xl font-medium cursor-pointer">
              Create a New Account
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login