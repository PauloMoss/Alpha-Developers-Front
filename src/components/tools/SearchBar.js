import styled from "styled-components";
import {BsSearch} from "react-icons/bs";

export default function SearchBar() {
    function searchProducts(e) {
        e.preventDefault();
    }
    return (
        <Container onSubmit={searchProducts}>
            <SearchInput placeholder="O que você procura?" type="text"/>
            <SearchButton type="submit">
                <BsSearch/>
            </SearchButton>
        </Container>
    );
};
const Container = styled.form`
    position:relative;
    z-index:2;
    height:60px;
    width:100%;
    min-width:184px;
    margin:0 16px;
`;
const SearchInput = styled.input`
    outline:none;
    height:60px;
    width:100%;
    text-indent:12px;
    letter-spacing:0.04em;
    font-size:20px;
    margin:0;
`;
const SearchButton = styled.button`
    border:none;
    background:none;
    position:absolute;
    cursor: pointer;
    height:44px;
    width:44px;
    right:8px;
    top:8px;
    z-index:3;
`;