import Link from 'next/link';
import { getPosts } from '@/lib/getPosts';
import { getUsers } from '@/lib/getUsers';

export default async function page() {
  const posts: Posts[] = await getPosts();
  return (
    <main>
      {posts.map(async (post) => {
        const users = await getUsers();
        return (
          <div key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
            <p>{post.body}</p>

            {users
              .filter((user) => {
                return user.id === post.userId;
              })
              .map((user) => {
                return (
                  <>
                    <p>{user.name}</p>
                    <p>@{user.username}</p>
                  </>
                );
              })}
          </div>
        );
      })}
    </main>
  );
}
