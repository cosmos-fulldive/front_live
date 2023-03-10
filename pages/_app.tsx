import type { AppProps } from "next/app";
import React from "react";
import Head from "next/head";
import styled from "styled-components";
import { GlobalStyles } from "components/styles/GlobalStyles";
import MainTop from "components/MainTop";
import MainLeft from "components/MainLeft";
import { RecoilRoot } from "recoil";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <title>FullDive</title>
      </Head>
      <RecoilRoot>
        <MainTop />
        <Wrap>
          <MainLeft />
          <Component {...pageProps} />
        </Wrap>
        <GlobalStyles />
      </RecoilRoot>
    </>
  );
};

const Wrap = styled.div`
  display: flex;
  min-width: 100%;
`;

export default App;
