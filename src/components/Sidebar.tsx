import { RssIcon } from "@heroicons/react/24/solid"
import {ChatBubbleLeftIcon,VideoCameraIcon,UserGroupIcon,BookmarkIcon,QuestionMarkCircleIcon,CalendarDaysIcon} from '@heroicons/react/24/outline' 
const Sidebar:React.FC = () => {
  const LiStyles:string ="flex items-center mb-5";
  const IconStyles:string="h-4 w-4 mr-4";
  const SpanStyles:string="";
  return (
    <div className=" basis-3/12 h-feed overflow-y-scroll ">
      <div className=" p-5">
        <ul className="p-0 m-0 list-none">
          <li className={LiStyles}>
            <RssIcon className={IconStyles}/>
            <span className={SpanStyles}>Feed</span>
          </li>
          <li className={LiStyles}>
            <ChatBubbleLeftIcon className={IconStyles}/>
            <span className={SpanStyles}>Chat</span>
          </li>
          <li className={LiStyles}>
            <VideoCameraIcon className={IconStyles}/>
            <span className={SpanStyles}>Videos</span>
          </li>
          <li className={LiStyles}>
            <UserGroupIcon className={IconStyles}/>
            <span className={SpanStyles}>Groups</span>
          </li>
          <li className={LiStyles}>
            <BookmarkIcon className={IconStyles}/>
            <span className={SpanStyles}>Bookmarks</span>
          </li>
          <li className={LiStyles}>
            <QuestionMarkCircleIcon className={IconStyles}/>
            <span className={SpanStyles}>Questions</span>
          </li>
          <li className={LiStyles}>
            <CalendarDaysIcon className={IconStyles}/>
            <span className={SpanStyles}>Events</span>
          </li>
        </ul>
        <button className="w-36 border-none p-1 rounded-md font-medium bg-gray-200">Show More</button>
        <hr className="my-5 mx-0" />
        <ul className=" list-none m-0 p-0">
          <li className="flex items-center mb-4">
            <img className="w-8 h-8 rounded-full object-cover mr-2" src="src\assets\person\2.jpeg"/>
            <span>Jhon Doe</span>
          </li>
          <li className="flex items-center mb-4">
            <img className="w-8 h-8 rounded-full object-cover mr-2" src="src\assets\person\2.jpeg"/>
            <span>Jhon Doe</span>
          </li>
          <li className="flex items-center mb-4">
            <img className="w-8 h-8 rounded-full object-cover mr-2" src="src\assets\person\2.jpeg"/>
            <span>Jhon Doe</span>
          </li>
          <li className="flex items-center mb-4">
            <img className="w-8 h-8 rounded-full object-cover mr-2" src="src\assets\person\2.jpeg"/>
            <span>Jhon Doe</span>
          </li>
          <li className="flex items-center mb-4">
            <img className="w-8 h-8 rounded-full object-cover mr-2" src="src\assets\person\2.jpeg"/>
            <span>Jhon Doe</span>
          </li>
          <li className="flex items-center mb-4">
            <img className="w-8 h-8 rounded-full object-cover mr-2" src="src\assets\person\2.jpeg"/>
            <span>Jhon Doe</span>
          </li>
          <li className="flex items-center mb-4">
            <img className="w-8 h-8 rounded-full object-cover mr-2" src="src\assets\person\2.jpeg"/>
            <span>Jhon Doe</span>
          </li>
          <li className="flex items-center mb-4">
            <img className="w-8 h-8 rounded-full object-cover mr-2" src="src\assets\person\2.jpeg"/>
            <span>Jhon Doe</span>
          </li>
          <li className="flex items-center mb-4">
            <img className="w-8 h-8 rounded-full object-cover mr-2" src="src\assets\person\2.jpeg"/>
            <span>Jhon Doe</span>
          </li>
          <li className="flex items-center mb-4">
            <img className="w-8 h-8 rounded-full object-cover mr-2" src="src\assets\person\2.jpeg"/>
            <span>Jhon Doe</span>
          </li>
          <li className="flex items-center mb-4">
            <img className="w-8 h-8 rounded-full object-cover mr-2" src="src\assets\person\2.jpeg"/>
            <span>Jhon Doe</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar