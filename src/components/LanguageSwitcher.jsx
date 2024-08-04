import React from 'react';
import styled from 'styled-components';
import { useLanguage } from '../store/LanguageContext';
import { translations } from '../data/translations';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 2px solid blue;
  border-radius: 10px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
  background-color: lightgray;
  border-bottom: 2px solid blue;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  padding: 10px;
  border: 2px solid blue;
  border-radius: 5px;
  background-color: white;
  cursor: pointer;

  &:hover {
    background-color: lightblue;
  }
`;

const TextContainer = styled.div`
  margin-top: 20px;
  width: 100%;
`;

const TextBlock = styled.p`
  padding: 10px;
  border: 2px solid blue;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const LightButton = styled.button`
  padding: 10px;
  border: 2px solid red;
  border-radius: 5px;
  background-color: white;
  cursor: pointer;

  &:hover {
    background-color: lightcoral;
  }
`;

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <Container>
      <Header>
        <div>HEADER</div>
        <ButtonGroup>
          <Button onClick={() => setLanguage('ru')}>ru</Button>
          <Button onClick={() => setLanguage('en')}>en</Button>
          <Button onClick={() => setLanguage('ky')}>kg</Button>
        </ButtonGroup>
        <LightButton>Light</LightButton>
      </Header>
      <TextContainer>
        <TextBlock>{translations[language].bigText}</TextBlock>
        <TextBlock>{translations[language].phrase1}</TextBlock>
        <TextBlock>{translations[language].phrase2}</TextBlock>
        <TextBlock>{translations[language].phrase3}</TextBlock>
        <TextBlock>{translations[language].phrase4}</TextBlock>
      </TextContainer>
    </Container>
  );
};

export default LanguageSwitcher;
