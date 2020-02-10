import React from "react";
import "./App.css";
import { useState } from "react";
import styled from "@emotion/styled";
import UserDetail from "./components/UserDetail";
import UserList from "./components/UserList";
import UserPosts from "./components/UserPosts";

const App: React.FC<IAppProps> = () => {
  const [user, setUser] = useState(null);

  const Container = styled.div`
    margin: 50px 20px;
    display: flex;
    flex-direction: row;

    @media only screen and (max-width: 950px) and (min-width: 320px) {
      display: flex;
      flex-direction: column;
    }

    @media only screen and (max-width: 450px) and (min-width: 320px) {
      width: 100%;
      margin: 50px 10px;
    }
  `;

  const SidebarStyled = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    width: 35%;

    @media only screen and (max-width: 950px) and (min-width: 320px) {
      display: flex;
      flex-direction: row;
      width: 100%;
      font-size: 15px;
      margin-left: 0;
    }
  `;

  const MainContentStyled = styled.div`
    display: flex;
    flex-direction: column;

    @media only screen and (max-width: 950px) and (min-width: 320px) {
      display: flex;
      flex-direction: row;
      width: 100%;
    }
  `;

  return (
    <Container>
      <SidebarStyled>
        <UserList iUser={user} setUser={setUser} />
        <UserDetail user={user} />
      </SidebarStyled>
      <MainContentStyled>
        <UserPosts user={user} />
      </MainContentStyled>
    </Container>
  );
};

export default App;

interface IAppProps {}
