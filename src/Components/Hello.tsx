import { useEffect, useRef, useState, type ChangeEvent } from "react";

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
  const [inputValue, setInputValue] = useState<string>("");
  const inputRef = useRef<null>(null);

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

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
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

      <div>
        <input
          ref={inputRef}
          type="text"
          name=""
          id=""
          onChange={handleInputChange}
          value={inputValue}
        />
      </div>
    </div>
  );
};

export default Hello;
