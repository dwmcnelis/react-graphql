import React from 'react'
import { useQuery } from 'graphql-hooks'

const KPIS_QUERY = `query ($programId: ID!, $processId: ID) {
  authenticated
    program(id: $programId) {
    id
    kpis(processId: $processId) {
      referenceType
      referenceId
      name
      label
      type
      value
    }
  }
}`

function Component() {
  const { loading, error, data } = useQuery(KPIS_QUERY, {
    variables: {
      programId: '119cbfb1-41b6-408c-b76b-103eefba0a1a',
      processId: '60f072f6-525d-47ef-30ce-e2bed6029746'
    }
  })

  if (loading) return 'Loading...'
  if (error) return 'Something Bad Happened'

  return (
    <ul>
      {data.program.kpis.map(({ id, label, value }, index) => (
        <li key={index}>{label}: {value}</li>
      ))}
    </ul>
  )
}

export default Component