type Info = {
  name: string;
  age: number;
};
type HelloProps = {
  userInfo: Info;
};

const Hello = ({ userInfo }: HelloProps) => {
  
  return (
    <div>
      <div>{`Hello ${userInfo.name}. You are ${userInfo.age} Years Old `}</div>
    </div>
  );
};

export default Hello;
