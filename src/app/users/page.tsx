import { getUsers } from '@/lib/getUsers';
import Link from 'next/link';

export default async function page() {
  const users = await getUsers();
  return (
    <>
      <h2 className="text-left text-2xl w-full p-4">
        All the beautiful PPC Users:
      </h2>
      <section className="flex flex-wrap gap-4 items-center justify-center">
        {users.map((user) => {
          return (
            <Link key={user.id} href={`/users/${user.id}`}>
              <div className="bg-blue-400 hover:bg-blue-500 p-2 rounded-xl">
                <p>{user.name}</p>
                <p>{user.username}</p>
                <p>{user.email}</p>
                <p>{user.company.name}</p>
              </div>
            </Link>
          );
        })}
      </section>
    </>
  );
}
