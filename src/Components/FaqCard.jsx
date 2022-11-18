import React from 'react';
import styled from 'styled-components';
import ExchangeIcon from '../assets/convertIcon.svg';

const FaqCard = ({ data }) => {
  return (
    <Container>
      <img src={ExchangeIcon} alt='ExchangeIcon' />
      <Question>{data.quest}</Question>
      <Answer>{data.answer}</Answer>
    </Container>
  );
};

const Container = styled.div`
  diaplay: flex;
  flex-direction: col;
  background: #f8fafc;
  justify-content: center;
  align-items: flex-start;
  padding: 16px 8px;
`;
const Question = styled.h3`
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #0f172a;
  margin: 12px 0px;
`;
const Answer = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #555962;
`;

export default FaqCard;
