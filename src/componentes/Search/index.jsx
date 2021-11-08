import './styles.css'
import Header from '../Home/Header'
import { useState, useEffect } from 'react';
import loading from '../../assets/loading.gif'


const Search = () => {

  const [blackHeader, setBlackHeader] = useState(false)


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

  const API_KEY = '5dcdf757ca2da4929d3167f06b0f5be5';
  const API_BASE = 'https://api.themoviedb.org/3';

  const [info, setInfo] = useState({})
  const [text, setText] = useState('Faça')

  useEffect(() => {
    if (text) {
      fetch(`${API_BASE}/search/tv?&query=${text}&page=1&language=pt-BR&api_key=${API_KEY}`)
        .then((response) => response.json())
        .then((response) => {
          setInfo(response)
          console.log(info)
        })
    }
  }, [text])


  return (
    <div className="search d-flex flex-column ">
      <Header black={blackHeader} />

      <div className="search-body">
        <input type="text" name="search" id="search" placeholder="Faça sua busca" autoComplete="off" onChange={(search) => setText(search.target.value)} value={text} /> <i class="fas fa-search"></i>
      </div>

      <section className="list">
        {info.results && (
          <ul className="list-itens">
            {info.results.map((item) => (
              <li key={item.id}>
                {
                  (item.posther_path != 'null' && item.title != 'null')
                  ?  <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt="" />
                   : ""
                }
               
              </li>
            ))}
          </ul>
        )}
      </section>

      <footer>
        Termos de uso e Politica de Privacidade
      </footer>

      {info.length <= 0 &&
        <div className="loading">
          <img src={loading} alt="" />
        </div>
      }
    </div>
  );
}

export default Search;