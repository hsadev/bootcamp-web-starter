import React from 'react'
import Ingredients from './components/Ingredients'
import Steps from './components/Steps'
import {
  Title,
  IngredientsContainer,
  StepsContainer,
  PageContainer,
} from './styles'

const Recipe = () => {
  return (
    <>
      <PageContainer>
        <Title>Recipe Title Here</Title>
        <IngredientsContainer>
          <Ingredients />
        </IngredientsContainer>
        <StepsContainer>
          <Steps />
        </StepsContainer>
      </PageContainer>
    </>
  )
}

export default Recipe
