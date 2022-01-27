import React from "react";
import { SideBarLinkObjects } from "../../DummyData";
import {
  SideContainer,
  TopContainer,
  Links,
  Icons,
  LinkSpan,
  RightIcon,
} from "./SideNav.Elements";
const SideNav = () => {
  return (
    <>
      THIS IS THE SIDEBAR
      <TopContainer></TopContainer>
      
      {/* SideBar */}
      {SideBarLinkObjects.map(({ icon, link, rightlink }) => (
        <SideContainer key={link}>
          <Links>
            <Icons>{icon}</Icons>
            <LinkSpan>
              {link}
              <RightIcon>{rightlink}</RightIcon>
            </LinkSpan>
          </Links>
        </SideContainer>
      ))}
    </>
  );
};

export default SideNav;
