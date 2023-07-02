import { getPosts } from '@/lib/getPosts';
import { getUsers } from '@/lib/getUsers';
import Link from 'next/link';

export default async function page() {
  const posts = await getPosts();
  const users = await getUsers();
  return (
    <main className="flex flex-col gap-4">
      <h2 className="text-2xl p-4">You can find all the posts here:</h2>
      {posts.map(async (post) => {
        return (
          <Link key={post.id} className="text-lg" href={`/posts/${post.id}`}>
            <div className="bg-blue-400 hover:bg-blue-500 rounded-xl p-2">
              <p className=" underline text-xl">{post.title}</p>
              <p>{post.body}</p>
              {users
                .filter((user) => {
                  return user.id === post.userId;
                })
                .map((user) => {
                  return (
                    <div key={user.id} className="text-right">
                      <p>{user.name}</p>
                      <p>@{user.username}</p>
                    </div>
                  );
                })}
            </div>
          </Link>
        );
      })}
    </main>
  );
}
