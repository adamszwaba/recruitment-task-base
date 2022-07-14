import styled from 'styled-components';
import reactLogo from './assets/react.svg';
import GlobalStyles from './globalStyles';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <div>
          <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
            <img src="/vite.svg" className="logo" alt="Vite logo" />
          </a>
          <a href="https://reactjs.org" target="_blank" rel="noreferrer">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
      </Wrapper>
    </>
  );
}

export default App;
