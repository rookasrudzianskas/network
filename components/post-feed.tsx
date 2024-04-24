import React from 'react';
import Post from "@/components/post";
import {IPostDocument} from "@/mongodb/models/post";

const PostFeed = ({ posts }: { posts: IPostDocument[] }) => {
  return (
    <div className="space-y-2 pb-20">
      {posts?.map((post) => (
        <Post key={post._id} post={post} />
      ))}
    </div>
  );
};

export default PostFeed;
// by Rokas with ❤️
