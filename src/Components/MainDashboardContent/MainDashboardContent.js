import React from "react";
import { CategoriesObjects } from "../../DummyData";
import {
  CategoryNumber,
  CategoryText,
  MainDashboard,
  TopSection,
  MiniHeader,MiniRight,MiniLeft,
  CategoriesContainer,
  GridContainer,
  GridItem,
  Icon,
  CategoryLabel,BreadCrumb,
  InputBox,LeftTextOne,
  LeftTextTwo,
  Search,
  RightSection,
  LeftSection,
  CategoryOne,
  CategoryThree,
  CategoryFour,
  CategoryTwo,
  CategoryFive,
  CategorySix,ChartHeading
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
import LineCharts from "../Charts/LineChart";
import PieCharts from "../Charts/PieCharts";

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

        <MiniLeft>

          <LeftTextOne><IoIosSpeedometer /> Dashboard </LeftTextOne>
          <LeftTextTwo>Let's see if you can build this </LeftTextTwo>
        </MiniLeft>

        <MiniRight>
        <FaHome /> <BreadCrumb>/ Home</BreadCrumb>
        </MiniRight>

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
              <ChartHeading>Monthly Sales</ChartHeading>
            
            <LineCharts />
          </CategoryFive>
          <CategorySix>
          <ChartHeading>Support Requests</ChartHeading>

            <PieCharts />
          </CategorySix>
        </CategoriesContainer>
      </MainDashboard>
    </>
  );
};

export default MainDashboardContent;
