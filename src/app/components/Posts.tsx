import { useRouter } from 'next/navigation';
import Pagination from '../components/Pagination';
import { useState } from 'react';
export default function Posts({ posts, users }: PostsProps) {
  const router = useRouter();
  const [page, setPage] = useState(1);
  return (
    <>
      <Pagination page={page} setPage={setPage} />
      {posts.map(async (post) => {
        return (
          <div key={post.id}>
            <button onClick={() => router.push(`/posts/${post.id}`)}>
              {post.title}
            </button>
            <p>{post.body}</p>
            {users
              .filter((user) => {
                return user.id === post.userId;
              })
              .map((user) => {
                return (
                  <div key={user.id}>
                    <p>{user.name}</p>
                    <p>@{user.username}</p>
                  </div>
                );
              })}
          </div>
        );
      })}
      <Pagination page={page} setPage={setPage} />
    </>
  );
}
