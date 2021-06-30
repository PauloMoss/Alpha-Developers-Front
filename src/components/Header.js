import styled from "styled-components";
import logo from "../assets/logo-pequeno.svg";
import SearchBar from "./tools/SearchBar.js";
import {Link} from "react-router-dom";
import {FaStoreAlt,FaUser, FaShoppingCart } from "react-icons/fa";

export default function Header() {
    return (
        <Container>
            <Wrap>
                <Link to="/">
                    <Logo src={logo} alt="logo-Alpha"/>
                </Link>    
                <SearchBar />
                <HeaderMenu>
                    <Link to="/products">
                        <Item >
                            <FaStoreAlt/>
                            <br/>
                            <span>Produtos</span>
                        </Item>
                    </Link>
                    <Item>
                        <FaUser/>
                        <br/>
                        <span>Minha Conta</span>
                    </Item>
                    <Item>
                        <FaShoppingCart /> 
                        <br/>
                        <span>Carrinho</span>
                    </Item>
                </HeaderMenu>
            </Wrap>
        </Container>
    );
};
const Container = styled.div`
    position: fixed;
    display:flex;
    justify-content:center;
    align-items:center;
    top: 0;
    z-index: 3;
    width:100%;
    background:#000;
`;
const Wrap = styled.div`
    height:92px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:978px;
`;
const Logo = styled.img`
    width:86px;
    height:86px;
    cursor: pointer;
    flex-shrink: 0;
`;
const HeaderMenu = styled.div`
    display:flex;
    align-items:center;
    height:54;
    color:#F9E1CF;
`;
const Item = styled.div`
    margin:0 8px;
    cursor: pointer;
    height: 67px;
    width: 94px;
    padding:4px;
    font-size:18px;
    letter-spacing:0.04em;
    text-align:center;
    background:#000;
    :hover{
        filter:brightness(1.2);
        background:#090909;
    }
`