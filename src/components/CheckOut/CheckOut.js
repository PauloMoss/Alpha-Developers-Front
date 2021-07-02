import { useHistory } from 'react-router-dom';
import { useEffect, useState , useContext} from "react";
import axios from "axios";
import { IoAdd, IoRemove } from 'react-icons/io5';

import Modal from './Modal.js';
import UserContext from "../../contexts/UserContext.js";
import CartContext from "../../contexts/CartContext";
import { Container, Title, OrderSummaryContainer, OrderLabels, ProcuctSummary, Product, Image, Quantity, SubtotalBar, ButtunsContainer, Button, FinishButton } from './Styles';

export default function CheckOut() {

    const history = useHistory();
    const [cart, setCart] = useState([]);
    const {userProfile} = useContext(UserContext);
    const {userCart, setUserCart} = useContext(CartContext);
    const totalOrderValue = cart ? cart.lenght !== 0 ? cart.reduce((acc, c) => acc += (c.price*c.orderQuantity), 0) : null: null;
    const [modalIsOpen, setModalIsOpen] = useState(false);

    useEffect(()=>{
        const config = {headers: {Authorization: `Bearer ${userProfile?.token}`}};
        const request = axios.post(`http://localhost:4000/checkout`, userCart, config);
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

    function handleQuantity(operator, index) {
        let newCart = [...cart];
        const {id, orderQuantity} = newCart[index];
        if(operator === '-') {
            newCart[index] = {...newCart[index], orderQuantity: orderQuantity - 1};
            if(orderQuantity === 1) {
                newCart = cart.filter(c => c.id !== id);
            }
            setCart(newCart)
        }else if(operator === '+') {
            newCart[index] = {...newCart[index], orderQuantity: orderQuantity + 1};
            setCart(newCart)
        }
    }

    function keepBuying() {
        setUserCart(cart.map(c => ({productId: c.id, quantity: c.orderQuantity})));
        history.push("/products")
    }

    function handleFinishedOrder() {
        const config = {headers: {Authorization: `Bearer ${userProfile?.token}`}};
        const body = {cart}
        const request = axios.post(`http://localhost:4000/purchase`, body, config);
        request.then((r) => {
            setModalIsOpen(!modalIsOpen);
        });
        request.catch(e => {
            console.log(e.response.status);
        })
    }

    function handleReturn() {
        history.push("/products")
    }

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
                {cart ?
                    cart.lenght === 0 ? <ProcuctSummary>Nenhum item no carrinho</ProcuctSummary> :
                        cart.map((c, i) => {
                            const productInfo = c.description.split(";").filter((s)=> s!=="");
                            const productValue = `R$ ${(c.price/100).toFixed(2).replace('.',',')}`;
                            const subTotal = `R$ ${(c.price*c.orderQuantity/100).toFixed(2).replace('.',',')}`;
                            return(
                                <ProcuctSummary key={c.id}>
                                    <Product><span>{c.name}</span><span>{productInfo}</span></Product>
                                    <Image><img src={c.image} alt={c.name}/></Image>
                                    <div>{c.inStock === 0 ? <span>Indisponivel</span> : <span>Disponivel <br/> {c.inStock} unidades</span>}</div>
                                    <Quantity>
                                        {c.inStock === 0 ? 
                                            "-" 
                                        :
                                        <>
                                            <button onClick={() => handleQuantity('-', i)}><IoRemove/></button>
                                                {c.orderQuantity}
                                            <button onClick={() => handleQuantity('+', i)}><IoAdd/></button>
                                        </>}
                                    </Quantity>
                                    <div>{productValue}</div>
                                    <div>{subTotal}</div>
                                </ProcuctSummary>
                            );
                        })
                : "Carregando"}
                <SubtotalBar>
                    <div>
                        Valor Total: 
                        <span> 
                            {totalOrderValue ? `R$ ${(totalOrderValue/100).toFixed(2).replace('.',',')}`: ""}
                        </span>
                    </div> 
                </SubtotalBar>
                
            </OrderSummaryContainer>
            < Modal 
                modalIsOpen = { modalIsOpen }
                setModalIsOpen = { setModalIsOpen }
                handleReturn={ handleReturn }
                purchase = {cart}
                totalValue = {totalOrderValue}
            />
            <ButtunsContainer>
                <Button onClick={keepBuying}>
                    Continuar Comprando
                </Button>
                
                <FinishButton onClick={handleFinishedOrder}>
                    Finalizar Compra
                </FinishButton>
            </ButtunsContainer>
        </Container>
    );
}