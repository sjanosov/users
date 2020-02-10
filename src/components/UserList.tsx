import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import styled from "@emotion/styled";

interface User {
  id: number;
  name: string;
}

const UserListMainContainer = styled.div`
  width: 40%;
`;
const UserListContainer = styled.div`
  color: red;
  width: 65%;
  display: flex;

  @media only screen and (max-width: 950px) and (min-width: 320px) {
    display: flex;
    justify-content: space-between;
  }

  @media only screen and (max-width: 450px) and (min-width: 320px) {
    font-size: 12px;
  }
`;
const UserStyled = styled.div`
  font-size: 18px;
  color: #2c5a9f;
  padding: 5px 20px;
  text-transform: uppercase;
  text-shadow: 3px 3px 3px #696773;
  cursor: pointer;

  &: hover {
    font-size: 20px;
  }

  @media only screen and (max-width: 450px) and (min-width: 320px) {
    font-size: 15px;
    padding-top: 0;
    padding-bottom: 15px;
    padding-right: 0;
  }
`;

const UserList: React.FC<{ iUser: User; setUser: (input: User) => void }> = ({
  iUser,
  setUser
}) => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://jsonplaceholder.typicode.com/users/`)
      .then(res => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <UserListMainContainer>
      {loading ? null : (
        <ul>
          {users.map(user => (
            <UserListContainer key={user.id}>
              <UserStyled
                onClick={() => {
                  setUser(
                    iUser === null ? user : iUser.id === user.id ? null : user
                  );
                }}
              >
                {user.name}
              </UserStyled>
            </UserListContainer>
          ))}
        </ul>
      )}
    </UserListMainContainer>
  );
};

export default UserList;
