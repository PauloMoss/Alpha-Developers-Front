import { useState, useContext, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import Loader from "react-loader-spinner";

import UserContext from '../../contexts/UserContext';
import { Container, BannerStyle, SignUpContainer, Input, Button, UserAlert } from './Styles';
import Logo from '../../assets/Logo.png';

export default function Login() {

    const history = useHistory();
    const { userProfile, setUserProfile } = useContext(UserContext);
    const [user, setUser] = useState({ email: "", password: "" });
    const { email, password } = user;
    const [buttonStatus, setButtonStatus] = useState({ status:"Entrar", userAlert: "", isDisabled: false});
    const { status, userAlert, isDisabled } = buttonStatus;
    const loading = <Loader type="ThreeDots" color="#FFFFFF" height={19} width={50}/>
    let checkBox;

    useEffect(() => {
        if(userProfile) {
            history.push("/products");
            return;
        }
        // eslint-disable-next-line
    }, [])

    function handleOnChange(e, objKey) {
        setUser({...user, [objKey]: e.target.value})
    }

    function handleLoginSubmit(e) {
        e.preventDefault();

        if(!email.length) {
            setButtonStatus({...buttonStatus, userAlert: <UserAlert>Por favor, preencha o campo de email</UserAlert>});
            return;
        } else if(password.length < 6) {
            setButtonStatus({...buttonStatus, userAlert: <UserAlert>A senha precisa ter no minimo 6 caracteres</UserAlert>});
            return;
        }
        setButtonStatus({status:loading, userAlert: "", isDisabled: true});

        const body = user;
        const request = axios.post('https://back-projeto-alpha-developers.herokuapp.com/login', body);
        request.then(r => {
            if(checkBox) {
                const loginSaved = JSON.stringify(r.data);
                localStorage.setItem("lastLogin", loginSaved);
            }
            setUserProfile(r.data)
            history.push("/products")
        });
        request.catch(e => {
            if(e.response.status === 401) {
                setButtonStatus({ status:"Entrar", userAlert: <UserAlert>Usuario ou senha incorreta</UserAlert>, isDisabled: false})
            } else {
                setButtonStatus({ status:"Entrar", userAlert: <UserAlert>Ocorreu um erro, tente novamente</UserAlert>, isDisabled: false})
            }
            
        })
    }

    return(
        <Container>
            <BannerStyle>
                <img src={Logo} alt="Alpha Logo"/>
            </BannerStyle>
            <SignUpContainer>
                <form onSubmit={handleLoginSubmit}>
                    <Input type="text" placeholder="Email" value={email} disabled={isDisabled} onChange={e => handleOnChange(e, "email")}/>
                    <Input type="password" placeholder="Senha" value={password} disabled={isDisabled} onChange={e => handleOnChange(e, "password")} />
                    <div style={{color: '#FFFFFF'}}><input type="checkbox" onChange={ (e) => checkBox = e.target.checked }/> manhenha-se conectado</div>
                    <Button type="submit" disabled={isDisabled} >{status}</Button>
                </form>
                <Link to="/sign-up" ><span>Primeira vez? Cadastre-se!</span></Link>
                {userAlert}
            </SignUpContainer>
        </Container>
    );
}