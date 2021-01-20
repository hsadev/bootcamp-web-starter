import React, { useState } from 'react'
import { Link, useParams, useHistory } from 'react-router-dom'
import { Container, Row, Items } from './styles'
import item from '../Home/index'


const Search = () => {
    
    const history = useHistory()
    const { id } = useParams()
    const[item, setItem] = useState()

    return (
        <Container>
            <h1>Search results for: { id }</h1>
            <Row>
                <input placeholder='Search items' value={item} onChange={e => setItem(e.target.value)} />
                <button onClick={() => history.push(`/search/${item}`)}>Search</button>
            </Row>
            <h5>Refine search with tags!</h5>
        </Container>
    )}


export default Search
