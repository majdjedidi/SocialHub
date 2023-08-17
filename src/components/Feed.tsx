import Post from "./Post"
import Share from "./Share"
import {Posts} from '../../src/dummyData'
const Feed:React.FC= () => {
  return (
    <div className=" basis-[45%]">
      <div className="p-5">
        <Share />
        
        {Posts.map((p) => (
          <Post 
            key={p.id}
            post={p}
          />
        ))}
      </div>
    </div>
  )
}

export default Feed