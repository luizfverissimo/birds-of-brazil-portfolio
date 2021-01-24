import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import InfiniteScroll from 'react-infinite-scroll-component';

import SideBar from '../../components/SideBar';
import BirdListItem from '../../components/BirdListItem';
import BirdDetailsModal from '../../components/BirdDetailsModal';

import * as S from '../../styles/birdsByRegionStyled';
import { Letsencrypt } from 'styled-icons/simple-icons';

function BirdsByRegion({ birdsList }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [birdInfoModal, setBirdInfoModal] = useState({});
  const [birdsListFiltered, setBirdsListFiltered] = useState([]);
  const [activeRegion, setActiveRegion] = useState('All');
  const [isOpenFilterList, setIsOpenFilterList] = useState(true);
  const [hasMore, setHasMore] = useState(true);

  const openDetailsModal = (birdInfo) => {
    setBirdInfoModal(birdInfo);
    setIsModalOpen(true);
    return;
  };

  const closeDetailsModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const limitedArray = limitArrayLength(birdsList);
    setBirdsListFiltered(limitedArray);

    if (window.innerWidth <= 768) {
      setIsOpenFilterList(false);
    }
  }, []);

  const filterBirdsList = (filter) => {
    if (filter === 'All') {
      const limitedArray = limitArrayLength(birdsList);
      setBirdsListFiltered(limitedArray);
      setActiveRegion(filter);
      setHasMore(true)
      return;
    }
    const birdsFiltered = birdsList.filter(
      (bird) => bird.attributes.region === filter
    );
    const limitedArray = limitArrayLength(birdsFiltered);
    setBirdsListFiltered(limitedArray);
    setActiveRegion(filter);
    if (limitedArray.length < 5) setHasMore(false)
    if (limitedArray.length >= 5) setHasMore(true)
    return;
  };

  const openFilterList = () => {
    setIsOpenFilterList(!isOpenFilterList);
  };

  const limitArrayLength = (array) => {
    let tempArray = [];
    const limit = 4;
    array.map((item, index) => {
      if (index <= limit) {
        tempArray.push(item);
        return;
      }
    });
    return tempArray;
  };

  const handleNextBirds = () => {
    console.log('next');
    const lastCursor = birdsListFiltered.length - 1;
    const limit = 5;
    const newEntries = lastCursor + limit;

    let birdsFiltered = []
    if(activeRegion === "All") {
      birdsFiltered = birdsList
    }
    if(activeRegion !== "All") {
      birdsFiltered = birdsList.filter(
        (bird) => bird.attributes.region === activeRegion
      );
    }

    let tempArray = [];
    birdsFiltered.map((item, index) => {
      if (index <= newEntries) {
        tempArray.push(item);
        return;
      }
    });
    setBirdsListFiltered(tempArray);
    console.log(tempArray)

    
    if (tempArray.length - 1 === newEntries) setHasMore(true)
    if (tempArray.length - 1 < newEntries) setHasMore(false)

    return;
  };

  return (
    <>
      <Head>
        <title>LC Verissimo | Bird Photographer Portfolio</title>
        <link rel='icon' href='/favicon.ico' />
        <meta
          name='description'
          content='LC Verissimo | Bird Photographer, Birds of Brazil - Birds by Region'
        />
        <meta name='robots' content='index, follow' />
        <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='twitter:card' value='summary'></meta>
        <meta property='og:title' content='LC Verissimo | Bird Photographer' />
        <meta property='og:type' content='article' />
        <meta
          property='og:url'
          content='https://lcverissimo.netlify.app/birds-by-region'
        />
        <meta
          property='og:description'
          content='LC Verissimo | Bird Photographer, Birds of Brazil - Birds by Region'
        />
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
        <S.FilterMobileButton onClick={() => openFilterList()}>
          <S.FilterIcon size={32} />
        </S.FilterMobileButton>

        {isOpenFilterList && (
          <S.RegionFilterWrapper>
            <S.RegionFilterItems
              active={activeRegion.match(/^All$/)}
              onClick={() => filterBirdsList('All')}
            >
              All
            </S.RegionFilterItems>
            <S.RegionFilterItems
              active={activeRegion.match(/^North$/)}
              onClick={() => filterBirdsList('North')}
            >
              North
            </S.RegionFilterItems>
            <S.RegionFilterItems
              active={activeRegion.match(/^Northeast$/)}
              onClick={() => filterBirdsList('Northeast')}
            >
              Northeast
            </S.RegionFilterItems>
            <S.RegionFilterItems
              active={activeRegion.match(/^Midwest$/)}
              onClick={() => filterBirdsList('Midwest')}
            >
              Midwest
            </S.RegionFilterItems>
            <S.RegionFilterItems
              active={activeRegion.match(/^Southeast$/)}
              onClick={() => filterBirdsList('Southeast')}
            >
              Southeast
            </S.RegionFilterItems>
            <S.RegionFilterItems
              active={activeRegion.match(/^South$/)}
              onClick={() => filterBirdsList('South')}
            >
              South
            </S.RegionFilterItems>
          </S.RegionFilterWrapper>
        )}

        <InfiniteScroll
          dataLength={birdsListFiltered.length}
          next={handleNextBirds}
          hasMore={hasMore}
          loader={
            <p style={{ textAlign: 'center', color: 'var(--white)' }}>
              Loading more photos ...
            </p>
          }
          endMessage={
            <p style={{ textAlign: 'center', color: 'var(--white)' }}>
              No more photos.
            </p>
          }
        >
          <S.BirdListItemWrapper>
            {birdsListFiltered.map((bird) => {
              return (
                <BirdListItem
                  key={bird.slug}
                  img={bird.attributes.img}
                  name={bird.attributes.title}
                  species={bird.attributes.species}
                  state={bird.attributes.state}
                  onClickOpenDetailsModal={() =>
                    openDetailsModal(bird.attributes)
                  }
                />
              );
            })}
          </S.BirdListItemWrapper>
        </InfiniteScroll>
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
