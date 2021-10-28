import './styles.css'
import Header from '../Home/Header'
import MovieRow from '../Home/MovieRow';
import { useState, useEffect } from 'react';
import tmdb from '../../tmdb';
import loading from '../../assets/loading.gif'

const Search = () => {

    const [moveList, setmovieList] = useState([])
    const [blackHeader, setBlackHeader] = useState(false)
  
  
    useEffect(() => {
      const loadAll = async () => {
        //pegando a lista total
        let list = await tmdb.getHomeList()
        setmovieList(list)

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
        <div className="search d-flex flex-column ">
            <Header black={blackHeader} />
            <div className="search-body">
                <input type="text" name="search" id="search" placeholder="Faça sua busca" autoComplete="off" /> <i class="fas fa-search"></i>
            </div>
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

export default Search;