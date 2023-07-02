import { getPosts } from '@/lib/getPosts';
import { getUserById } from '@/lib/getUsers';
import Link from 'next/link';

export default async function page({ params }: { params: { id: string } }) {
  const postId = params.id;
  const user = await getUserById(postId);
  const posts: Posts[] = await getPosts();
  const userPosts = posts.filter((post) => post.userId === user.id);
  return (
    <>
      <section className="bg-gray-400 hover:bg-gray-500 p-2 rounded-xl text-2xl">
        <p>{user.name}</p>
        <p>@{user.username}</p>
        <p>E-mail: {user.email}</p>
        <p>Phone: {user.phone}</p>
        <p>Company: {user.company.name}</p>
      </section>
      <h2 className="self-start text-2xl">All the posts of this user:</h2>
      <section className="flex flex-col gap-4">
        {userPosts.map((post) => {
          return (
            <Link key={post.id} href={`/posts/${post.id}`}>
              <div className="bg-blue-400 hover:bg-blue-500 rounded-xl p-2">
                <p className="underline">{post.title}</p>
                <p>{post.body}</p>
              </div>
            </Link>
          );
        })}
      </section>
    </>
  );
}
