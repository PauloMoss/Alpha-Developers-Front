import ReactModal from 'react-modal';
import styled from 'styled-components';

ReactModal.setAppElement("body");

export default function Modal({ modalIsOpen, handleReturn, purchase, totalValue }) {
  
    return (

      <ModalStyle
        isOpen={modalIsOpen}
        contentLabel='Success Purchase Modal'
      >
        <>
            <Title>
                Compra efetuada com sucesso
            </Title>
            <OrderSummaryContainer>
                <Labels>
                    <div>Produtos</div>
                    <div>Quantidade</div>
                    <div>Valor</div>
                </Labels>
                {purchase.map(c => {
                    const subTotal = `R$ ${(c.price*c.orderQuantity/100).toFixed(2).replace('.',',')}`;
                    return(
                        <OrderProducts key={c.id}>
                            <div>{c.name}</div>
                            <div>{c.orderQuantity}</div>
                            <div>{subTotal}</div>
                        </OrderProducts>
                    )
                })}
                <SubtotalBar><span>Total:</span> {`R$ ${(totalValue/100).toFixed(2).replace('.',',')}`}</SubtotalBar>
            </OrderSummaryContainer>
            
            <ButtonsContainer>
            <span>Obrigado pela compra!</span>
            <ReturnButton onClick={handleReturn}>
                Voltar para o menu de produtos
            </ReturnButton>
            </ButtonsContainer>
        </>
      </ModalStyle>
    );
}

const ModalStyle = styled(ReactModal)`
    top: 0;
    left: 0;
    transform: translate(50%, 50%);
    background: #333333;
    border-radius: 20px;
    width:50%;
    padding: 20px 50px;
    z-index: 10;
    @media (max-width: 600px) {
        width: 100%;
        flex-direction: column;
        transform: translate(0, 50%);
        border-radius: 0;
        padding: 20px 0;
    }
`;

const Title = styled.h1`
    color: green;
    font: 700 20px 'Raleway', sans-serif;
    text-align: center;
`;
const OrderSummaryContainer = styled.div`
    width:95%;
    margin: 40px 0;
    background-color: #fff;
    @media (max-width: 600px) {
        width: 100%;
        flex-direction: column;
    }
`;
const Labels = styled.div`
    display: flex;
    width:100%;
    height: 50px;
    margin-bottom: 20px;
    background-color: #666;
    color: #FFF;
    div{
        display: flex;
        justify-content:center;
        align-items:center;
        height: 100%;
        width: 30%;
    }
    & > div:first-child{
        width:40%;
    }
`;

const OrderProducts = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    width:100%;
    margin-bottom: 15px;
    div{
        display: flex;
        justify-content:center;
        align-items:center;
        height: 100%;
        width: 30%;
        margin:10px;
    }
    & > div:first-child{
        width:40%;
    }
`;

const ButtonsContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction:column;
  justify-content: space-evenly;
  margin: 30px;
  span{
      margin-bottom:20px;
      color: #FFF;
  }
`;
const SubtotalBar = styled.div`
    display: flex;
    justify-content:space-evenly;
    align-items:center;
    height: 50px;
    background-color: #dadada;
    font-weight:bold;
    padding-right:20px;
`;
const ReturnButton = styled.button`
  background: #1877F2;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  outline: none;
  padding: 8px 20px;
  font-weight: 700;
  font-size: 16px;
`;