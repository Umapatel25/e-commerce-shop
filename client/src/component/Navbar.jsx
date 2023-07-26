import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
import {mobile} from "../responsive";
import { Link } from "react-router-dom";


const Container=styled.div`
 height:60px;
 `
 const Wrapper = styled.div`
 padding: 10px 20px;
 display: flex;
 align-items: center;
 justify-content: space-between;
 ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
 flex: 1;
 display: flex;
 align-items: center;
`;

const Language = styled.span`
 font-size: 14px;
 cursor: pointer;
 ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
 border: 0.5px solid lightgray;
 display: flex;
 align-items: center;
 margin-left: 25px;
 padding: 5px;
`;

const Input = styled.input`
 border: none;
 ${mobile({ width: "50px" })}
`;

const Center = styled.div`
 flex: 1;
 text-align: center;
`;

const Logo = styled.h1`
 font-weight: bold;
 ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
 flex: 1;
 display: flex;
 align-items: center;
 justify-content: flex-end;
 ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
 font-size: 14px;
 cursor: pointer;
 margin-left: 25px;
 ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;



const Navbar = () => {
  return (
    <Container>
        <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "gray", fontSize: 16 }}/>  
          </SearchContainer>
        </Left>
        <Center>
          <Logo>UMA.</Logo>
        </Center>
        <Right>
        <Link to="/register" >
          <MenuItem>REGISTER</MenuItem>
          </Link>
          <Link to="/login" >
          <MenuItem>SIGN IN</MenuItem>
          </Link>
          <Link to="/cart" >     
               <MenuItem>
           <FontAwesomeIcon icon={faCartShopping} /> 
          </MenuItem>
          </Link>
        </Right>
        </Wrapper>  
    </Container>
  )
}

export default Navbar