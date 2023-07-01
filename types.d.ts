type Posts = {
  body: string;
  id: number;
  title: string;
  userId: number;
};

type Users = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: [Object];
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

type Comments = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};
