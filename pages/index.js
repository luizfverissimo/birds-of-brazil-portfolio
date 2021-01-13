import Head from 'next/head';
import styled from 'styled-components'
import SideBar from '../components/SideBar';

const Title = styled.h1`
  color: var(--yellow);
  font-size: 32px;
`


export default function Home() {
  return (
    <div>
      <Head>
        <title>LC Verissimo | Bird Photographer Portfolio</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <SideBar/>
      <Title>Olá Mundão!</Title>


    </div>
  );
}
