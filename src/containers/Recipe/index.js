import React from 'react'
import Ingredients from './components/Ingredients'
import Steps from './components/Steps'
import {
  Title,
  Button,
  ButtonPanel,
  LeftPanel,
  IngredientsContainer,
  StepsContainer,
  PageContainer,
} from './styles'

const Recipe = () => {
  return (
    <>
      <PageContainer>
        <LeftPanel>
          <Title>Recipe Title Here</Title>
          <ButtonPanel>
            <Button>Favorite</Button>
            <Button>Tried</Button>
          </ButtonPanel>
          <IngredientsContainer>
            <Ingredients />
          </IngredientsContainer>
        </LeftPanel>
        <StepsContainer>
          <Steps />
        </StepsContainer>
      </PageContainer>
    </>
  )
}

export default Recipe
