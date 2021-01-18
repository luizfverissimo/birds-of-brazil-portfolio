import React from 'react';

import * as S from './styled';

function BirdDetailsModal({
  name,
  img,
  species,
  date,
  city,
  state,
  region,
  onClickCloseModal
}) {
  return (
    <S.ModalBackground onClick={onClickCloseModal}>
      <S.ModalImgWrapper>
        <img src={img.substr(7)} layout='fill' style={{objectFit: 'contain'}} alt={name} />
      </S.ModalImgWrapper>
      <S.ModalCard>
        <S.ModalTitle>{name}</S.ModalTitle>
        <p>{species}</p>
        <p>Date: {date}</p>
        <S.ModalCity>
          City: {city} - {state}
        </S.ModalCity>
        <S.ModalRegion>{region}</S.ModalRegion>
      </S.ModalCard>
    </S.ModalBackground>
  );
}

export default BirdDetailsModal;
