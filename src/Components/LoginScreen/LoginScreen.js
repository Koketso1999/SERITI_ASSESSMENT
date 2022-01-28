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
  StyledButton,
  StyledInputCheckbox,
  Group,
  Icon,
  StyledLabelStay,
  LinkContainer,
} from "./LoginScreen.Elements";
import { FaUserAlt } from "react-icons/fa";
import { MdOutlineLogin } from "react-icons/md";
import { Link } from "react-router-dom";
const LoginScreen = () => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
    this.props.history.push("/dashboard");
  };
  return (
    <>
      {/* Login Container and Its contents */}
      <LoginContainer>
        <LoginHeading>Hello</LoginHeading>

        <LoginContent>
          <LoginBox>
            <TopMessage>
              <Icon>
                <FaUserAlt />
              </Icon>
              SIGN IN
            </TopMessage>

            {/* Draw the divider */}
            <Divider></Divider>

            {/* Creating the Form */}
            <StyledFormWrapper>
              <StyledForm>
                <StyledLabel>USERNAME</StyledLabel>
                <StyledInput
                  required
                  type="email"
                  placeholder="Email"
                  name="email"
                />

                <StyledLabel>PASSWORD</StyledLabel>
                <StyledInput
                  type="password"
                  required
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

                  <LinkContainer>
                    <StyledLink>Forgot Password ? </StyledLink>
                  </LinkContainer>
                </Group>
                <Link to="/dashboard">
                  <StyledButton type="submit">
                    <Icon>
                      <MdOutlineLogin />
                    </Icon>
                    SIGN IN
                  </StyledButton>
                </Link>
              </StyledForm>
            </StyledFormWrapper>
          </LoginBox>
        </LoginContent>
      </LoginContainer>
    </>
  );
};

export default LoginScreen;
