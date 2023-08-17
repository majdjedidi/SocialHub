import {PhotoIcon,TagIcon,MapPinIcon,FaceSmileIcon} from "@heroicons/react/24/solid"
const Share:React.FC = () => {
  return (
    <div className="w-full h-40 rounded-xl shadow-mini">
        <div className=" p-2">
            <div className="flex items-center">
                <img src="assets\person\1.jpg" className="h-12 w-12 rounded-full object-cover mr-3 m-2"/>
                <input className="border-none w-3/4 focus:outline-none" type="text" placeholder="What's in your mind Majd?" />
            </div>
            <hr className=" m-5 mt-3"/>
            <div className="flex items-center justify-between">
                <div className="flex ml-5">
                    <div className="flex items-center mr-4 cursor-pointer">
                        <PhotoIcon className="h-4 w-4 mr-1 text-red-500"/>
                        <span className="font-medium text-sm">Media</span>
                    </div>
                    <div className="flex items-center mr-4 cursor-pointer">
                        <TagIcon className="h-4 w-4 mr-1 text-blue-500"/>
                        <span className="font-medium text-sm">Tag</span>
                    </div>
                    <div className="flex items-center mr-4 cursor-pointer">
                        <MapPinIcon className="h-4 w-4 mr-1 text-green-500"/>
                        <span className="font-medium text-sm">Location</span>
                    </div>
                    <div className="flex items-center mr-4 cursor-pointer">
                        <FaceSmileIcon className="h-4 w-4 mr-1 text-yellow-500"/>
                        <span className="font-medium text-sm">Feelings</span>
                    </div>
                </div>
                <button className="border-none p-2 rounded-md bg-green-700 mr-5 cursor-pointer text-white">Share</button>
            </div>
        </div>
    </div>
  )
}

export default Share