import React from "react";
import { SideBarLinkObjects } from "../../DummyData";
import {
  SideContainer,
  TopContainer,
  Links,
  Icons,
  LinkSpan,
  RightIcon,LinksContainer
} from "./SideNav.Elements";
const SideNav = () => {
  return (
    <>
    
     

      {/* SideBar */}
      {SideBarLinkObjects.map(({ icon, link, rightlink }) => (
        <SideContainer key={link}>
           <TopContainer>KOKETSO</TopContainer>
          <LinksContainer>
          <Links>
            <Icons>{icon}</Icons>
            <LinkSpan>
              {link}
              <RightIcon>{rightlink}</RightIcon>
            </LinkSpan>
          </Links>
          </LinksContainer>
        </SideContainer>
      ))}
    </>
  );
};

export default SideNav;
