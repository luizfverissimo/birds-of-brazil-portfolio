import Head from 'next/head';

import BirdCard from '../components/BirdCard';
import SideBar from '../components/SideBar';

import * as S from '../styles/homeStyled';

export default function Home() {
  return (
    <>
      <Head>
        <title>LC Verissimo | Bird Photographer Portfolio</title>
        <link rel='icon' href='/favicon.ico' />
        <meta
          name='description'
          content='LC Verissimo | Bird Photographer, Birds of Brazil'
        />
        <meta name='robots' content='index, follow' />
        <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='twitter:card' value='summary'></meta>
        <meta property='og:title' content='LC Verissimo | Bird Photographer' />
        <meta property='og:type' content='article' />
        <meta property='og:url' content='https://lcverissimo.netlify.app' />
        <meta
          property='og:description'
          content='LC Verissimo | Bird Photographer, Birds of Brazil'
        />
      </Head>

      <SideBar />
      <S.contentWrapper>
        <S.Title>
          Birds <br /> of Brazil
        </S.Title>
        <BirdCard
          name='arapaçu-beija-flor'
          species='Campylorhamphus trochilirostris (Lichtenstein, 1820)'
          state='MS'
        />
        <S.BackgroundImageWrapper>
          <S.BackgroundImage
            src='/assets/arepacu-bg.png'
            alt='Arapaçu-beija-flor Background Image'
          />
        </S.BackgroundImageWrapper>
      </S.contentWrapper>
    </>
  );
}
