import React, { useState } from 'react';
import Image from 'next/image';

import * as S from './styled';
import BirdCard from '../BirdCard';

function BirdListItem({img, name, species, state}) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <S.BirdListItemWrapper
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <Image
        src={img}
        width={500}
        height={400}
        objectFit='cover'
      />
      <S.BirdCardWrapper>
        {isHovering && (
          <BirdCard
            name={name}
            species={species}
            state={state}
          />
        )}
      </S.BirdCardWrapper>
    </S.BirdListItemWrapper>
  );
}

export default BirdListItem;
