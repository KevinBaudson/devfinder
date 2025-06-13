import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import "../src/App.css";
import SearchInput from "./components/SearchInput/SearchInput";
import ContainerData from "./components/ContainerData/ContainerData";

function App() {
  const [loading, setLoading] = useState(false);
  const [theme, setTheme] = useState("light");
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    document.body.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const handleSearch = async (username) => {
    try {
      setLoading(true);
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) throw new Error("Usuário não encontrado");
      const data = await response.json();
      setUserData(data);
      setError(null);
    } catch (err) {
      setError(err.message);
      setUserData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      
      <Header theme={theme} toggleTheme={toggleTheme} />
      <SearchInput onSearch={handleSearch} />
      {loading ? <p style={{ textAlign: 'center' }}>Loading...</p> : <ContainerData userData={userData} error={error} />}

    </div>
  );
}

export default App;
