import React, { useState } from 'react';
import Head from 'next/head';

import BirdCard from '../../components/BirdCard';
import SideBar from '../../components/SideBar';
import BirdListItem from '../../components/BirdListItem';
import BirdDetailsModal from '../../components/BirdDetailsModal';

import * as S from '../../styles/birdsByRegionStyled';

function BirdsByRegion({ birdsList }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [birdInfoModal, setBirdInfoModal] = useState({});

  const openDetailsModal = (birdInfo) => {
    setBirdInfoModal(birdInfo);
    setIsModalOpen(true);
    return;
  };

  const closeDetailsModal = () => {
    setIsModalOpen(false);
  }

  return (
    <>
      <Head>
        <title>LC Verissimo | Bird Photographer Portfolio</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {isModalOpen && (
        <BirdDetailsModal
          name={birdInfoModal.title}
          img={birdInfoModal.img}
          species={birdInfoModal.species}
          date={birdInfoModal.date}
          city={birdInfoModal.city}
          state={birdInfoModal.state}
          region={birdInfoModal.region}
          onClickCloseModal={() => closeDetailsModal()}
        />
      )}
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
              onClickOpenDetailsModal={() => openDetailsModal(bird.attributes)}
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

  return {
    props: {
      birdsList
    }
  };
}

export default BirdsByRegion;
