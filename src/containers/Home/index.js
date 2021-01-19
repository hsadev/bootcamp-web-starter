import React from 'react'
import { PageContainer, Container } from './styles'
import SearchBar from './components/SearchBar'
import SearchResults from './components/SearchResults'

const Home = () => (
  <>
    <PageContainer>
      <Container>
        <SearchBar />
        <SearchResults />
      </Container>
    </PageContainer>
  </>
)

export default Home
