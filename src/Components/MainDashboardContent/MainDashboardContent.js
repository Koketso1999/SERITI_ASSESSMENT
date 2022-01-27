import React from 'react';
import { CategoriesObjects } from '../../DummyData';
import Header from '../Header/Header';

const MainDashboardContent = () => {
  return (<>
  
  <MainDashboard>
     <TopSection>
      <Header />
     </TopSection>

     <MiniHeader>

     </MiniHeader>

    <CategoriesContainer>

        {
            CategoriesObjects.map(({category, icon, number})=>
            (
                <GridContainer key={category}>
                    <GridItem>
                        <Icon>
                            {icon}
                        </Icon>
                        <CategoryLabel>
                            {category}
                        </CategoryLabel>
                        <CategoryNumber>
                            {number}
                        </CategoryNumber>
                    </GridItem>
                </GridContainer>
            )
            
            )
        }


    </CategoriesContainer>
  </MainDashboard>
  
  
  </>);
};

export default MainDashboardContent;
