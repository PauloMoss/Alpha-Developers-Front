import { Link, useHistory } from 'react-router-dom';
import { useEffect, useState , useContext} from "react";
import axios from "axios";

import UserContext from "../../contexts/UserContext.js"
import { Container, Title, OrderSummaryContainer, OrderLabels, ProcuctSummary, Product, Image, SubtotalBar, ButtunsContainer, Button, FinishButton } from './Styles';
import Logo from '../../assets/Logo.png'

export default function CheckOut() {

    const history = useHistory();
    const [cart, setCart] = useState([]);
    const {userProfile, setUserProfile} = useContext(UserContext);

    useEffect(()=>{
        const config = {headers: {Authorization: `Bearer ${userProfile?.token}`}};
        const request = axios.get(`http://localhost:4000/checkout`,config);
        request.then((r) => {
            setCart(r.data);
        });
        request.catch((error) => {
            /*if (error.response.status === 401){
                localStorage.clear();
                setUserProfile(null);
                return history.push("/");
            }*/
        })
        // eslint-disable-next-line
    },[]);

    return(
        <Container>
            <Title>
                <h2>Carrinho de Compras</h2>
                <span>Bem vindo ao seu carrinho de compras, visualize seu pedido e finalize a compra</span>
            </Title>
            <OrderSummaryContainer>
                <OrderLabels>
                    <div>Nome</div>
                    <div>Disponibilidade</div>
                    <div>Quantidade</div>
                    <div>Preco Unitario</div>
                    <div>Subtotal</div>
                </OrderLabels>
                <ProcuctSummary>
                    <Product><span>AVELL A60 - PRETO</span><span>Placa de Video: Testando</span></Product>
                    <Image><img src={Logo} alt="teste imagem"/></Image>
                    <div>Disponibilidade</div>
                    <div>Quantidade</div>
                    <div>Preco Unitario</div>
                    <div>R$ 5000,00</div>
                </ProcuctSummary>
                <ProcuctSummary>
                    <Product><span>AVELL A60 - PRETO</span><span>Placa de Video: Testando</span></Product>
                    <Image><img src={Logo} alt="teste imagem"/></Image>
                    <div>Disponibilidade</div>
                    <div>Quantidade</div>
                    <div>Preco Unitario</div>
                    <div>R$ 6000,00</div>
                </ProcuctSummary>
                <SubtotalBar>
                    <div>Valor Total: <span> subtotal</span></div> 
                </SubtotalBar>
                
            </OrderSummaryContainer>
            <ButtunsContainer>
                <Link to="/products">
                    <Button>
                        Continuar Comprando
                    </Button>
                </Link>
                
                <FinishButton>
                    Finalizar Compra
                </FinishButton>
            </ButtunsContainer>
        </Container>
    );
}