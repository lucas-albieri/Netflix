import tmdb from './tmdb';
import { useEffect, useState } from 'react';

import './App.css';


function App() {

  const  [moveList, setmovieList] = useState([])

  useEffect(() =>{
    const loadAll = async () =>{
      //pegando a lista total
      let list = await tmdb.getHomeList()
      setmovieList(list)
    }
    loadAll()
  }, [])
  return (
    <div className="page">
      <section className="lists">
        {moveList.map((item, key) =>{
          <div>
            {item.title}
          </div>
        })}
      </section>
    </div>
  );
}

export default App;
