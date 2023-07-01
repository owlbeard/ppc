import { getComments } from '@/lib/getComments';
import { getPostsById } from '@/lib/getPosts';
import { getUsers } from '@/lib/getUsers';

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
      <section>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <p>{user[0].name}</p>
        <p>@{user[0].username}</p>
      </section>
      <section>
        {comments.map((comment) => {
          return (
            <div key={comment.id}>
              <p>{comment.name}</p>
              <p>{comment.body}</p>
              <p>{comment.email}</p>
            </div>
          );
        })}
      </section>
    </>
  );
}
