import React, { useState } from 'react';
import {
  FaqContainer,
  Heading,
  QuestionsContainer,
  QuestionsList,
  QuestionItem,
  Question,
  Icon,
  AnswerText,
} from './faq.styled';
import { FAQ } from '../../content';
import arrowDown from '../../lp-images/arrow-down.png';
import arrowRight from '../../lp-images/right-arrow.png';

type FAQ = {
  question: string;
  answer: string;
};

export const Faq: React.FC = () => {
  const [activeQuestion, setActiveQuestion] = useState<string | null>(null);

  const toggleAnswer = (question: string) => {
    setActiveQuestion((prev) => (prev === question ? null : question));
  };

  return (
    <FaqContainer id="faq">
      <Heading>Frequently Asked Questions</Heading>
      <QuestionsContainer>
        <QuestionsList>
          {FAQ.map((item, i) => (
            <QuestionItem key={i}>
              <Question onClick={() => toggleAnswer(item.question)}>
                <span>{item.question}</span>
                <Icon
                  src={
                    activeQuestion === item.question ? arrowDown : arrowRight
                  }
                  alt="toogle-icon"
                />
              </Question>
              {activeQuestion === item.question && (
                <AnswerText>{item.answer}</AnswerText>
              )}
            </QuestionItem>
          ))}
        </QuestionsList>
      </QuestionsContainer>
    </FaqContainer>
  );
};
