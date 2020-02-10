import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import styled from "@emotion/styled";
import { FadeInDown } from "animate-css-styled-components";

interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: any;
}

const CommentContentStyled = styled.div`
  padding: 20px 0;
`;

const CommentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 2vh 0;
`;
const CommentNameStyled = styled.div`
  font-size: 2vh;
  font-weight: bold;
  text-transform: uppercase;
`;

const CommentEmailStyled = styled.div`
  color: #696773;
  font-size: 2vh;

  @media only screen and (max-width: 450px) and (min-width: 320px) {
    font-size: 1.5vh;
  }
`;

const CommentBodyStyled = styled.div`
  text-align: justify;

  @media only screen and (max-width: 450px) and (min-width: 320px) {
    font-size: 12px;
  }
`;

const Comments: React.FC<{ postId: number }> = ({ postId }) => {
  const [comments, setComments] = useState<Comment[]>([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments/")
      .then(res => {
        setComments(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      {comments
        .filter(comment => comment.postId === postId)
        .map(comment => (
          <div key={comment.id}>
            <FadeInDown duration="0.6s" delay=".3s">
              <CommentContentStyled>
                <CommentContainer>
                  <CommentNameStyled>{comment.name}</CommentNameStyled>

                  <CommentEmailStyled>{comment.email}</CommentEmailStyled>
                </CommentContainer>
                <CommentBodyStyled>{comment.body}</CommentBodyStyled>
              </CommentContentStyled>
            </FadeInDown>
          </div>
        ))}
    </div>
  );
};
export default Comments;
