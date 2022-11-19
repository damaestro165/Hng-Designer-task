import React, { useState } from 'react';
import styled from 'styled-components';
import SearchIcon from '../assets/searchIcon.svg';
import FaqCard from '../Components/FaqCard';
import { faqData } from '../FaqData';
import Footer from '../Components/Footer';
import NavBar from '../Components/NavBar';

const Faq = () => {
  const [searchField, setSearchField] = useState('');

  const filteredFaq = faqData.filter((faq) => {
    return (
      faq.quest.toLowerCase().includes(searchField.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchField.toLowerCase())
    );
  });

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };
  return (
    <div>
      <NavBar />
      <Container>
        <TextWrapper>
          <BigText>Frequently Asked Questions</BigText>
          <Paragraph>Have any question? We are here to assist you.</Paragraph>
        </TextWrapper>
        <SearchWrapper>
          <Searchgroup>
            <img src={SearchIcon} alt='searchIcon' />
            <Search placeholder='Search FAQs' onChange={handleChange} />
            <StyledButton onClick={handleChange}>Search</StyledButton>
          </Searchgroup>
        </SearchWrapper>
      </Container>
      <FaqContainer>
        <FaqWrapper>
          {filteredFaq.map((faq, index) => (
            <FaqCard data={faq} key={index} />
          ))}
        </FaqWrapper>
        <Wrapper>
          <div>
            <Question>Still have questions?</Question>
            <Answer>
              Can’t find answer you’re looking for? Please chat our support
              team.
            </Answer>
          </div>
          <GetInTouch>Get in touch</GetInTouch>
        </Wrapper>
      </FaqContainer>
      <div>
        <Footer />
      </div>
    </div>
  );
};

const Container = styled.div`
  diaplay: flex;
  flex-direction: col;
  align-content: center
  justify-content: center;
  background: #BBCAF3;
  padding:1.5rem;
  height: 391px;
  
   @media only screen and (min-width: 768px) {
    padding: 5rem
  }
  

`;
const TextWrapper = styled.div`
  text-align: center;
  padding: 2rem 1.5rem;
`;

const BigText = styled.h1`
  font-style: normal;
  font-size: 32px;
  letter-spacing: -0.02em;
  color: #06102b;

  @media only screen and (min-width: 992px) {
    font-size: 48px;
  }
`;
const Paragraph = styled.p`
  margin-top: 10px;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  letter-spacing: -0.02em;

  @media only screen and (min-width: 992px) {
    font-weight: 34px;
  }
`;

const SearchWrapper = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  margin-top: 1.5rem;
  position: relative;

  @media only screen and (min-width: 768px) {
    margin-top: 2.5rem;
  }
`;

const Searchgroup = styled.div`
  width: 700px;
  position: relative;
  & img {
    position: absolute;
    z-index: 50;
    margin-left: 2rem;
    top: 1rem;
  }
  @media only screen and (min-width: 768px) {
    & img {
      position: absolute;
      z-index: 50;
      margin-left: 2rem;
      top: 1.7rem;
    }
  }
`;

const Search = styled.input.attrs({ type: 'text' })`
  border-radius: 16px;
  font-size: 16px;
  width: 100%;
  border: none;
  padding: 5px 5px 5px 3.5rem;
  height: 50px;
  z-index: 1;

  @media only screen and (min-width: 768px) {
    height: 70px;
  }
`;

const StyledButton = styled.button`
  border-radius: 5px;
  background: #0062ff;
  border: none;
  margin-left: -5rem;
  color: white;
  padding: 10px;

  @media only screen and (min-width: 768px) {
    padding: 20px;
    margin-left: -6rem;
  }
`;
const GetInTouch = styled.button`
  border-radius: 5px;
  padding: 8px;
  background: #0062ff;
  border: none;
  color: white;
  font-size: 10px;
  align-self: center;
  width: 48%;
  @media only screen and (min-width: 768px) {
    padding: 20px;
    width: auto;
    font-size: 16px;
  }
`;
const FaqContainer = styled.section`
  padding: 1rem;
  @media only screen and (min-width: 768px) {
    padding: 2.5rem;
  }

  @media only screen and (min-width: 992px) {
    padding: 5rem;
  }
`;
const FaqWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media only screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;
  }
`;
const Question = styled.h3`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #0f172a;
  margin: 12px 0px;

  @media only screen and (min-width: 768px) {
    font-size: 20px;
  }
`;
const Answer = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #555962;

  @media only screen and (min-width: 768px) {
    font-size: 12px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  background: #fdf0cb;
  border-radius: 16px;
  justify-content: space-between;
  align-content: center;
  padding: 1rem;
  margin-top: 5rem;
  @media only screen and (min-width: 768px) {
    padding: 1.5rem;
  }
`;

export default Faq;
