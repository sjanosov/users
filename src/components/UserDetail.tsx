import React from "react";
import styled from "@emotion/styled";
import { FadeIn } from "animate-css-styled-components";

interface Geo {
  lat: string;
  lng: string;
}

interface Address {
  street: string;
  suite: string | number;
  city: string;
  geo: Geo;
  zipcode: string;
}
interface Company {
  name: string | number;
  catchPhrase: string | number;
  bs: string | number;
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

const UserDetailSectionStyled = styled.div`
  margin: 20px auto;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 950px) and (min-width: 320px) {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
  }
`;

const H2Styled = styled.h2`
  font-size: 20px;
  line-height: 40px;
  color: #ff8870;

  @media only screen and (max-width: 500px) and (min-width: 451px) {
    font-size: 16px;
    padding-bottom: 10px;
    padding-top: 0;
    line-height: 15px;
  }

  @media only screen and (max-width: 450px) and (min-width: 320px) {
    font-size: 12px;
    padding-bottom: 10px;
    padding-top: 0;
    line-height: 15px;
  }
`;

const H3Styled = styled.h3`
  font-size: 20px;
  padding-left: 10px;
  line-height: 40px;
  color: #a9bcd9;
  font-weight: 450;

  @media only screen and (max-width: 500px) and (min-width: 451px) {
    font-size: 16px;
    padding-bottom: 10px;
    padding-top: 0;
    line-height: 15px;
  }
  @media only screen and (max-width: 450px) and (min-width: 320px) {
    font-size: 12px;
    padding-bottom: 10px;
    padding-left: 10px;
    padding-top: 0;
    line-height: 15px;
  }
`;

const UserDetailStyled = styled.div`
  flex-direction: row;
  display: flex;
  padding-left: 20px;

  @media only screen and (max-width: 500px) and (min-width: 451px) {
    padding-bottom: 15px;
  }
`;

const UserDetail: React.FC<{ user: User }> = ({ user }) => (
  <div>
    {user !== null ? (
      <FadeIn>
        <UserDetailSectionStyled>
          <UserDetailStyled>
            <H2Styled>Full name:</H2Styled>
            <H3Styled> {user.name}</H3Styled>
          </UserDetailStyled>
          <UserDetailStyled>
            <H2Styled>Username:</H2Styled>
            <H3Styled>{user.username}</H3Styled>
          </UserDetailStyled>
          <UserDetailStyled>
            <H2Styled>Email:</H2Styled> <H3Styled>{user.email}</H3Styled>
          </UserDetailStyled>
          <UserDetailStyled>
            <H2Styled>Street:</H2Styled>
            <H3Styled>{user.address.street}</H3Styled>
          </UserDetailStyled>
          <UserDetailStyled>
            <H2Styled>City:</H2Styled>
            <H3Styled>{user.address.city}</H3Styled>
          </UserDetailStyled>
          <UserDetailStyled>
            <H2Styled>Suite: </H2Styled>
            <H3Styled>{user.address.suite}</H3Styled>
          </UserDetailStyled>
          <UserDetailStyled>
            <H2Styled>Lat:</H2Styled>
            <H3Styled>{user.address.geo.lat}</H3Styled>
          </UserDetailStyled>
          <UserDetailStyled>
            <H2Styled>Lng:</H2Styled>
            <H3Styled>{user.address.geo.lng}</H3Styled>
          </UserDetailStyled>
          <UserDetailStyled>
            <H2Styled>Phone:</H2Styled>
            <H3Styled>{user.phone}</H3Styled>
          </UserDetailStyled>
          <UserDetailStyled>
            <H2Styled>Website:</H2Styled> <H3Styled>{user.website}</H3Styled>
          </UserDetailStyled>
          <UserDetailStyled>
            <H2Styled>Company:</H2Styled>
            <H3Styled>{user.company.name}</H3Styled>
          </UserDetailStyled>
          <UserDetailStyled>
            <H2Styled>Catch Phrase:</H2Styled>
            <H3Styled>{user.company.catchPhrase}</H3Styled>
          </UserDetailStyled>
          <UserDetailStyled>
            <H2Styled>Company bs:</H2Styled>
            <H3Styled>{user.company.bs}</H3Styled>
          </UserDetailStyled>
        </UserDetailSectionStyled>
      </FadeIn>
    ) : null}
  </div>
);

export default UserDetail;
