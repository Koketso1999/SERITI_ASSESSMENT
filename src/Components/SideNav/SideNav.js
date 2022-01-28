import React from "react";
import { SideBarLinkObjects } from "../../DummyData";
import {
  SideContainer,
  TopContainer,
  Links,
  Icons,
  LinkSpan,
  RightIcon,
  LinksContainer,
  HoverContainer,
} from "./SideNav.Elements";
const SideNav = () => {
  return (
    <>
      <SideContainer>
        <TopContainer></TopContainer>

        {/* A mapping function over the list of objects in the DummyData file */}
        {SideBarLinkObjects.map(({ icon, link, rightlink }) => (
          <LinksContainer key={link}>
            <Links>
              <Icons
                style={{ color: "#ffff", fontSize: "16px", marginRight: "0" }}
              >
                {icon}
              </Icons>
              <LinkSpan>{link}</LinkSpan>
            </Links>
            <RightIcon>{rightlink}</RightIcon>
          </LinksContainer>
        ))}
      </SideContainer>
    </>
  );
};

export default SideNav;
