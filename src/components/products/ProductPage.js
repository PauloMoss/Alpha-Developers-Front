import axios from "axios";

import UserContext from "../../contexts/UserContext.js"
import {useHistory, useParams} from "react-router-dom";
import { useCallback, useEffect, useState , useContext} from "react";
import Carousel from "./Carousel.js";

import Header from "../Header";
import {FaShoppingCart} from "react-icons/fa";
import {
    HorizontalSpreader, 
    Page, 
    Container, 
    Catalog
} from "./styles/styles.js"
import {
    ProductDescription, 
    Content, 
    Purchase, 
    ProductBid, 
    ProductPrice, 
    ProductTitle,
    PurchaseButton, 
    ProductDetails, 
    Availability, 
    ProductImage
} from "./styles/ProductStyles.js"

export default function ProductPage() {
    const {id: pageId} = useParams();
    const history = useHistory();
    const [product, setProduct] = useState("");
    const {userProfile, setUserProfile} = useContext(UserContext);
    const [productInfo, setProductInfo] = useState('');
    const [slideImages, setSlideImages] = useState([]);

    const fetchProduct = useCallback(()=>{
        const config = {headers: {Authorization: `Bearer ${userProfile?.token}`}};
        
        const promisse = axios.get(`http://localhost:4000/product/${pageId}`,config);
        promisse.then((response) => {
            console.log(response.data)
            setProduct(response.data);
            if (response?.data){
                const info = response.data.description?.split(";").filter((s)=> s!=="");
                setProductInfo(info);
                setSlideImages(response.data.images)
            } else {
                setProductInfo("");
            }
        });
        promisse.catch((error) => {
            if (error?.response?.status === 401){
                localStorage.clear();
                setUserProfile(null);
                return history.push("/");
            }
            if (error.response.status === 404) {
                return history.push("/");
            }
        })
    },[setProduct,userProfile?.token,history,setUserProfile,pageId]);

    useEffect(()=>{
        fetchProduct();
    },[fetchProduct]);

    return (
        <Page>
            <Header/>
            <Container>
                <Catalog>
                    <Content>
                            <ProductImage>
                                    <Carousel images={slideImages}/>
                            </ProductImage>
                            <ProductDescription>
                                <ProductTitle>
                                    {product?.name} <p>(Cód. {product?.id})</p> 
                                </ProductTitle>
                                <HorizontalSpreader />
                                <ProductBid>
                                    <ProductPrice>
                                        <p>
                                            <span>por: </span> 
                                                {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product?.price/100)} 
                                            <span> no Pix</span>
                                        </p>
                                        <br/>
                                        <span>ou 12x sem juros de </span>
                                        {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product?.price/1200)}
                                    </ProductPrice>
                                    <Purchase>
                                        <Availability>
                                            DISPONIBILIDADE: 
                                            {product?.inStock > 0  
                                            ? <>
                                                <p className="isAvailiable">DISPONÍVEL</p> 
                                                <PurchaseButton>
                                                    <FaShoppingCart /> COMPRAR
                                                </PurchaseButton>
                                            </>
                                            : <p className="isNotAvailiable">INDISPONÍVEL</p>}
                                            <br/>
                                        </Availability>
                                    </Purchase>
                                </ProductBid>
                                <HorizontalSpreader />
                                <ProductDetails>
                                    <span>Especificações :</span>
                                    {productInfo 
                                    ? productInfo.map((info,i)=>{
                                            return (
                                                <li key={i}>
                                                    {info}
                                                </li>
                                            )
                                        })
                                    :<>Produto não encontrado</>
                                    }
                                </ProductDetails>
                            </ProductDescription>
                    </Content>
                </Catalog>
            </Container>
        </Page>
    );
};