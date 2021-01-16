import React from 'react';
import Image from 'next/image';

import * as S from './styled';

function SideBar() {
  return (
    <S.SideBarWrapper>
      <S.SideBarTitleWrapper>
        <S.SideBarTitle>LC Verissimo</S.SideBarTitle>
        <S.SideBarSubTitle>Photographer</S.SideBarSubTitle>
      </S.SideBarTitleWrapper>
      <S.SideBarNavigationWrapper>
        <S.SideBarNavigationItem>Photos by region</S.SideBarNavigationItem>
        <S.SideBarNavigationItem>Gear</S.SideBarNavigationItem>
      </S.SideBarNavigationWrapper>
      <S.SideBarSocialIconsWrapper>
        <S.FiveIcon size={36} />
        <S.EmailIcon size={36} />
        <S.WikiIconWrapper>
          <Image src='/wikiaves.svg' width={42} height={42} alt="logo wikiaves" />
        </S.WikiIconWrapper>
      </S.SideBarSocialIconsWrapper>
    </S.SideBarWrapper>
  );
}

export default SideBar;
