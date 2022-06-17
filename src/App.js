// import React, {useEffect, useState} from "react";
// import './App.css';
//
// const getUser = () => Promise.resolve({id: 1, name: "Yauhen"});
//
// const Search = ({ value, onChange, children }) => (
//     <div>
//       <label htmlFor="search">{children}</label>
//       <input id="search" type="text" value={value} onChange={onChange}/>
//     </div>
// )
//
// function App() {
//   const [search, setSearch] = useState("");
//   const [user, setUser] = useState("");
//
//   useEffect(() => {
//       const loadUser = async () => await getUser();
//       setUser(loadUser());
//   }, []);
//
//   const handleChange = ({ target: {value} }) => {
//     setSearch(value);
//   };
//
//   return (
//     <div className="App">
//         { user && <h2>Logged in as {user.name}</h2> }
//         <img className="image" src="" alt="search image" />
//         <Search value={search} onChange={handleChange}>
//             Search:
//         </Search>
//         <p>Searches for {search ? search : "..."}</p>
//     </div>
//   );
// }
//
// export default App;


import React, {useState} from 'react';
import axios from "axios";
const URL = "http://hn.algolia.com/api/v1/search";

const App = () => {
    const [news, setNews] = useState([]);
    const [error, setError] = useState(null);

    const handleFetch = async () => {
        try{
            const result = await axios.get(`${URL}?query=React`);
            setNews(result.data.hits);
        }catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='app'>
            <button type="button" onClick={handleFetch}>
                Fetch News
            </button>

            {error && <span>Something went wrong ...</span>}

            <ul>
                {news.map(({objectID, url, title}) =>(
                    <li key={objectID}>
                        <a href={url}>{title}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default App;