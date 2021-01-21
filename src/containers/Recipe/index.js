import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
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

const API_KEY = '5dc246545b634cc48af9fb7a2a5e609a'

const Recipe = () => {
  const { id } = useParams()
  const [ingredients, setIngredients] = useState([])
  const [steps, setSteps] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`)
        const data = await res.json()
        setIngredients(data.extendedIngredients)
        setSteps(data.analyzedInstructions[0].steps)
      } catch (error) {
        return <p>{error}</p>
      }
    }
    fetchData()
  }, [id])

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
            <Ingredients ingredients={ingredients} />
          </IngredientsContainer>
        </LeftPanel>
        <StepsContainer>
          <Steps steps={steps} />
        </StepsContainer>
      </PageContainer>
    </>
  )
}

export default Recipe
