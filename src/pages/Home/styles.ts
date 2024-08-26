import styled from "styled-components";

export const MainContainer = styled.main`
  max-width: 800px;
  margin: 0 auto;
  padding: 6rem 2rem 2rem 2rem;
  text-align: center;
  color: #333;
  background-color: #f4f4f4;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #2c3e50;
`;

export const Description = styled.p`
  font-size: 1.25rem;
  margin-bottom: 30px;
  line-height: 1.6;
`;

export const Features = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const FeatureTitle = styled.h2`
  font-size: 1.75rem;
  margin-bottom: 10px;
  color: #2c3e50;
`;

export const FeatureItem = styled.p`
  font-size: 1.15rem;
  margin-bottom: 10px;
  background-color: #f9f9f9;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  flex-direction: column;

  strong {
    font-weight: bold;
    color: #2980b9;
  }
`;
