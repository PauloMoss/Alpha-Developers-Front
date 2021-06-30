import { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import axios from 'axios';
import Loader from "react-loader-spinner";

import { Container, BannerStyle, SignUpContainer, Input, Button, UserAlert, StyledInput } from './Styles';
import Logo from '../../assets/logo.svg';

export default function SignUp() {

    const history = useHistory();
    const location = useLocation();
    const [userSignUp, setUserSignUp] = useState({ name: "", email: "",  password: "", confirmPassword: "", cpf: "", rg: "", address: "", city: "", state: "" });
    const { name, email, password, confirmPassword, cpf, rg, address, city, state } = userSignUp;
    const [buttonStatus, setButtonStatus] = useState({ status:"Cadastrar", userAlert: "", isDisabled: false});
    const { status, userAlert, isDisabled } = buttonStatus;
    const loading = <Loader type="ThreeDots" color="#FFFFFF" height={19} width={50}/>

    function handleOnChange(e, objKey) {
        setUserSignUp({...userSignUp, [objKey]: e.target.value})
    }

    function handleSignUpSubmit(e) {
        e.preventDefault();

        if (name.length < 3) {
            setButtonStatus({...buttonStatus, userAlert: <UserAlert>O nome do usuario precisa ter no minimo 3 caracteres</UserAlert>});
            return;
        } else if(password.length < 6) {
            setButtonStatus({...buttonStatus, userAlert: <UserAlert>A senha precisa ter no minimo 6 caracteres</UserAlert>});
            return;
        } else if(password!==confirmPassword) {
            setButtonStatus({...buttonStatus, userAlert: <UserAlert>As senhas precisam ser iguais, preencha novamente.</UserAlert>});
            return;
        } else if(cpf.length !== 14 || rg.length !== 12) {
            setButtonStatus({...buttonStatus, userAlert: <UserAlert>Por favor, preencha corretamente seus documentos</UserAlert>});
            return;
        } else if(!(email.length && address.length && city.length && state.length)) {
            setButtonStatus({...buttonStatus, userAlert: <UserAlert>Por favor, preencha todos os campos</UserAlert>});
            return;
        }
        setButtonStatus({status: loading, userAlert: "", isDisabled: true});

        const body = userSignUp;
        const request = axios.post("https://back-projeto-alpha-developers.herokuapp.com/sign-up", body);
        request.then(() => history.push("/"));
        request.catch(() => {
            setButtonStatus({status:"Cadastrar", userAlert: <UserAlert>Por favor, verifique os dados e tente novamente.</UserAlert>, isDisabled: false});
        })
        setUserSignUp({ name: "", email: "",  password: "", confirmPassword: "", cpf: "", rg: "", address: "", city: "", state: "" });
    }

    return(
        <Container>
            <BannerStyle location={location.pathname} >
                <img src={Logo} alt="Alpha Logo"/>
            </BannerStyle>
            <SignUpContainer>
                <form onSubmit={handleSignUpSubmit}>
                    <Input type="text" placeholder="Nome" value={name} disabled={isDisabled} onChange={e => handleOnChange(e, "name")} />
                    <Input type="text" placeholder="Email" value={email} disabled={isDisabled} onChange={e => handleOnChange(e, "email")}/>
                    <Input type="password" placeholder="Senha" value={password} disabled={isDisabled} onChange={e => handleOnChange(e, "password")} />
                    <Input type="password" placeholder="Confirme a Senha" value={confirmPassword} disabled={isDisabled} onChange={e => handleOnChange(e, "confirmPassword")} />
                    <StyledInput type="input" placeholder="CPF" value={cpf} disabled={isDisabled} format={'###.###.###-##'} onChange={e => handleOnChange(e, "cpf")} />
                    <StyledInput type="input" placeholder="RG" value={rg} disabled={isDisabled} format={'##.###.###-#'} onChange={e => handleOnChange(e, "rg")} />
                    <Input type="text" placeholder="Endereco" value={address} disabled={isDisabled} onChange={e => handleOnChange(e, "address")} />
                    <Input type="text" placeholder="Cidade" value={city} disabled={isDisabled} onChange={e => handleOnChange(e, "city")} />
                    <Input type="text" placeholder="Estado" value={state} disabled={isDisabled} onChange={e => handleOnChange(e, "state")} />
                    <Button type="submit" >{status}</Button>
                </form>
                <Link to="/" ><span>Já tem uma conta? Entre agora!</span></Link>
                {userAlert}
            </SignUpContainer>
        </Container>
    );
}