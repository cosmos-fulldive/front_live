import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRecoilState, useRecoilValue } from "recoil";
SwiperCore.use([Navigation, Pagination]);
import { getMainArtistData, getMainStageData } from "../states/main";

const images = [
  {
    imgUrl: "https://img.freepik.com/premium-vector/k-pop-music-concept-illustrated_23-2148633832.jpg",
  },
  {
    imgUrl: "https://assets.vogue.com/photos/62ec0f8872de9093ac1bd94a/3:2/w_3000,h_2000,c_limit/1143890227",
  },
  {
    imgUrl: "https://img.freepik.com/free-vector/k-pop-boy-group-concept_52683-43989.jpg?w=2000",
  },
];

const artistData = [
  {
    id: 1,
    imgUrl: "/images/artist.png",
    profile: "/images/sample.png",
    name: "아이유",
    category: "발라드, 팝송",
    link: "/artist",
  },
  {
    id: 2,
    imgUrl: "/images/artist.png",
    profile: "/images/sample.png",
    name: "아이유",
    category: "발라드, 팝송",
    link: "/artist",
  },
  {
    id: 3,
    imgUrl: "/images/artist.png",
    profile: "/images/sample.png",
    name: "아이유",
    category: "발라드, 팝송",
    link: "/artist",
  },
  {
    id: 4,
    imgUrl: "/images/artist.png",
    profile: "/images/sample.png",
    name: "아이유",
    category: "발라드, 팝송",
    link: "/artist",
  },
  {
    id: 5,
    imgUrl: "/images/artist.png",
    profile: "/images/sample.png",
    name: "아이유",
    category: "발라드, 팝송",
    link: "/artist",
  },
  {
    id: 6,
    imgUrl: "/images/artist.png",
    profile: "/images/sample.png",
    name: "아이유",
    category: "발라드, 팝송",
    link: "/artist",
  },
];

const liveData = [
  {
    stageId: 1,
    imgUrl: "/images/sample.png",
    title: "공연제목",
    artist: "공연 참여 아티스트",
    ticket: "1장",
    link: "/artist",
    ticketImg: "/images/ticket.svg",
  },
  {
    stageId: 2,
    imgUrl: "/images/sample.png",
    title: "공연제목",
    artist: "공연 참여 아티스트",
    ticket: "1장",
    link: "/artist",
    ticketImg: "/images/ticket.svg",
  },
  {
    stageId: 3,
    imgUrl: "/images/sample.png",
    title: "공연제목",
    artist: "공연 참여 아티스트",
    ticket: "1장",
    link: "/artist",
    ticketImg: "/images/ticket.svg",
  },
  {
    stageId: 4,
    imgUrl: "/images/sample.png",
    title: "공연제목",
    artist: "공연 참여 아티스트",
    ticket: "1장",
    link: "/artist",
    ticketImg: "/images/ticket.svg",
  },
];

const Main = () => {
  // const stageData = useRecoilValue(getMainStageData);
  // const newData = useRecoilValue(getMainArtistData);

  // console.log(stageData);
  // console.log(newData);

  return (
    <Container>
      <React.Suspense fallback={<div>Loading...</div>}>
        <SwiperLayout>
          <Swiper
            className="banner-swiper"
            slidesPerView={1}
            pagination={{ clickable: true }}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <img src={image.imgUrl} alt="banner" width="100%" height={500} />
              </SwiperSlide>
            ))}
          </Swiper>
        </SwiperLayout>
        <Section>
          <a href="/artist">
            <Title>새로운 아티스트</Title>
          </a>
          <SwiperLayout>
            <Swiper className="artist-swiper" slidesPerView={6} spaceBetween={24} loop={true}>
              {artistData.map((artist, id) => (
                <SwiperSlide key={id} className="swiper-slide">
                  <Figure href="/artist" artist="artist">
                    <ImageArea src={artist.imgUrl} alt="artist" />
                  </Figure>
                  <ContentBox>
                    <img src={artist.imgUrl} />
                    <div>
                      <p>{artist.name}</p>
                      <span>{artist.category}</span>
                    </div>
                  </ContentBox>
                </SwiperSlide>
              ))}
            </Swiper>
          </SwiperLayout>
          <StageContainer>
            <a href="/stage">
              <Title>라이브 스테이지</Title>
            </a>
            <SwiperLayout>
              <Swiper className="liveStage-swiper" slidesPerView={4} spaceBetween={20} loop={true}>
                {liveData &&
                  liveData.map((data: any, id: any) => (
                    <SwiperSlide key={id}>
                      <Figure href={data.stageStreamKey} artist="none">
                        <Live>
                          <Dot />
                          <p> Live</p>
                        </Live>
                        <ImageArea src={data.stageThumbnailImage} alt="live_stage" />
                      </Figure>
                      <StageContentBox>
                        <div>
                          <img src={data.stageThumbnailImage} />
                          <div>
                            <p>{data.stageTitle}</p>
                            <span>{data.artistId}</span>
                          </div>
                        </div>
                        <Ticket>
                          <img src={data.ticketImg} className="ticket" />
                          {data.ticket}
                        </Ticket>
                      </StageContentBox>
                    </SwiperSlide>
                  ))}
              </Swiper>
            </SwiperLayout>
          </StageContainer>
          <StageContainer>
            <a href="/stage">
              <Title>다가오는 스테이지</Title>
            </a>
            <SwiperLayout>
              <Swiper className="upcomingStage-swiper" slidesPerView={4} spaceBetween={20} loop={true}>
                {liveData.map((data, id) => (
                  <SwiperSlide key={id}>
                    <Figure href={data.link} artist="none">
                      <ImageArea src={data.imgUrl} alt="upcoming_stage" />
                    </Figure>
                    <StageContentBox>
                      <div>
                        <img src={data.imgUrl} />
                        <div>
                          <p>{data.title}</p>
                          <span>{data.artist}</span>
                        </div>
                      </div>
                      <Ticket>
                        <img src={data.ticketImg} className="ticket" />
                        {data.ticket}
                      </Ticket>
                    </StageContentBox>
                  </SwiperSlide>
                ))}
              </Swiper>
            </SwiperLayout>
          </StageContainer>
          <StageContainer>
            <a href="/stage">
              <Title>지난 스테이지</Title>
            </a>
            <SwiperLayout>
              <Swiper className="goneStage-swiper" slidesPerView={4} spaceBetween={20} loop={true}>
                {liveData.map((data, id) => (
                  <SwiperSlide key={id}>
                    <Figure href={data.link} artist="none">
                      <ImageArea src={data.imgUrl} alt="gone_stage" />
                    </Figure>
                    <StageContentBox>
                      <div>
                        <img src={data.imgUrl} />
                        <div>
                          <p>{data.title}</p>
                          <span>{data.artist}</span>
                        </div>
                      </div>
                      <Ticket>
                        <img src={data.ticketImg} className="ticket" />
                        {data.ticket}
                      </Ticket>
                    </StageContentBox>
                  </SwiperSlide>
                ))}
              </Swiper>
            </SwiperLayout>
          </StageContainer>
        </Section>
      </React.Suspense>
    </Container>
  );
};

const Dot = styled.div`
  position: absolute;
  background: #ffffff;
  border-radius: 50%;
  height: 5px;
  position: absolute;
  width: 5px;
  top: 40%;
  left: 10%;
`;

const Live = styled.div`
  display: inline-block;
  position: absolute;
  top: 12px;
  left: 12px;
  width: 60px;
  height: 24px;
  background-color: #ff2f2f;
  border-radius: 100px;
  z-index: 3;
  > p {
    padding: 5% 0 0 30%;
    font-size: 1rem;
    font-weight: 600;
    line-height: 19px;
  }
`;

const Ticket = styled.div`
  font-size: 1rem;
`;

const ContentBox = styled.div`
  display: flex;
  margin-top: 15px;
  > img {
    max-width: 40px;
    height: 40px;
    border-radius: 20px;
  }
  > div {
    margin-left: 10px;
    > p {
      font-size: 1rem;
    }
    > span {
      font-size: 0.875rem;
      color: #a0a0a0;
    }
  }
`;

const StageContentBox = styled.div`
  display: flex;
  margin-top: 15px;
  justify-content: space-between;
  > div {
    display: flex;
    > img {
      max-width: 40px;
      height: 40px;
      border-radius: 20px;
      &.ticket {
        max-width: 18px;
        height: 19px;
        margin-right: 10px;
      }
    }
    > div {
      margin-left: 10px;
      > p {
        font-size: 1rem;
      }
      > span {
        font-size: 0.875rem;
        color: #a0a0a0;
      }
    }
  }
`;

const ImageArea = styled.img`
  width: 100%;
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  border-radius: 12px;
`;

const Figure = styled.a<{ artist: string }>`
  display: block;
  position: relative;
  padding-bottom: 58%;
  width: 100%;
  ${(props) => props.artist === "artist" && `padding-bottom: 90%`}
`;

const StageContainer = styled.section`
  margin-top: 30px;
`;

const Title = styled.div`
  display: inline-block;
  padding-right: 30px;
  margin-bottom: 30px;
  background: url("/images/blue_arrow.svg") no-repeat right;
  font-size: 1.25rem;
  font-weight: 600;
`;

const Section = styled.section`
  margin: 30px;
`;

const Container = styled.main`
  min-width: 80%;

  background: #1e1e1e;
  color: #ffffff;
`;

const SwiperLayout = styled.div`
  /* .banner-swiper {
    height: 500px;
  } */
`;

export default Main;
