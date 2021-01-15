import Head from 'next/head';

import BirdCard from '../components/BirdCard';
import SideBar from '../components/SideBar';

import * as S from '../styles/homeStyled'

export default function Home() {
  return (
    <div>
      <Head>
        <title>LC Verissimo | Bird Photographer Portfolio</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <SideBar/>
      <S.contentWrapper>
        <S.Title>Birds <br/> of Brazil</S.Title>
        <BirdCard/>
      </S.contentWrapper>


    </div>
  );
}
