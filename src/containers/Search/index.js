import React, { useState } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { Link, useParams, useHistory } from 'react-router-dom'
import { Container, Row, ItemContainer } from './styles'
import { ALL_ITEMS } from './graphql'


const Search = () => {
    
    const history = useHistory()
    const { id } = useParams()
    const[item, setItem] = useState()
    const { data, loading, error } = useQuery(ALL_ITEMS)
    
    if (error) {
        throw new Error('query failed')
    }

    // const [addItem, error, loading] = useMutation(ADD_ITEM, {
    //     variables: {
    //       input: {
    //         firstName: 'Nick',
    //         lastName: 'Castillo',
    //         age: 18,
    //         email: 'nicasmar@gmail.com',
    //       },
    //     },
    //   })

    return (
        <>
            <Container>
                <h1>Search results for: { id }</h1>
                <Row>
                    <input placeholder='Search items' value={item} onChange={e => setItem(e.target.value)} />
                    <button onClick={() => history.push(`/search/${item}`)}>Search</button>
                </Row>
                <h5>Refine search with tags!</h5>
            </Container>
            <ItemContainer>
                {loading ? 'loading...' : data.allItems.map(item => (
                    <div>
                        <img src={item.imgUrl}/>
                        <p>name: {item.name}</p>
                        <p>desc: {item.description}</p>
                        <p>price: {item.price}</p>
                        <p>stock: {item.stock}</p>
                        <button >Add to Cart</button>
                    </div>
                ))}
            </ItemContainer>
        </>
    )}


export default Search
