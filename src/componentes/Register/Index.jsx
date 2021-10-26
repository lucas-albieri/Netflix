import "./styles.css"
import N from "../../assets/Login/N.png"

import tmdb from '../../tmdb';
import { InputGroup, Input } from "rsuite"
import UnvisibleIcon from '@rsuite/icons/Unvisible';
import VisibleIcon from '@rsuite/icons/Visible';
import AdminIcon from '@rsuite/icons/Admin';
import { useState } from "react"
import { Link } from "react-router-dom";
import { useEffect } from "react";



const Register = () => {


    const [visible, setVisible] = useState(false);
    const [destaqueData, setdestaqueData] = useState(null)
    const [moveList, setmovieList] = useState([])

    const handleChange = () => {
        setVisible(!visible);
    };

    useEffect(() => {
        const loadAll = async () => {

            let list = await tmdb.getHomeList()
            setmovieList(list)


            //Pegando filme em destaque
            let originals = list.filter(i => i.slug === 'originals')
            let randomChosen = Math.floor(Math.random() * (originals[0].itens.results.length - 1))
            let chosen = originals[0].itens.results[randomChosen]
            let chosenInfo = await tmdb.getMovieInfo(chosen.id, 'tv')
            setdestaqueData(chosenInfo)
            console.log(chosenInfo)
        }
        loadAll()
    }, [])



    return (
        <div className="register">
            <form action="">
                <img src={N} alt="" />
                <div className="input-area">
                    <InputGroup style={{
                        marginTop: '30px',
                        width: 350,
                        boxShadow: '0px 0px 18px 1px rgba(255,0,0,0.53)',
                    }} >
                        <Input placeholder="Seu usuário aqui" name="usuario" className="input-usuario" style={{
                            fontSize: 17,
                            color: 'black',
                            padding: '13px 13px',

                        }} />
                        <InputGroup.Button >
                            <AdminIcon />
                        </InputGroup.Button>
                    </InputGroup>
                </div>

                <div className="input-area">
                <InputGroup style={{
                        width: 350,
                        boxShadow: '0px 0px 18px 1px rgba(255,0,0,0.53)',
                    }} >
                        <Input placeholder="Seu email aqui" name="Email" className="input-usuario" style={{
                            fontSize: 17,
                            color: 'black',
                            padding: '13px 13px',
                        }} />
                        <InputGroup.Button >
                            <AdminIcon />
                        </InputGroup.Button>
                    </InputGroup>
                </div>

                <div className="input-area">
                    <InputGroup inside style={{
                        width: 350,
                        boxShadow: '0px 0px 18px 1px rgba(255,0,0,0.53)',
                    }} >
                        <Input type={visible ? 'text' : 'password'} name="senha" className="input-senha" placeholder="Sua senha aqui" style={{
                            fontSize: 17,
                            color: 'black',
                            padding: '13px 13px',

                        }} />
                        <InputGroup.Button onClick={handleChange} style={{
                            padding: '27px 13px 23px',
                        }}>
                            {visible ? <VisibleIcon /> : <UnvisibleIcon />}
                        </InputGroup.Button>
                    </InputGroup>
                </div>

                <Link to="/login"> <h1>Já tem uma conta?</h1> </Link>
                <div className="btn-entrar-ar">
                    <Link to="/home"> <button className="btn-entrar">REGISTER</button> </Link>
                </div>


            </form>

            <div className="register-back" style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original${destaqueData && destaqueData.backdrop_path})`,  }}>
            </div>
        </div>
    );
}

export default Register;