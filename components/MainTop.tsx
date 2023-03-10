import styled from "styled-components";
import React from "react";
import Link from "next/link";

const MainTop = () => {
  return (
    <Header>
      <Logo>
        <Link href="/">FullDive</Link>
      </Logo>
      <Search>
        <SearchBar placeholder="검색어를 입력해주세요" />
        <RightBar>
          <div>
            <img src="/images/more.svg" />
            <img src="/images/notification.svg" />
            <img src="/images/ranking.svg" />
          </div>
          <Link href="/login">
            <LoginButton>로그인</LoginButton>
          </Link>
        </RightBar>
      </Search>
    </Header>
  );
};

const Header = styled.header`
  height: 100px;
  background-color: #181820;
  display: flex;
  color: #ffffff;
  align-items: center;
`;

const Logo = styled.div`
  min-width: 250px;
  padding-left: 40px;
  font-size: 1.5rem;
  /* background: url("/images/logo.svg") no-repeat 15% 50%; */
`;

const Search = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const SearchBar = styled.input`
  background: url("/images/search.svg") no-repeat 20px 50% #21212b;
  width: 360px;
  border-radius: 100px;
  border: none;
  color: #ffffff;
  font-size: 0.9rem;
  font-weight: 400;
  height: 48px;
  display: flex;
  align-items: center;
  padding: 0 55px;
`;

const RightBar = styled.div`
  padding-right: 30px;
  display: flex;
  align-items: center;
  > div {
    > img {
      margin-right: 20px;
    }
  }
`;

const LoginButton = styled.button`
  width: 5rem;
  background: #202eae;
  border-radius: 100px;
  font-size: 1rem;
  margin-left: 10px;
  padding: 10px;
`;

export default MainTop;
