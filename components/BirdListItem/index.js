import React, { useState } from 'react';
import Image from 'next/image';

import * as S from './styled';
import BirdCard from '../BirdCard';

function BirdListItem({ img, name, species, state, onClickOpenDetailsModal }) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <S.BirdListItemWrapper
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onClick={onClickOpenDetailsModal}
    >
      <Image src={img.substr(7)} width={500} height={400} objectFit='cover' />
      <S.BirdCardWrapper>
        {isHovering && <BirdCard name={name} species={species} state={state} />}
      </S.BirdCardWrapper>
    </S.BirdListItemWrapper>
  );
}

export default BirdListItem;
