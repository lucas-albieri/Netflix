import "./styles.css"
import N from "../../assets/Login/N.png"

import tmdb from '../../tmdb';
import { InputGroup } from "rsuite"
import UnvisibleIcon from '@rsuite/icons/Unvisible';
import VisibleIcon from '@rsuite/icons/Visible';
import AdminIcon from '@rsuite/icons/Admin';
import { useState } from "react"
import { Link, useHistory } from "react-router-dom";
import { useEffect, useContext } from "react";
import { Message, toaster } from 'rsuite';
import StoreContext from "../../Store/Context";


const Login = () => {

    const [visible, setVisible] = useState(false);
    const [destaqueData, setdestaqueData] = useState(null)
    const [, setmovieList] = useState([])

    const handleChange = () => {
        setVisible(!visible);
    };

    // PEGANDO O FILME EM DESTAQUE
    useEffect(() => {
        const loadAll = async () => {

            let list = await tmdb.getHomeList()
            setmovieList(list)
            

            //Pegando filme em destaque
            let originals = list.filter(i => i.slug === 'action')
            let randomChosen = Math.floor(Math.random() * (originals[0].itens.results.length - 1))
            let chosen = originals[0].itens.results[randomChosen]
            let chosenInfo = chosen 
            setdestaqueData(chosenInfo)
        }
        loadAll()
    }, [])


    // Popup de LOGADO COM SUCESSO
    const [type] = useState('success');
    const message = (
        <Message showIcon type={type} style={{

        }} >
            Logado com sucesso!!
        </Message>
    );

    //login autenticado
    function initialState() {
        return { usuario: '', senha: '' }
    }


    const [values, setValues] = useState(initialState)
    const { setToken } = useContext(StoreContext)
    const history = useHistory()


    function onChange(event) {
        const { value, name } = event.target
        setValues({
            ...values,
            [name]: value,
        })
    }

    function onSubmit(event) {
        event.preventDefault()

        const { token } = login(values)
        if (token) {
            setToken(token)
            toaster.push(message)
            return history.push('/user')
        }
        setValues(initialState)
    }

    function login({ usuario, senha }) {
        if (usuario === 'lucas' && senha === 'lucas') {
            return { token: `1324` }
        }
        return { error: `Usuário ou Senha inválido` }
    }


    return (
        <div className="login">
            <div className="login-back" style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original${destaqueData && destaqueData.backdrop_path})`,
            }}>

            </div>

            <form autoComplete="nope" onSubmit={onSubmit}>
                <img src={N} alt="" />
                <div className="input-area">
                    <InputGroup style={{
                        marginTop: '70px',
                        width: 350,
                        boxShadow: '0px 0px 18px 1px rgba(255,0,0,0.53)',
                    }} >
                        <input placeholder="Usuário" name="usuario" className="input-usuario"  onChange={onChange} value={values.usuario} style={{
                            fontSize: 18,
                            color: 'black',
                            padding: '17px 17px',
                            display: 'block',
                            width: '100%',
                            border: 'none',
                            paddingRight: '36px',
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
                        <input type={visible ? 'text' : 'password'} name="senha" className="input-senha" onChange={onChange} value={values.senha} placeholder="Senha" style={{
                            fontSize: 18,
                            color: 'black',
                            padding: '17px 17px',
                            display: 'block',
                            width: '100%',
                            border: 'none',
                            paddingRight: '36px',

                        }} />
                        <InputGroup.Button onClick={handleChange} style={{
                            padding: '31px 13px 28px',
                            right: '0',
                        }}>
                            {visible ? <VisibleIcon /> : <UnvisibleIcon />}
                        </InputGroup.Button>
                    </InputGroup>
                </div>
                <Link to="/register"> <h1>Ainda não tem uma conta?</h1> </Link>
                <div className="btn-entrar-ar">
                    <button className="btn-entrar" >LOGIN</button>
                </div>
            </form>
        </div>
    );
}

export default Login;