import React, {useEffect, useState} from "react";
import './App.css';

const getUser = () => Promise.resolve({id: 1, name: "Yauhen"});

const Search = ({ value, onChange, children }) => (
    <div>
      <label htmlFor="search">{children}</label>
      <input id="search" type="text" value={value} onChange={onChange} required/>
    </div>
)

function App() {
  const [search, setSearch] = useState("");
  const [user, setUser] = useState("");

  useEffect(() => {
      const loadUser = async () => await getUser();
      setUser(loadUser());
  }, []);

  const handleChange = ({ target: {value} }) => {
    setSearch(value);
  };

  return (
    <div className="App">
        { user && <h2>Logged in as {user.name}</h2> }
        <img src="" alt="search image" />
        <Search value={search} onChange={handleChange}>
            Search:
        </Search>
        <p>Searches for {search ? search : "..."}</p>
    </div>
  );
}

export default App;
