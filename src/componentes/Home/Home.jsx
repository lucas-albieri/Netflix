import tmdb from '../../tmdb';
import MovieRow from './MovieRow';
import loading from '../../assets/loading.gif'

import { useEffect, useState } from 'react';
import '../../App.css';
import FilmeDestaque from './FilmeDestaque';
import Header from './Header';


function Home() {

  const [moveList, setmovieList] = useState([])
  const [destaqueData, setdestaqueData] = useState(null)
  const [blackHeader, setBlackHeader] = useState(false)


  useEffect(() => {
    const loadAll = async () => {
      //pegando a lista total
      let list = await tmdb.getHomeList()
      setmovieList(list)

      //Pegando filme em destaque
      let originals = list.filter(i => i.slug === 'originals')
      let randomChosen = Math.floor(Math.random() * (originals[0].itens.results.length - 1))
      let chosen = originals[0].itens.results[randomChosen]
      let chosenInfo = await tmdb.getMovieInfo(chosen.id, 'tv')
      setdestaqueData(chosenInfo)
    }
    loadAll()
  }, [])

  useEffect(() => {

    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true)
      }
      else {
        setBlackHeader(false)
      }
    }
    window.addEventListener('scroll', scrollListener)
    return () => {
      window.removeEventListener('scroll', scrollListener)
    }

  }, [])

  return (
    <div className="page">

      <Header black={blackHeader} />

      {FilmeDestaque &&
        <FilmeDestaque item={destaqueData} />
      }

      <section className="lists">
        {moveList.map((item, key) => (
          <MovieRow key={key} title={item.title} itens={item.itens} />
        ))}
      </section>

      <footer>
        Termos de uso e Politica de Privacidade
      </footer>

      {moveList.length <= 0 &&
        <div className="loading">
          <img src={loading} alt="" />
        </div>
      }

    </div>
  );
}

export default Home;
