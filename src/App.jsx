import tmdb from './tmdb';
import MovieRow from './componentes/MovieRow';

import { useEffect, useState } from 'react';
import './App.css';
import FilmeDestaque from './componentes/FilmeDestaque';


function App() {

  const  [moveList, setmovieList] = useState([])
  const [destaqueData, setdestaqueData] = useState(null)


  useEffect(() =>{
    const loadAll = async () =>{
      //pegando a lista total
      let list = await tmdb.getHomeList()
      setmovieList(list)

      //Pegando filme em destaque
      let originals = list.filter(i=>i.slug === 'originals')
      let randomChosen = Math.floor(Math.random() * (originals[0].itens.results.length - 1))
      let chosen = originals[0].itens.results[randomChosen]
      let chosenInfo = await tmdb.getMovieInfo(chosen.id, 'tv')
      setdestaqueData(chosenInfo)
    }
    loadAll()
  }, [])

  return (
    <div className="page">

    {FilmeDestaque &&
      <FilmeDestaque item={destaqueData} />
    }

      <section className="lists">
        {moveList.map((item, key) =>(
          <MovieRow key={key} title={item.title} itens={item.itens} />
    ))}
      </section>
    </div>
  );
}

export default App;
