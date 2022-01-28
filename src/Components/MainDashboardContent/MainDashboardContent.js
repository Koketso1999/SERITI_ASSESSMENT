import React from "react";
import {
  CategoryNumber,
  CategoryText,
  MainDashboard,
  TopSection,
  MiniHeader,
  MiniRight,
  MiniLeft,
  CategoriesContainer,
  Icon,
  CategoryLabel,
  BreadCrumb,
  InputBox,
  LeftTextOne,
  LeftTextTwo,
  Search,
  RightSection,
  IconOne,
  IconTwo,
  IconThree,
  LeftSection,
  CategoryOne,
  CategoryThree,
  CategoryFour,
  CategoryTwo,
  CategoryFive,
  CategorySix,
  ChartHeading,
} from "./MainDashboardContent.Elements";
import { HiMenu, HiOutlineDocumentText } from "react-icons/hi";
import { IoIosSpeedometer, IoDocumentsSharp } from "react-icons/io";
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

    {/* Dashboard contents */}
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
                  top: "2.5%",
                  left: "90%",
                  fontSize: "12px",
                  cursor: "pointer",
                }}
              />
              <Search type="text" placeholder="Search" />
            </InputBox>
            <FaRegBell
              style={{
                color: "#fff",
                cursor: "pointer",

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
                cursor: "pointer",
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
            <LeftTextOne>
              <IoIosSpeedometer /> Dashboard
            </LeftTextOne>
            <LeftTextTwo>Let's see if you can build this </LeftTextTwo>
          </MiniLeft>

          <MiniRight>
            <FaHome /> <BreadCrumb>/ Dashboard</BreadCrumb>
          </MiniRight>
        </MiniHeader>

        <CategoriesContainer>
          <CategoryOne>
            <IconOne>
              <FaUsers />
            </IconOne>
            <CategoryText>
              <CategoryLabel>USERS</CategoryLabel>
              <CategoryNumber>5</CategoryNumber>
            </CategoryText>
          </CategoryOne>

          <CategoryTwo>
            <IconTwo>
              <FaRegThumbsUp />
            </IconTwo>
            <CategoryText>
              <CategoryLabel>LIKES</CategoryLabel>
              <CategoryNumber>25</CategoryNumber>
            </CategoryText>
          </CategoryTwo>

          <CategoryThree>
            <IconThree>
              <HiOutlineDocumentText />
            </IconThree>
            <CategoryText>
              <CategoryLabel>UPLOADS</CategoryLabel>
              <CategoryNumber>10</CategoryNumber>
            </CategoryText>
          </CategoryThree>
          <CategoryFour>
            <Icon>
              <FaStar />
            </Icon>
            <CategoryText>
              <CategoryLabel>STARS</CategoryLabel>
              <CategoryNumber>500</CategoryNumber>
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
