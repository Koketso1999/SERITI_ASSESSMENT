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
    
     
    <SideContainer>
           <TopContainer></TopContainer>
      {/* SideBar */}
      {SideBarLinkObjects.map(({ icon, link, rightlink }) => (
       
          <LinksContainer  key={link}>
          <Links>
            <Icons style={{color:'#ffff'}}>{icon}</Icons>
            <LinkSpan>
              {link}
              <RightIcon>{rightlink}</RightIcon>
            </LinkSpan>
          </Links>
          </LinksContainer>
      
      ))}
        </SideContainer>
    </>
  );
};

export default SideNav;
