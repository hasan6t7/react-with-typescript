import { useEffect, useState } from "react";

type Info = {
  name: string;
  age: number;
};
type HelloProps = {
  userInfo: Info;
};

type User = {
  name: string;
  email: string;
};

const Hello = ({ userInfo }: HelloProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [count, setCount] = useState<number>(0);

  useEffect((): void => {
    const fetchData = async () => {
      const data: User = {
        name: "Hasan",
        email: "hasan@gamil.com",
      };
      setUser(data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <div>{`Hello ${userInfo.name}. You are ${userInfo.age} Years Old `}</div>
      <div>
        {user && (
          <div>
            Name : {user.name} - Email: {user.email}
          </div>
        )}
      </div>
      <div>{count}</div>
      <div>
        <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      </div>
    </div>
  );
};

export default Hello;
