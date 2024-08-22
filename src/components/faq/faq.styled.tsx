import styled from 'styled-components';
import shape from '../../lp-images/shape.png';

export const FaqContainer = styled.div`
  width: inherit;
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url(${shape});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;

  @media (max-width: 768px) {
    background: none;
  }
`;

export const Heading = styled.h3`
  font-size: 30px;
  text-align: center;
  text-decoration: underline 5px #f9846f29;
  text-underline-offset: 6px;
  padding-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

export const QuestionsContainer = styled.div`
  margin: 0 auto;
  width: 80%;
  height: auto;
  display: flex;
  justify-content: center;
  align-content: center;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const QuestionsList = styled.ul`
  width: 100%;
  height: auto;
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-content: center;
  gap: 25px;
  padding-inline-start: 0px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    margin: 0;
    padding: 0;
  }
`;

export const QuestionItem = styled.li`
  padding: 15px;
  background-color: #fff;
  border-radius: 8px;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const Question = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const Icon = styled.img`
  width: 16px;
  height: 16px;
`;

export const AnswerText = styled.p`
  font-size: 14px;
  line-height: 25px;
  padding-top: 10px;
`;
