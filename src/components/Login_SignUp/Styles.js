import styled from "styled-components";
import NumberFormat from 'react-number-format';

const Container = styled.div`
display: flex;
height: 100vh;

@media (max-width: 600px) {
        width: 100%;
        flex-direction: column;
    }
`;

const BannerStyle = styled.div`
    width: 60%;
    background-color: #1E1E1E;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
        font-family: 'Passion One', sans-serif;
        color: #fff;
        font-size: 20px;
        font-weight: bold;
    }

    img {
        width:300px;
        height: 300px;
        object-fit: cover;
    }

    @media (max-width: 600px) {
        width: 100%;
        padding: 20px;
        text-align: center;
        display: ${props => props.location === "/sign-up" ? 'none' : 'block'};

        h1 {
            font-size: 76px;
        }
        h2 {
            font-size: 23px;
        }
    }
`;

const SignUpContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 40%;

    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
    button {
        margin-top: 10px;
        margin-bottom: 25px;
        border: none;
    }
    span {
        color:#FFFFFF;
    }
    span:hover {
        color: rgba(250, 250, 250, 0.8)
    }
    div {
        width: 70%;
        margin: 5px 0;
        font-size: 14px;
    }
    @media (max-width: 600px) {
        width: 100%;
        margin: 20px auto;
        form {
            margin-top: 40px;
        }
    }
`;

const Input = styled.input`
display: block;
width: 70%;
height: 45px;
border: 1px solid #D5D5D5;
border-radius: 5px;
margin: 6px 0;
font-size: 15px;
color: #000;
background-color: ${props => props.disabled ? '#F2F2F2' : '#FFFFFF'};
font-family: 'Raleway', sans-serif;
    ::placeholder {
        color: #000;
        opacity: 0.5
    }
`;

const StyledInput = styled(NumberFormat)`
display: block;
width: 70%;
height: 45px;
border: 1px solid #D5D5D5;
border-radius: 5px;
margin: 6px 0;
font-size: 15px;
color: #000;
background-color: ${props => props.disabled ? '#F2F2F2' : '#FFFFFF'};
font-family: 'Raleway', sans-serif;
::placeholder {
    color: #000;
    opacity: 0.5
}
`;

const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 45px;
    background: #A375FC;
    border-radius: 5px;
    color: #FFFFFF;
    font-size: 20px;
    background-color: ${props => props.disabled ? "#880CCC" : "#A375FC"};
    cursor: ${props => props.disabled ? "not-allowed" : "pointer"};
    &:hover {
        color: rgba(250, 250, 250, 0.8)
    }
`;
const UserAlert = styled.div`
    text-align: center;
    font-weight: 700;
    padding-top: 10px;
    color: red;
`;

export{
    Container,
    BannerStyle,
    SignUpContainer,
    Input,
    Button,
    UserAlert,
    StyledInput
}