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
        <S.SideBarNavigationItem>About me</S.SideBarNavigationItem>
      </S.SideBarNavigationWrapper>
      <S.SideBarSocialIconsWrapper>
        <S.EmailIcon size={36} />
        <S.WikiIconWrapper>
          <a
            href='https://www.wikiaves.com.br/perfil_lcverissimo'
            target='_black'
            rel='noopener'
          >
            <img
              src='/assets/wikiaves.svg'
              width={42}
              height={42}
              alt='logo wikiaves'
            />
          </a>
        </S.WikiIconWrapper>
      </S.SideBarSocialIconsWrapper>
    </S.SideBarWrapper>
  );
}

export default SideBar;
