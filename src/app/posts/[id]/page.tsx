import { getComments } from '@/lib/getComments';
import { getPostsById } from '@/lib/getPosts';
import { getUsers } from '@/lib/getUsers';
import Link from 'next/link';

export default async function page({ params }: { params: { id: string } }) {
  const postId = params.id;
  const post = await getPostsById(postId);
  const comments = await getComments(postId);
  const users = await getUsers();
  const user = users.filter((user) => {
    return user.id === post.userId;
  });
  return (
    <>
      <section className="bg-blue-500 rounded-xl p-2 flex flex-col">
        <h2 className="text-xl underline">{post.title}</h2>
        <p>{post.body}</p>
        <Link className="w-36 self-end" href={`/users/${user[0].id}`}>
          <p className="text-right">{user[0].name}</p>
          <p className="text-right">@{user[0].username}</p>
        </Link>
      </section>
      <section className="flex flex-col gap-4">
        <p className="text-2xl">Comments:</p>
        {comments.map((comment) => {
          return (
            <div key={comment.id} className="bg-slate-500 rounded-xl p-2">
              <p className="underline">{comment.name}</p>
              <p>{comment.body}</p>
              <p className="text-right">{comment.email}</p>
            </div>
          );
        })}
      </section>
    </>
  );
}
