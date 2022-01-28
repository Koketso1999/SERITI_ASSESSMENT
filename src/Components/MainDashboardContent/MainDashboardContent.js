import React from "react";
import { CategoriesObjects } from "../../DummyData";
import {
  CategoryNumber,
  CategoryText,
  MainDashboard,
  TopSection,
  MiniHeader,
  CategoriesContainer,
  GridContainer,
  GridItem,
  Icon,
  CategoryLabel,
  InputBox,
  Search,
  RightSection,
  LeftSection,
  CategoryOne,
  CategoryThree,
  CategoryFour,
  CategoryTwo,
  CategoryFive,
  CategorySix,
} from "./MainDashboardContent.Elements";
import Header from "../Header/Header";
import { HiMenu } from "react-icons/hi";
import { IoIosSpeedometer } from "react-icons/io";
import {
  FaRegBell,
  FaUserAlt,
  FaSearch,
  FaHome,
  FaRegThumbsUp,
  FaUsers,
  FaStar,
} from "react-icons/fa";
import LineChart from "../Charts/LineChart";
import LineCharts from "../Charts/LineChart";

const MainDashboardContent = () => {
  return (
    <>
      <MainDashboard>
        <TopSection>
          <LeftSection>
            <HiMenu />
          </LeftSection>

          <RightSection>
            <InputBox>
              <FaSearch
                style={{
                  color: "#332f2f",
                  position: "absolute",
                  top: "3%",
                  left: "89%",
                  fontSize: "14px",

                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginLeft: " 8px",
                }}
              />
              <Search type="text" placeholder="Search" />
            </InputBox>
            <FaRegBell
              style={{
                color: "#fff",

                fontSize: "18px",

                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: "24px",
                marginRight: "10px",
              }}
            />
            <FaUserAlt
              style={{
                color: "#fff",
                marginRight: "24px",

                fontSize: "18px",

                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: "8px",
              }}
            />
          </RightSection>
        </TopSection>

        <MiniHeader>
          <FaHome />
        </MiniHeader>

        <CategoriesContainer>
          <CategoryOne>
            <Icon>
              <IoIosSpeedometer />
            </Icon>
            <CategoryText>
              <CategoryLabel>Users</CategoryLabel>
              <CategoryNumber>5</CategoryNumber>
            </CategoryText>
          </CategoryOne>

          <CategoryTwo>
            <Icon>
              <FaRegThumbsUp />
            </Icon>
            <CategoryText>
              <CategoryLabel>Users</CategoryLabel>
              <CategoryNumber>5</CategoryNumber>
            </CategoryText>
          </CategoryTwo>

          <CategoryThree>
            <Icon>
              <FaUsers />
            </Icon>
            <CategoryText>
              <CategoryLabel>Uploads</CategoryLabel>
              <CategoryNumber>5</CategoryNumber>
            </CategoryText>
          </CategoryThree>
          <CategoryFour>
            <Icon>
              <FaStar />
            </Icon>
            <CategoryText>
              <CategoryLabel>Users</CategoryLabel>
              <CategoryNumber>5</CategoryNumber>
            </CategoryText>
          </CategoryFour>
          <CategoryFive>
            <LineCharts />
          </CategoryFive>
          <CategorySix>
            <LineChart />
          </CategorySix>
        </CategoriesContainer>
      </MainDashboard>
    </>
  );
};

export default MainDashboardContent;
