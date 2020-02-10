import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import styled from "@emotion/styled";
import Comments from "./Comments";
import Loader from "react-loader-spinner";
import { SlideInRight } from "animate-css-styled-components";

interface User {
  id: number;
  name: string;
}
interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}
const UserPostContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;

  @media only screen and (max-width: 950px) and (min-width: 320px) {
    text-align: center;
    margin: 20px auto;
  }
`;

const UserPostsTitleStyled = styled.h3`
  color: #023084;
  font-weight: 450;
  font-size: 35px;
  padding-bottom: 30px;

  @media only screen and (max-width: 450px) and (min-width: 320px) {
    font-size: 20px;
  }
`;
const PostStyled = styled.div`
  color: whitesmoke;
  font-size: 20p;
  text-transform: uppercase;
  border-radius: 26.5px;
  background-image: linear-gradient(80deg, #ff5b6c, #ffae6d);
  box-shadow: 0 3px 6px 0 rgba(6, 38, 97, 0.1);
  padding: 20px;
  margin: 20px 0;
  cursor: pointer;
  &:hover {
    background-image: linear-gradient(
        180deg,
        rgba(212, 77, 77, 0.5),
        rgba(212, 77, 77, 0.5)
      ),
      linear-gradient(80deg, #ff5b6c, #ffae6d);
  }

  @media only screen and (max-width: 450px) and (min-width: 320px) {
    font-size: 12px;
  }
`;

const LoaderStyled = styled.div`
  position: absolute;
  left: 50%;
  top: 40%;
`;

const SpanStyled = styled.span`
  font-weight: bold;
`;

const UserPosts: React.FC<{ user: User }> = ({ user }) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [clickedPostId, setClickedPostId] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);

    axios
      .get(`https://jsonplaceholder.typicode.com/posts/`)
      .then(res => {
        setPosts(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <UserPostContainer>
      {loading ? (
        <LoaderStyled>
          <Loader type="TailSpin" color="#023084" height={80} width={80} />
        </LoaderStyled>
      ) : user !== null ? (
        <div>
          <UserPostsTitleStyled>
            See <SpanStyled>{user.name}user posts</SpanStyled>
          </UserPostsTitleStyled>
          {posts
            .filter(post => post.userId === user.id)
            .map(post => (
              <div key={post.id}>
                <SlideInRight>
                  <PostStyled
                    onClick={() =>
                      setClickedPostId(
                        clickedPostId === post.id ? null : post.id
                      )
                    }
                  >
                    {post.title}
                  </PostStyled>
                </SlideInRight>

                {clickedPostId === post.id ? (
                  <Comments postId={post.id} />
                ) : null}
              </div>
            ))}
        </div>
      ) : (
        <div>
          <UserPostsTitleStyled>
            See <SpanStyled>user posts</SpanStyled>
          </UserPostsTitleStyled>
          {posts.map(post => (
            <div key={post.id}>
              <SlideInRight>
                <PostStyled
                  onClick={() =>
                    setClickedPostId(clickedPostId === post.id ? null : post.id)
                  }
                >
                  {post.title}
                </PostStyled>
              </SlideInRight>

              {clickedPostId === post.id ? <Comments postId={post.id} /> : null}
            </div>
          ))}
        </div>
      )}
    </UserPostContainer>
  );
};
export default UserPosts;
