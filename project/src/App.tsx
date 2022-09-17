import styled from "styled-components";
import { Header, Post, Sidebar } from "./components";
import "./styles/global.css";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  max-width: 70rem;
  margin: 2rem auto 9.25rem auto;
`;

function App() {
  return (
    <div className="App">
      <Header />
      <Wrapper>
        <Sidebar />
        <main>
          <Post />
        </main>
      </Wrapper>
    </div>
  );
}

export default App;
