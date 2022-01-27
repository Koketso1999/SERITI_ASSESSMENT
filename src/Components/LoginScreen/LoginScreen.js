import React from "react";
import {
  LoginContainer,
  LoginContent,
  LoginHeading,
  LoginBox,
  TopMessage,
  Divider,
  StyledFormWrapper,
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledLink,
  StyledButton,StyledInputCheckbox,
  Group,Icon, StyledLabelStay
} from "./LoginScreen.Elements";
import { FaUserAlt } from 'react-icons/fa';
import { MdOutlineLogin } from 'react-icons/md';
const LoginScreen = () => {
  return (
    <>
      <LoginContainer>
          <LoginHeading>Hello</LoginHeading>

        <LoginContent>

          <LoginBox>
           
            {/* <TopMessage> <Icon><FaUserAlt/></Icon>SIGN IN</TopMessage> */}
            <TopMessage> <Icon><FaUserAlt/></Icon>SIGN IN</TopMessage>

            <Divider></Divider>

            <StyledFormWrapper>
              <StyledForm>
                <StyledLabel>USERNAME</StyledLabel>
                <StyledInput type="email" placeholder="Email" name="email" />

                <StyledLabel>PASSWORD</StyledLabel>
                <StyledInput
                  type="password"
                  placeholder="Password"
                  name="password"
                />

            <Group>    
                <StyledInputCheckbox
                  type="checkbox"
                  placeholder="Stay Signed in"
                  name="password"
                />
                <StyledLabelStay>Stay Signed in</StyledLabelStay>

                <StyledLink>Forgot Password ? </StyledLink>
                </Group>
                <StyledButton type="submit"> <Icon><MdOutlineLogin/></Icon> SIGN IN </StyledButton>
              </StyledForm>
            </StyledFormWrapper>
          </LoginBox>
        </LoginContent>
      </LoginContainer>
    </>
  );
};

export default LoginScreen;
