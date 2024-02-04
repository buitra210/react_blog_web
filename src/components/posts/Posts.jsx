import Post from "../post/Post";
import "./posts.css";

export default function Posts() {
  return (
    <div className="posts">
      <Post img="https://images.pexels.com/photos/9373135/pexels-photo-9373135.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      <Post img="https://images.pexels.com/photos/11442216/pexels-photo-11442216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      <Post img="https://images.pexels.com/photos/19402529/pexels-photo-19402529/free-photo-of-woman-behind-leaves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
      <Post img="https://images.pexels.com/photos/13398438/pexels-photo-13398438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
      <Post img="https://images.pexels.com/photos/17685567/pexels-photo-17685567/free-photo-of-a-group-of-people-riding-surfboards-in-the-ocean.jpeg"/>
    </div>
  );
}