const getUsers = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data: Users[] = await res.json();
  return data;
};

const getUserById = async (id: string) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data: Users = await res.json();
  return data;
};

export { getUsers, getUserById };
