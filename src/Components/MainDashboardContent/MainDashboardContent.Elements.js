import styled from "styled-components";

export const MainDashboard = styled.section`
  margin-left: 250px;
  box-sizing: border-box;
  height: 100vh;
  /* padding: 20px 25px; */
  transition: 400ms margin-left;
  background: #dfdcdc;
`;

export const TopSection = styled.section`
  display: flex;
  justify-content: space-between;
  background: #1c9181;
  height: 40px;
  padding: 10px;
  /* margin-bottom: 25px; */
`;

export const MiniHeader = styled.section`
height:70px;
background:#fff;
display: flex;
  justify-content: space-between;
`;
export const CategoryNumber = styled.div``;

export const CategoriesContainer = styled.div`
  padding:25px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 2px 10px;
  grid-template-areas:
    "Cat-1 Cat-2 Cat-3 Cat-4"
    "Chart-1 Chart-1 Chart-2 Chart-2"
    ". . . ."
    ". . . .";
`;

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: 500px 500px;
`;

export const GridItem = styled.div`
  /* height: 50px;
  box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.1);
  border-radius: 25px;
  box-sizing: border-box;
  padding: 50px; */

  box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.1);
`;

export const Icon = styled.div`
padding:5%;
background:red;
height:100%;
width:70px;
font-size:35px;

color:#fff;
`;

export const CategoryLabel = styled.p``;

export const InputBox = styled.div`
  display: flex;
  /* justify-content: space-between; */
  width: 170px;
  height: 30px;
  padding: 2px;
`;

export const Search = styled.input`
  border: none;
  border-radius: 2px;
  outline: none;
  width: 100%;
  padding: 10px;
  text-align: left;
  position: static;
  /* margin-right:20px; */
  height: 100%;
`;

export const CategoryOne = styled.div`
  grid-area: Cat-1;
  display:flex;
  background:#fff;
  border-radius:4px;
  width:240px;
  height:65px

`;

export const RightSection = styled.div`
  display: flex;
`;
export const LeftSection = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CategoryTwo = styled.div`
  grid-area: Cat-2;
  display:flex;
  background:#fff;
  border-radius:4px;
  width:240px;
  height:65px

`;

export const CategoryThree = styled.div`
  grid-area: Cat-3;
  display:flex;
  background:#fff;
  border-radius:4px;
  width:240px;
  height:65px

  `;

export const CategoryFour = styled.div`
  grid-area: Cat-4;
  display:flex;
  background:#fff;
  border-radius:4px;
  width:240px;
  height:65px

`;

export const CategoryFive = styled.div`
  grid-area: Chart-1;
  height:300px;
  background:#fff;
  border-radius:4px;
  width:500px; 
  margin-top: -100px;
`;

export const CategorySix = styled.div`
  grid-area: Chart-2;
  border-radius:4px;
  height:300px;
  background:#fff;
  width:500px;
  margin-top: -100px
`;

export const CategoryText = styled.div``;

export const ChartHeading = styled.h1`
  font-size:20px;
  color:#3a2d2d;
  margin:12px;

`;

export const MiniLeft= styled.div``;

export const MiniRight= styled.div``;

export const LeftTextOne= styled.div``;

export const LeftTextTwo= styled.div``;

export const BreadCrumb= styled.span``;


