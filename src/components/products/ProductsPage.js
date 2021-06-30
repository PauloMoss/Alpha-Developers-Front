import styled from "styled-components";
import Header from "../Header";
import {FaCog, FaShoppingCart} from "react-icons/fa";

export default function ProductsPage() {
    const products = [
        {
            id: 1,
            name: "Avell A62 LIV - Prata",
            price: "699993",
            description: "Intel® Core™ i5-10750H (10ª. Ger. Até 5.0 GHZ);Tela 15.6” Full HD WVA 120Hz;GeForce™ GTX 1650Ti (4GB GDDR6);16GB de RAM DDR4;500GB SSD NVME;Apenas 2.1Kg;",
            img: "https://images.avell.com.br/media/catalog/product/cache/1/small_image/350x262/9df78eab33525d08d6e5fb8d27136e95/a/5/a52_6__2.jpg",        
            inStock: 0
        },
        {
            id: 2,
            name: "Avell A62 LIV - Preto", 
            price: "1799993",
            description: "Intel® Core™ i7-10750H (10ª. Ger. Até 5.0 GHZ);Tela 15.6” Full HD WVA 120Hz;GeForce™ GTX 1650Ti (4GB GDDR6);16GB de RAM DDR4;500GB SSD NVME;Apenas 2.1Kg;",
            img: "https://images.avell.com.br/media/catalog/product/cache/1/small_image/350x262/9df78eab33525d08d6e5fb8d27136e95/a/6/a60-_12_.jpg",        
            inStock: 5
        },
        {
            id: 3,
            name: "Avell A62 LIV - branco", 
            price: "599993",
            description: "Intel® Core™ i3-10750H (10ª. Ger. Até 5.0 GHZ);Tela 15.6” Full HD WVA 120Hz;GeForce™ GTX 1650Ti (4GB GDDR6);16GB de RAM DDR4;500GB SSD NVME;Apenas 2.1Kg;",
            img: "https://images7.kabum.com.br/produtos/fotos/131367/notebook-samsung-book-x30-intel-core-i5-10210u-8gb-1tb-tela-15-6-windows-10-home-branco-np550xcj-kf2br_1605290217_g.jpg",        
            inStock: 5
        },
        {
            id: 4,
            name: "Avell A62 LIV - Prata",
            price: "699993",
            description: "Intel® Core™ i5-10750H (10ª. Ger. Até 5.0 GHZ);Tela 15.6” Full HD WVA 120Hz;GeForce™ GTX 1650Ti (4GB GDDR6);16GB de RAM DDR4;500GB SSD NVME;Apenas 2.1Kg;",
            img: "https://images.avell.com.br/media/catalog/product/cache/1/small_image/350x262/9df78eab33525d08d6e5fb8d27136e95/a/5/a52_6__2.jpg",        
            inStock: 0
        },
        {
            id: 5,
            name: "Avell A62 LIV - Preto", 
            price: "1799993",
            description: "Intel® Core™ i7-10750H (10ª. Ger. Até 5.0 GHZ);Tela 15.6” Full HD WVA 120Hz;GeForce™ GTX 1650Ti (4GB GDDR6);16GB de RAM DDR4;500GB SSD NVME;Apenas 2.1Kg;",
            img: "https://images.avell.com.br/media/catalog/product/cache/1/small_image/350x262/9df78eab33525d08d6e5fb8d27136e95/a/6/a60-_12_.jpg",        
            inStock: 5
        },
        {
            id: 6,
            name: "Avell A62 LIV - branco", 
            price: "599993",
            description: "Intel® Core™ i3-10750H (10ª. Ger. Até 5.0 GHZ);Tela 15.6” Full HD WVA 120Hz;GeForce™ GTX 1650Ti (4GB GDDR6);16GB de RAM DDR4;500GB SSD NVME;Apenas 2.1Kg;",
            img: "https://images7.kabum.com.br/produtos/fotos/131367/notebook-samsung-book-x30-intel-core-i5-10210u-8gb-1tb-tela-15-6-windows-10-home-branco-np550xcj-kf2br_1605290217_g.jpg",        
            inStock: 5
        }
    ];
    return (
        <Page>
            <Header/>
            <Container>
                <Catalog>
                    <Title>
                        Produtos
                    </Title>
                    <Wrap>
                        {products.map(({id,name,price,description,img,inStock})=> {
                            const productInfo = description.split(";").filter((s)=> s!=="");
                            return(
                                <Product key={id}>
                                    <img src={img} alt={name}/>
                                    <HorizontalSpreader/>
                                    <Info>
                                        <span>{name}</span>
                                        <ul>
                                            <span>Especificações:</span>
                                            {productInfo.map((info)=>{
                                                return (
                                                    <li>
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
                                            <ConfigButton>
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
                        })}
                    </Wrap>
                </Catalog>
            </Container>
        </Page>
    );
}

const HorizontalSpreader = styled.div`
    height:1px;
    background:#8F47F6;
    width:100%;
`;
const Page = styled.div`
    margin-bottom: 120px;
    display:flex;
    justify-content:flex-start;
    flex-direction:column;
    align-items:center;
    width:100%;
`;
const Container = styled.div`
    margin-top:100px;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    width:978px;
    background:none;
`;
const Catalog = styled.div`
    padding:15px 0 10px;
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    width:100%;
    background:#FFFDFC;
`;
const Title = styled.div`
    padding-left:20px;
    font-size: 22px;
    font-weight: bold;
    margin: 12px;
`;
const Wrap = styled.div`
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    width:100%;
    flex-wrap:wrap;
`;
const Product = styled.div`
    border:1px solid #8F47F6;
    width:296px;
    margin:10px 0;
    padding:15px 15px 0px 15px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    img{
        margin:2px 2px 12px;
        width:186px;
        height: 140px;
    }
`;
const Info = styled.div`
    width:296px;
    padding:15px;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    align-items:center;
    >span{
        font-weight: bold;
        padding:8px 0 16px;
    }
    ul{
        padding: 10px 5px 10px 10px;
        background: #8F47F6;
        border-radius:8px;
        >span{
            font-weight: bold;
        }
        li{
            color:#FFFDFC;
            padding:10px 0px 0px 10px;
        }
    }
`
const Actions = styled.div`
    width:296px;
    padding:15px;
    display:flex;
    justify-content:space-between;
    align-items:center;
`
const ConfigButton = styled.button`
    height:52px;
    border:none;
    background:#8F47F6;
    width:122px;
    font-size:14px;
    letter-spacing:0.04em;
    font-weight:bold;
    color:#FFFDFC;
    border-bottom:4px solid #7216F4;
    cursor: pointer;
    :hover{
        filter: brightness(1.06);
    }
`
const UnavailableButton = styled(ConfigButton)`
    width:100%;
    font-weight:normal;
    letter-spacing:0.04em;
    opacity:0.5;
    color:#FFFDFC;
`
const AddToCartButton = styled(ConfigButton)`
    background: #F9E1CF;
    border-color:#F3C5A2;
    color:#000000;
`
const Price = styled.div`
    width:100%;
    padding:15px 0;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    font-size:16px;
    font-weight:bold;
    color:#7216F4;
    div{
        margin-top:10px;
    }
    span{
        color:#424242;
    }
`
