import './Header.css'
import netflix from '../../assets/netflix.png'
import user from '../../assets/User/user.png'
import { Link } from 'react-router-dom'

const Header = ({ black }) => {



    return (
        <header className={black ? 'black' : ""}>
            <div className="header-logo">
            <Link to="/home">    <img src={netflix} alt="netflix" /> </Link>
            </div>
            <div className="header-user">

              <img src={user} alt="menu" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample" /> 


                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                    <div className="d-flex justify-content-end mt-3 me-3">
                        <button type="button" class="btn-close btn-close-white text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>

                    <div class="offcanvas-header d-flex flex-column justify-content-center ">
                        <img src={user} alt="user" />
                        <p>Lucas</p>
                    </div>
                    <div class="offcanvas-body">
                        <div className="options">
                            <div className="option1">
                                <Link to="/search"> <button>PESQUISAR</button> </Link>
                            </div>
                            <div className="option1">
                                <Link to="/user"> <button>MINHA CONTA</button> </Link>
                            </div>
                            <div className="option1">
                                <Link to="/ajuda"> <button>AJUDA</button> </Link>
                            </div>
                            <div className="option1">
                                <Link to="/login"> <button>SAIR</button> </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </header>
    )
}
export default Header;