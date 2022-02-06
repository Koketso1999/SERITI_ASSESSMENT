import styled from "styled-components";

export const MainDashboard = styled.section`
  margin-left: 250px;
  box-sizing: border-box;
  height: 100vh;
  transition: 400ms margin-left;
  background: #dfdcdc;
  overflow: hidden;
`;

export const TopSection = styled.section`
  display: flex;
  justify-content: space-between;
  background: #1c9181;
  height: 40px;
  padding: 10px;
`;

export const MiniHeader = styled.section`
  height: 70px;
  background: #fff;
  display: flex;
  justify-content: space-between;

  padding: 16px;
`;
export const CategoryNumber = styled.div``;

export const CategoriesContainer = styled.div`
  padding: 25px;
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
  box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.1);
`;

export const Icon = styled.div`
  padding: 5%;
  background: #c70909;
  height: 100%;
  width: 70px;
  font-size: 35px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  color: #fff;
`;

export const IconOne = styled.div`
  padding: 5%;
  background: #1c9181;
  height: 100%;
  width: 70px;
  font-size: 35px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  color: #fff;
`;

export const IconTwo = styled.div`
  padding: 5%;
  background: #37a7c9;
  height: 100%;
  width: 70px;
  font-size: 35px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  color: #fff;
`;

export const IconThree = styled.div`
  padding: 5%;
  background: #f3d214;
  height: 100%;
  width: 70px;
  font-size: 35px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  color: #fff;
`;

export const CategoryText = styled.h1`
  font-weight: 600;
  font-size: 14px;
  padding: 12px;
`;
export const CategoryLabel = styled.div``;
export const InputBox = styled.div`
  display: flex;
  width: 160px;
  height: 26px;
`;

export const Search = styled.input`
  border: none;
  border-radius: 2px;
  outline: none;
  width: 100%;
  padding: 10px;
  text-align: left;
  cursor: pointer;
  position: static;
  height: 100%;
  background: #e6f0e4;
`;

export const CategoryOne = styled.div`
  grid-area: Cat-1;
  display: flex;
  background: #fff;
  border-radius: 4px;
  width: 240px;
  height: 65px;
`;

export const RightSection = styled.div`
  display: flex;
`;
export const LeftSection = styled.div`
  display: flex;
  justify-content: space-between;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
`;

export const CategoryTwo = styled.div`
  grid-area: Cat-2;
  display: flex;
  background: #fff;
  border-radius: 4px;
  width: 240px;
  height: 65px;
`;

export const CategoryThree = styled.div`
  grid-area: Cat-3;
  display: flex;
  background: #fff;
  border-radius: 4px;
  width: 240px;
  height: 65px;
`;

export const CategoryFour = styled.div`
  grid-area: Cat-4;
  display: flex;
  background: #fff;
  border-radius: 4px;
  width: 240px;
  height: 65px;
`;

export const CategoryFive = styled.div`
  grid-area: Chart-1;
  height: 300px;
  background: #fff;
  border-radius: 4px;
  width: 500px;
  margin-top: -100px;
`;

export const CategorySix = styled.div`
  grid-area: Chart-2;
  border-radius: 4px;
  height: 300px;
  background: #fff;
  width: 500px;
  margin-top: -100px;
`;

export const ChartHeading = styled.h1`
  font-size: 20px;
  color: #3a2d2d;
  margin: 12px;
`;

export const MiniLeft = styled.div`
  cursor: pointer;
`;

export const MiniRight = styled.div`
  font-size: 11px;
  margin-top: 12px;
  cursor: pointer;
`;

export const LeftTextOne = styled.div`
  font-size: 20px;
  font-weight: 600;
`;

export const LeftTextTwo = styled.div`
  font-size: 10px;
  font-weight: 600;
  font-style: italic;
  font-family: cursive;
`;

export const BreadCrumb = styled.span`
  color: #1c9181;
  font-weight: 600;
`;
