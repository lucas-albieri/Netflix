import CardUser from './CardUser/Index';
import './styles.css'
import user1 from '../../assets/User/user.png'
import user2 from '../../assets/User/user2.png'
import user3 from '../../assets/User/user3.png'
import user4 from '../../assets/User/user4.png'
import { Link } from 'react-router-dom';

const User = (key) => {

    return (
        <div className="user">
            <h1>QUEM ESTÁ ASSISTINDO?</h1>
            <section className="cards">
               <Link to="home"> <CardUser key={key} title="Luke" img={user1} /> </Link>
               <Link to="home"> <CardUser key={key} title="Mica" img={user2} /> </Link>
               <Link to="home"> <CardUser key={key} title="Herco" img={user3} /> </Link>
               <Link to="home"> <CardUser key={key} title="Phill" img={user4} /> </Link>
            </section>
            <div className="edit-user">
                <button>Desejo alterar meu Usuário</button>
            </div>
        </div>
    );
}

export default User;