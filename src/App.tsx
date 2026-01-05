import "./App.css";
import Hello from "./Components/Hello";

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
      <div className="h-screen flex flex-col items-center justify-center space-y-4">
        <h1>React With Typescript</h1>
      <Hello userInfo={userInfo} />
      </div>
    </>
  );
}

export default App;
