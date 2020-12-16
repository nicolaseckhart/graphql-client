import { Place } from '../graphql/generated/graphql'
import React from 'react'

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
