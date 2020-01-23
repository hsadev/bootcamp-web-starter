import React, { useState } from 'react'
import { useMutation, useQuery } from '@apollo/react-hooks'
import { ADD_ENTRY, GET_ENTRIES } from './graphql'
// import the create entry mutation from './graphql'
// (?) import the use state variable

const AddEntries = () => {
  const { loading: getEntryLoading, error: getEntryError, data: entryData } = useQuery(GET_ENTRIES)
  const [entry, createEntry] = useState('')
  // eslint-disable-next-line no-lone-blocks
  { /* // call the mutation from graphql and use mutation to specify the input */ }
  const [addEntry, { error, loading }] = useMutation(ADD_ENTRY, {
    variables: { txtInput: entry },
    refetchQueries: () => [{ query: GET_ENTRIES }],
  })

  if (getEntryLoading) return 'Loading...'
  if (getEntryError) return `Error: ${getEntryError}`

  // eslint-disable-next-line no-lone-blocks
  { /* // whenever button is clicked the input that was written above is added to the entries */ }
  return (
    <div>
      <input value={entry} onChange={e => createEntry(e.target.value)} />
      {loading ? 'Loading...' : <button type="button" onClick={addEntry}>Add Entry</button>}
      {error && 'Error'}

      <div>
        {entryData.viewer.journalEntries.map(el => (
          <p key={el.id}>{`${el.text}`}</p>
        ))}
      </div>
    </div>
  )
}

export default AddEntries
