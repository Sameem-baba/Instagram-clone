import { useEffect, useState } from "react";
import { collection, onSnapshot, query, orderBy } from "@firebase/firestore";
import Post from "./Post";
import { db } from "../firebase";

function Posts() {
    const [posts, setPosts] = useState([]);


    useEffect(
        () =>
            onSnapshot(
                query(collection(db, 'posts'), orderBy('timestamp', 'desc')),
                snapshot => {
                    setPosts(snapshot.docs);
                }
            ),
        [db]
    );

    return (
        <div>
            {posts.map((post) => (
                <Post
                    key={post.id}
                    id={post.id}
                    username={post.data().username}
                    img={post.data().image}
                    caption={post.data().caption}
                    userImg={post.data().profileImg}
                />
            ))}
        </div>
    )
}

export default Posts
