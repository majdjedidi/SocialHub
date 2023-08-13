
import { MagnifyingGlassIcon, UserIcon,ChatBubbleLeftEllipsisIcon, BellIcon} from '@heroicons/react/24/solid'
const Topbar:React.FC = () => {
  return (
    <div className="flex bg-blue-800 h-14 w-full sticky items-center">
        <div className=" basis-3/12">
            <span className=' text-2xl text-white ml-5 cursor-pointer font-bold'>Social<span className=' bg-white text-blue-800 rounded-lg ml-1'>Hub</span></span>
        </div>
        <div className=" basis-5/12">
            <div className=' w-full h-8 bg-white rounded-[30px] flex items-center'>
            <MagnifyingGlassIcon className=' ml-2 w-7'/>
            <input className=" border-none  w-8/12 outline-none"type="text" placeholder='Search for friend, post or video'/>
            </div>
        </div>
        <div className=" basis-4/12 flex items-center justify-around text-white">
            <div>
                <span className=' mr-3 text-sm cursor-pointer'>Home</span>
                <span className=' mr-3 text-sm cursor-pointer'>Timeline</span>
            </div>
            <div className='flex'>
                <div className=' mr-4 relative cursor-pointer'>
                    <UserIcon className='w-5 h-5'/>
                    <span className=' w-3 h-3 bg-red-700 rounded-full text-white absolute flex justify-center items-center text-[10px] -top-1 -right-1'>1</span>
                </div>
                <div className=' mr-4 relative cursor-pointer'>
                    <ChatBubbleLeftEllipsisIcon className='w-5 h-5'/>
                    <span className=' w-3 h-3 bg-red-700 rounded-full text-white absolute flex justify-center items-center text-[10px] -top-1 -right-1'>1</span>
                </div>
                <div className=' mr-4 relative cursor-pointer'>
                    <BellIcon className='w-5 h-5'/>
                    <span className=' w-3 h-3 bg-red-700 rounded-full text-white absolute flex justify-center items-center text-[10px] -top-1 -right-1'>1</span>
                </div>
            </div>
            <img src="src\assets\person\1.jpeg" className=" w-8 h-8 rounded-full object-cover cursor-pointer"alt="" />
        </div>
    </div>
  )
}

export default Topbar