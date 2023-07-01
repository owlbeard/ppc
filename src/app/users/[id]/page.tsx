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
      <section>
        <p>{user.name}</p>
        <p>@{user.username}</p>
        <p>E-mail: {user.email}</p>
        <p>Phone: {user.phone}</p>
        <p>Company: {user.company.name}</p>
      </section>
      <section>
        {userPosts.map((post) => {
          return (
            <div key={post.id}>
              <Link href={`/posts/${post.id}`}>{post.title}</Link>
              <p>{post.body}</p>
            </div>
          );
        })}
      </section>
    </>
  );
}
