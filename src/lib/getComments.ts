const getComments = async (id: string) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`
  );
  const data: Comments[] = await res.json();

  return data;
};

export { getComments };
