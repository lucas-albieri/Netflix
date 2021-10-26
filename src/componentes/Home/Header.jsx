import './Header.css'
import netflix from '../../assets/netflix.png'
import user from '../../assets/User/user.png'

const Header = ({ black }) => {

    return (
        <header className={black ? 'black' : ""}>
            <div className="header-logo">
                <img src={netflix} alt="netflix" />
            </div>
            <div className="header-user">
                <img src={user} alt="user" />
            </div>
        </header>
    )
}
export default Header;