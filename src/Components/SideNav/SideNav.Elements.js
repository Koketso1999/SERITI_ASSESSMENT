import styled from "styled-components";

export const TopContainer = styled.section`
  display: flex;
  align-items: center;
  padding: 20px 25px;
  background: #197e70;
  height: 40px;
`;
export const SideContainer = styled.nav`
  background-color: #21262e;
  width: 250px;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;

  transition: 200ms width;
  color: #fff;
`;
export const HoverContainer = styled.nav``;
export const Links = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
export const Icons = styled.div`
  height: 50px;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: left;
`;
export const LinkSpan = styled.span`
  justify-content: left;
`;
export const RightIcon = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-end;
  flex-grow: 1;
`;
export const LinksContainer = styled.section`
  padding: 0px 15px;
  font-size: 14px;
  font-weight: 600;
  display: flex;

  &:hover {
    background: #020d14;
    border-left: 4px solid #1c9181;
    cursor: pointer;
  }
`;
