import React from 'react'
import { Place } from '../graphql/documents/place.graphql'

interface Props {
  place: Place
}

const PlaceComponent: React.FC<Props> = ({ place }: Props) => {
  return (
    <>
      <p>id: {place.id}</p>
      <p>title: {place.title}</p>
      <p>address: {place.addressLines.join(', ')}</p>
    </>
  )
}

export default PlaceComponent
