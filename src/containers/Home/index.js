import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { PageContainer, Container } from './styles'
import Search from './components/Search'
import SearchResults from './components/SearchResults'

const Home = () => {
  const history = useHistory()
  const [url, setUrl] = useState('')
  const [results, setResults] = useState([])

  // if (!localStorage.getItem('token')) {
  //   history.push('/login')
  // }

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`https://cors-anywhere.herokuapp.com/${url}`)
      const data = await res.json()
      setResults(data.results)
    }
    fetchData()
  }, [url])

  return (
    <>
      <PageContainer>
        <Container>
          <Search setUrl={setUrl} />
          <SearchResults results={results} />
        </Container>
      </PageContainer>
    </>
  )
}

export default Home
