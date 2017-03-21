const styled = require('styled-components').default;

export const Section = styled.section`
  padding: 60px;
  background-color: #f5f5f5;
  min-height: calc(100vh - 50px);
`;

export const Heading = styled.h1`
  text-align: center;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vh;
  justify-content: center;
`;

export const Input = styled.input`
  padding: 15px;
  margin: 5px;
  font-size: 1rem;
`;
