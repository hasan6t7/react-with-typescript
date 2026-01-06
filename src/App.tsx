import "./App.css";
import Hello from "./Components/Hello";
import ToogleButton from "./Components/ToogleButton";
import { Users } from "./Components/Users";

function App() {
  type Info = {
    name: string;
    age: number;
  };
  const userInfo: Info = {
    name: "Hasan",
    age: 21,
  };

  return (
    <>
      <div className="h-screen  space-y-4 dark:bg-black/90 dark:text-white">
        <div>
          <h1>React With Typescript</h1>
          <Hello userInfo={userInfo} />

          <ToogleButton></ToogleButton>
        </div>
        <div>
          <Users></Users>
        </div>
      </div>
    </>
  );
}

export default App;
