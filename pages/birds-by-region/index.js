import React from 'react';
import Head from 'next/head';

import BirdCard from '../../components/BirdCard';
import SideBar from '../../components/SideBar';
import BirdListItem from '../../components/BirdListItem';

import * as S from '../../styles/birdsByRegionStyled';

function BirdsByRegion({ birdsList }) {
  return (
    <>
      <Head>
        <title>LC Verissimo | Bird Photographer Portfolio</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <SideBar />
      <S.contentWrapper>
        {birdsList.map((bird) => {
          return (
            <BirdListItem
              key={bird.slug}
              img={bird.attributes.img}
              name={bird.attributes.title}
              species={bird.attributes.species}
              state={bird.attributes.state}
            />
          );
        })}
      </S.contentWrapper>
    </>
  );
}

const importBirdsList = async () => {
  // https://webpack.js.org/guides/dependency-management/#requirecontext
  const markdownFiles = require
    .context('../../content', false, /\.md$/)
    .keys()
    .map((relativePath) => relativePath.substring(2));

  return Promise.all(
    markdownFiles.map(async (path) => {
      const markdown = await import(`../../content/${path}`);
      return { ...markdown, slug: path.substring(0, path.length - 3) };
    })
  );
};

export async function getStaticProps() {
  const birdsList = await importBirdsList();
  console.log(birdsList);

  return {
    props: {
      birdsList
    }
  };
}

export default BirdsByRegion;
