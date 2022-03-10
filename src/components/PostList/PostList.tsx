import React from 'react';
import { Post } from '../../types/post';
import PostInfo from '../PostInfo';

import './PostList.scss';

type Props = {
  posts: Post[];
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <ul className="post__list">
    {posts.map(post => (
      <li key={post.id} className="post__item">
        <PostInfo post={post} />
      </li>
    ))}
  </ul>
);