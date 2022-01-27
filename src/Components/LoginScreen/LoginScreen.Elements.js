import styled from "styled-components";

export const LoginContainer = styled.div`
  height: 100%;
  min-height:100vh;
  background: linear-gradient(180deg, #1c9181 50%, #f2f2f2 50%);
  padding:0;

 
`;

export const LoginContent = styled.div`


position:absolute;
margin-top:-150px;
margin-left:-200px;
top:50%;
left:50%;

background-color: #f9f9f9;
padding: 50px;
width: 450px;
  height: 500px;
/*  
 width: 24vw;
  height: 50vh;
  background-color: #f9f9f9;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -40%);
  padding: 50px;
  box-shadow: -7px 6px 15px -7px rgba(0, 0, 0, 0.54);
  -webkit-box-shadow: -7px 6px 15px -7px rgba(0, 0, 0, 0.54);
  -moz-box-shadow: -7px 6px 15px -7px rgba(0, 0, 0, 0.54); */
`;

export const LoginHeading = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -400%);
  color: #f2f2f2;
  font-size: 3em;
  font-family: "Open Sans", sans-serif;
  font-family: "Pacifico", cursive;
  /* text-decoration: */
`;

export const LoginBox = styled.div`

`;

export const TopMessage = styled.h2`
    text-align: center;
    margin:16px 0;
    font-size: 24px;
    /* justify-content: space-between; */
    /* display:inline; */
`;

export const Divider = styled.hr`
  border-top: 1px solid #dcdedc;
  margin-bottom: 20px;
`;

export const Icon = styled.span`
      
  /* font-size:40px; */
  /* width: 100%; */

margin-right:16px;
`;
export const StyledFormWrapper = styled.div``;

export const StyledForm = styled.form``;

export const StyledLabel = styled.p`
font-weight:700;
font-size:18px;
color:#434a48;
margin: 14px 0;
`;


export const StyledInput = styled.input`
  width: 100%;
  height: 46px;
  border-radius: 6px;
  /* border-color:#b9bdba; */
  border: 2px solid #b9bdba;
  padding: 12px;
  font-size: 18px;
  box-sizing: border-box;
`;
export const StyledInputCheckbox = styled.input`
box-sizing: border-box;
/* display:inline;   */
/* outline: 2px solid #434a48; */

/* border: 2px solid #bcbcbc;
  border-radius: 2px; */
  cursor: pointer;


  width: 1.15em;
  height: 1.15em;
  border: 0.15em solid #bcbcbc;
  border-radius: 0.15em;
`;

export const StyledLink = styled.a`
  color: #1c9181;
  /* position: relative; */
/* display:inline; */
font-weight:600;
font-size:18px;
`;
export const StyledLabelStay = styled.p`

font-weight:600;
font-size:18px;
color:#434a48;
margin: 16px 0;
`;
export const Group = styled.div`
    /* width:100%;
    display:inline-block; */

/* 
    display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;
  align-content: start;
  padding:10px;; */

  display: flex;
  flex-wrap: wrap;
  /* for horizontal aligning of child divs */
  justify-content: space-between;
  /* for vertical aligning */
  align-items: center;
`;

export const StyledButton = styled.button`
  width: 100%;
  background-color: #1c9181;
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 18px;
  padding: 12px;
  border-radius: 3px;
  box-sizing: border-box;

  font-weight:700;
/* font-size:18px; */
margin: 14px 0;
`;
