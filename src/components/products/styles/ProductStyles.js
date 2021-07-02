import styled from "styled-components";
import {AddToCartButton, Title, Price, Info} from "./styles.js"

const PurchaseButton = styled(AddToCartButton)` 
    width:100%;
    padding-top:6px;
    font-size:18px;
    line-height:18px;
    font-weight:bold;
`
const ProductTitle = styled(Title)`
    text-align:left;
    text-transform: uppercase;
    font-size: 28px;
    line-height: 28px;
    font-weight: 700;
    padding: 0 0 5px 30px;
    p{
        margin-top:10px;
        font-size: 14px;
        line-height: 16px;
        font-weight: 300;
    }
`
const ProductPrice = styled(Price)`
    font-size: 22px;
    line-height: 26px;
    width:60%;
    display:flex;
    align-items:flex-start;
    span{
        font-size:18px;
    }
`;

const ProductBid = styled.div`
    display:flex;
    width:100%;
    justify-content:space-between;
    align-items:center;
    padding:15px 0;
`
const Purchase = styled.div`
    display:flex;
    width:40%;
    flex-direction:column;
    padding-left:15px;
`;
const Content = styled.div`
    display:flex;
    justify-content:space-between;
    width:100%;
`
const ProductDescription = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content:center;
    width:calc(50% - 7px);
    color:#FFF;
    padding:15px;
`
const ProductImage = styled.div`
    position:relative;
    width:calc(50% - 7px);
    display:flex;
    align-items:center;
    justify-content:center;
    margin:0px 15px 0px 28px;
`
const Availability = styled.div`
font-size: 14px;
line-height: 18px;
font-weight:bold;
.isAvailiable {
    color:#17CE04;
    margin-bottom:10px;
}
.isNotAvailiable{
    color:#7216F4;
    margin-bottom:10px;
}
`
const ProductDetails = styled(Info)`
    width:100%;
    align-items: flex-start;
    li{
        color:#FFFDFC;
    }
`
export {
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
}