import React from 'react';
import Link from 'next/link';

import * as S from './styled';

function SideBar() {
  return (
    <S.SideBarWrapper>
      <S.SideBarTitleWrapper>
        <Link href='/'>
          <a>
            <S.SideBarTitle>LC Verissimo</S.SideBarTitle>
          </a>
        </Link>
        <S.SideBarSubTitle>Photographer</S.SideBarSubTitle>
      </S.SideBarTitleWrapper>
      <S.SideBarNavigationWrapper>
        <Link href='/birds-by-region'>
          <a>
            <S.SideBarNavigationItem>Photos by region</S.SideBarNavigationItem>
          </a>
        </Link>
        <S.SideBarNavigationItem>Gear</S.SideBarNavigationItem>
      </S.SideBarNavigationWrapper>
      <S.SideBarSocialIconsWrapper>
        <S.FiveIcon size={36} />
        <S.EmailIcon size={36} />
        <S.WikiIconWrapper>
          <img
            src='/assets/wikiaves.svg'
            width={42}
            height={42}
            alt='logo wikiaves'
          />
        </S.WikiIconWrapper>
      </S.SideBarSocialIconsWrapper>
    </S.SideBarWrapper>
  );
}

export default SideBar;
