import { useState } from 'react'
import Info from './Info'
import './MovieRow.css'


const MovieRow = ({title, itens}) => {

    const [scrollX, setScrollX] = useState(0)

    const handleLeftArrow = () =>{
        let x = scrollX + Math.round(window.innerWidth / 2);
        if(x > 0){
            x = 0;
        }
        setScrollX(x);
    }
    
    const handleRightArrow = () =>{
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listW = itens.results.length * 180
        if((window.innerWidth - listW) > x){
            x = (window.innerWidth - listW) - 60
        }
        setScrollX(x)
    }

    return ( 
        <div className="movierow">
            <h2>{title}</h2>

            <div className="movie-row-left" onClick={handleLeftArrow}>
                ❮
            </div>

            <div className="movie-row-right"onClick={handleRightArrow}>
            ❯
            </div>

            <div className="movierow--listarea"> 
                <div className="movierow--list" style={{
                    marginLeft: scrollX,
                    width: itens.results.length * 200
                }}>
                    {itens.results.length > 0 && itens.results.map((item, key) =>(
                    <div className="movierow--item">
                        <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} key={key} alt={item.original_title}/>
                    </div>
                    ))}
                </div>
            </div>

            <Info />
            
        </div>
     );
}
 
export default MovieRow;