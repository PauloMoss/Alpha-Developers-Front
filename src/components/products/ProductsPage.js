import axios from "axios";

import UserContext from "../../contexts/UserContext.js"
import {useHistory} from "react-router-dom";
import { useCallback, useEffect, useState , useContext} from "react";

import Header from "../Header";
import {FaCog, FaShoppingCart} from "react-icons/fa";
import {
    HorizontalSpreader, 
    Page, 
    Container, 
    Catalog, 
    Title, 
    Wrap, 
    Product, 
    Info, 
    Actions, 
    ConfigButton, 
    UnavailableButton, 
    AddToCartButton, 
    Price,
    ImageContainer
} from "./styles/styles.js"

export default function ProductsPage() {
    const history = useHistory();
    const [products, setProducts] = useState([]);
    const {userProfile, setUserProfile} = useContext(UserContext);
    
    const fetchProducts = useCallback(()=>{
        const config = {headers: {Authorization: `Bearer ${userProfile?.token}`}};
        
        const promisse = axios.get(`http://localhost:4000/products`,config);
        promisse.then((response) => {
            setProducts(response.data);
        });
        promisse.catch((error) => {
            if (error.response.status === 401){
                localStorage.clear();
                setUserProfile(null);
                return history.push("/");
            }
        })
    },[setProducts,userProfile?.token,history,setUserProfile]);

    useEffect(()=>{
        fetchProducts();
    },[fetchProducts]);

    function goToProduct(id) {
        history.push(`/product/${id}`);
    }

    return (
        <Page>
            <Header/>
            <Container>
                <Catalog>
                    <Title>
                        Produtos
                    </Title>
                    <Wrap>
                        {products && products.length > 0 
                        ? products.map(({id,name,price,description,image,inStock})=> {
                            const productInfo = description.split(";").filter((s)=> s!=="");
                            return(
                                <Product key={id}>
                                    <ImageContainer>
                                        <img src={image} alt={name} onClick={()=>goToProduct(id)}/>
                                    </ImageContainer>
                                    <HorizontalSpreader/>
                                    <Info>
                                        <span onClick={()=>goToProduct(id)}>{name}</span>
                                        <ul>
                                            <span>Especificações:</span>
                                            {productInfo.map((info,i)=>{
                                                return (
                                                    <li key={i}>
                                                        {info}
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </Info>
                                    <HorizontalSpreader/>
                                    <Actions>
                                        {inStock !== 0
                                        ?
                                        <>
                                            <ConfigButton onClick={()=>goToProduct(id)}>
                                                <FaCog /> CONFIGURAR
                                            </ConfigButton>
                                            <AddToCartButton>
                                                <FaShoppingCart /> COMPRAR
                                            </AddToCartButton>
                                        </>
                                        :
                                            <UnavailableButton>
                                                Indisponível
                                            </UnavailableButton>
                                        }
                                    </Actions>
                                    <HorizontalSpreader/>
                                    <Price>
                                        <div>
                                            <span>Pix: </span> 
                                            {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price/100)}
                                        </div>
                                        <div>
                                            <span> ou 12x sem juros de </span>
                                            {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price/1200)}
                                        </div>
                                    </Price>
                                </Product>
                            )
                        })
                        :
                        <Catalog>
                            <Title>
                                Ainda não há produtos nessa página.
                            </Title>
                        </Catalog>
                        }
                    </Wrap>
                </Catalog>
            </Container>
        </Page>
    );
}