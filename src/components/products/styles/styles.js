import styled from "styled-components";

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
    background:#000000;
`;
const Title = styled.div`
    padding-left:20px;
    font-size: 22px;
    font-weight: bold;
    margin: 12px;
    color:#F9E1CF;
`;
const Wrap = styled.div`
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    width:100%;
    flex-wrap:wrap;
`;
const ImageContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
    background:#FFFDFC;
    border-radius:8px;
    border:2px solid #8F47F6;
    margin-bottom:15px;
    img{
        cursor:pointer;
    }
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
        color:#F9E1CF;
        font-weight: bold;
        padding:8px 0 16px;
    }
    ul{
        padding: 10px 5px 10px 10px;
        background: #C9A4FF;
        border-radius:8px;
        >span{
            font-weight: bold;
        }
        li{
            color:#000000;
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
    font-size:16px;
    letter-spacing:0.04em;
    opacity:0.6;
    color:#FFFDFC;
    :hover{
        opacity:1;
    }
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
    color:#FFFDFC;
    div{
        margin-top:10px;
    }
    span{
        color:#F9E1CF;
    }
`
export {
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
}
 