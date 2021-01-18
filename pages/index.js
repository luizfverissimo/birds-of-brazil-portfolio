import Head from 'next/head';

import BirdCard from '../components/BirdCard';
import SideBar from '../components/SideBar';

import * as S from '../styles/homeStyled'

export default function Home() {
  return (
    <>
      <Head>
        <title>LC Verissimo | Bird Photographer Portfolio</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <SideBar/>
      <S.contentWrapper>
        <S.Title>Birds <br/> of Brazil</S.Title>
        <BirdCard name="arapaçu-beija-flor" species="Campylorhamphus trochilirostris (Lichtenstein, 1820)" state="MS"/>
        <S.BackgroundImageWrapper>
          <img src="/assets/arepacu-bg.png" style={{objectFit: "cover", width: '100%'}} alt="Arapaçu-beija-flor Background Image"/>
        </S.BackgroundImageWrapper>
      </S.contentWrapper>
    </>
  );
}
