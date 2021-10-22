import './FilmeDestaque.css'

const FilmeDestaque = ({ item }) => {

    console.log(item)

    let firstDate = new Date(item && item.first_air_date)

    let genres = []
    for (let i in item && item.genres) {
        genres.push(item.genres[i].name)
    }
    return (

        <section className="destaque" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'top',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item && item.backdrop_path})`
        }}>
            {/*   <div>{item && item.original_name }</div>  */}

            <div className="destaque-vertical-op">
                <div className="destaque-horizontal-op">
                    <div className="destaque-name">{item && item.original_name}</div>
                    <div className="destaque-info">
                        <div className="destaque-pontos">{item && item.vote_average} Pontos</div>
                        <div className="destaque-ano">{firstDate.getFullYear()}</div>
                        <div className="destaque-temp">{item && item.number_of_seasons} Temporada{item && item.number_of_seasons !== 1 ? 's' : ''}</div>
                    </div>
                    <div className="destaque-descricao">{item && item.overview}</div>
                    <div className="destaque-btn">
                        <button>► Assistir</button>
                        <button>+ Minha Lista</button>
                    </div>
                    <div className="destaque-generos">
                        <strong> Gêneros:</strong> {genres.join(', ')}
                    </div>
                </div>
            </div>
        </section>

    );
}

export default FilmeDestaque;
