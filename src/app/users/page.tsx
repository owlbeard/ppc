import { getUsers } from '@/lib/getUsers';
import Link from 'next/link';

export default async function page() {
  const users = await getUsers();
  return (
    <section>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <Link href={`/users/${user.id}`}>{user.name}</Link>
            <p>{user.username}</p>
            <p>{user.email}</p>
            <p>{user.company.name}</p>
          </div>
        );
      })}
    </section>
  );
}
