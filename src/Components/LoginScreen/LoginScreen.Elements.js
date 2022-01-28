import styled from "styled-components";

export const LoginContainer = styled.div`
  height: 100vh;
  background: linear-gradient(180deg, #1c9181 50%, #f2f2f2 50%);
`;

export const LoginContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  background: #f9f9f9;
  padding: 50px;
  width: 450px;
  height: 500px;

  transform: translate(-50%, -40%);
  padding: 50px;
  box-shadow: -7px 6px 15px -7px rgba(0, 0, 0, 0.54);
  -webkit-box-shadow: -7px 6px 15px -7px rgba(0, 0, 0, 0.54);
  -moz-box-shadow: -7px 6px 15px -7px rgba(0, 0, 0, 0.54);
`;

export const LoginHeading = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -500%);
  color: #f2f2f2;
  width: 100%;
  font-family: "Open Sans", sans-serif;
  font-family: "Pacifico", cursive;
  text-align: center;
  font-size: 36px;
`;

export const LoginBox = styled.div``;

export const TopMessage = styled.h1`
  text-align: center;
  margin: 16px 0;
  font-size: 26px;
`;

export const Divider = styled.hr`
  border-top: 1px solid #dcdedc;
  margin-bottom: 20px;
`;

export const Icon = styled.span`
  margin-right: 16px;
`;

export const StyledFormWrapper = styled.div``;

export const StyledForm = styled.form``;

export const StyledLabel = styled.p`
  font-weight: 700;
  font-size: 18px;
  color: #434a48;
  margin: 14px 0;
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 46px;
  border-radius: 6px;
  border: 2px solid #b9bdba;
  padding: 12px;
  font-size: 18px;
  box-sizing: border-box;
`;
export const StyledInputCheckbox = styled.input`
  cursor: pointer;

  width: 1.5em;
  height: 1.15em;
  border: 0.15em solid #bcbcbc;
  border-radius: 0.15em;
`;

export const StyledLink = styled.a`
  color: #1c9181;
  font-weight: 600;
  font-size: 18px;
  cursor: pointer;
`;
export const StyledLabelStay = styled.p`
  font-weight: 600;
  font-size: 18px;
  color: #434a48;
  margin: 16px 0;
`;
export const Group = styled.div`
  display: flex;
  /* flex-wrap: wrap; */
  /* for horizontal aligning of child divs */
  /* justify-content: space-between; */
  /* for vertical aligning */
  align-items: center;
`;

export const StyledButton = styled.button`
  width: 100%;
  background-color: #1c9181;
  color: #fff;
  border: none;
  font-size: 18px;
  padding: 12px;
  border-radius: 3px;
  box-sizing: border-box;
  font-weight: 700;
  margin: 14px 0;
  cursor: pointer;
`;
export const LinkContainer = styled.div`
  margin-left: 40px;
`;
