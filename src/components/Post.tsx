import {EllipsisVerticalIcon} from '@heroicons/react/24/solid'
import {Users} from '../../src/dummyData'
import { useState } from 'react';
interface Props{
    post :{
            id: number;
            desc?: string;
            photo: string;
            date: string;
            userId: number;
            like: number;
            comment: number;
          } | null
    
}
const Post:React.FC<Props> =({post}) => {
   const[like,setLike] =useState<number>(post?.like ||0);
   const[isLiked,setIsLiked] =useState<boolean>(false);
    const likeHandler = () =>{
        setLike(isLiked? like-1 : like+1);
        setIsLiked(!isLiked);
    }

  return (
    <div className='w-full rounded-xl shadow-mini my-7 mx-0'>
        <div className=' p-2'>
            <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                    <img src={Users.filter((u)=>u.id===post?.userId)[0].profilePicture} className='w-8 h-8 rounded-full object-cover'/>
                    <span className='text-base font-medium my-0 mx-3'>
                        {Users.filter((u)=>u.id===post?.userId)[0].username}
                    </span>
                    <span className='text-xs'>{post?.date}</span>
                </div>
                <div>
                     <EllipsisVerticalIcon className='h-6 w-6' />
                </div>
            </div>
            <div className='my-5 mx-0'>
                <span>{post?.desc}</span>
                <img className='mt-5 w-full max-h-[500px] object-contain' src={post?.photo}/>
            </div>
            <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                    <img className='w-6 h-6 mr-1 cursor-pointer' src="assets\like.png"
                    onClick={likeHandler}/>
                    <img className='w-6 h-6 mr-1 cursor-pointer' src="assets\heart.png"
                    onClick={likeHandler}/>
                    <span className='text-sm'>{like} people like it</span>
                </div>
                <div>
                    <span className=' cursor-pointer text-sm border-dashed border-gray-200 border-b'>{post?.comment} comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post