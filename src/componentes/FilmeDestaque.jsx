import './FilmeDestaque.css'

const FilmeDestaque = ({item}) => {

    console.log(item)
    return (

        <section className="destaque" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item && item.backdrop_path})`
        }}>
            <div>{item && item.original_name }</div>
        </section>

    );
}

export default FilmeDestaque;
