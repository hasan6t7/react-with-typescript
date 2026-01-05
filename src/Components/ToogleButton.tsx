import { useTheme } from "../Contexts/ThemeContext";

const ToogleButton = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      className="bg-red-600 px-5 py-1.5 btn text-white"
    >
      Toogle Theme to {theme === "light" ? "dark" : "light"}
    </button>
  );
};

export default ToogleButton;
