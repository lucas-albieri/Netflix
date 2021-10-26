import "./styles.css"
import N from "../../assets/Login/N.png"

import { InputGroup, Input, Avatar} from "rsuite"


const Login = () => {

    const styles = {
        width: 300,
        marginBottom: 10
    };

    return (
        <div className="login">
            <div className="login-back">

            </div>
            <form action="">
                <img src={N} alt="" />
                <div className="input-area">
                    <label htmlFor="username">Usuário</label>
                    <InputGroup style={styles}>
                        <InputGroup.Addon>
                            <Avatar />
                        </InputGroup.Addon>
                        <Input />
                    </InputGroup>
                </div>

                <div className="input-area">
                    <label htmlFor="username">Senha</label>
                    <Input placeholder="Default Input" />
                </div>
            </form>
        </div>
    );
}

export default Login;