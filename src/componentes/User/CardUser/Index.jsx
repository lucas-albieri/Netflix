import './styles.css'

const CardUser = (props) => {
    return ( 
        <div className="card-user">
            <img id="img-user" src={props.img} alt="" />
            <h2>{props.title}</h2>
        </div>
        
        
     );
}
 
export default CardUser;