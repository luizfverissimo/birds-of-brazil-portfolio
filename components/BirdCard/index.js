import React from 'react'

import * as S from './styled'

function BirdCard({name, species, state}) {
  return (
    <S.cardWrapper>
      <S.cardState>{state}</S.cardState>
      <S.cardTitle>{name}</S.cardTitle>
      <S.cardSpecies>{species}</S.cardSpecies>
    </S.cardWrapper>
  )
}

export default BirdCard
