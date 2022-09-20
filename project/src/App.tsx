import styled from "styled-components";
import { Header, Post, Sidebar } from "./components";
import "./styles/global.css";

const Wrapper = styled.div`
  padding: 0 1rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  max-width: 70rem;
  margin: 2rem auto 9.25rem auto;

  @media (max-width: 720px) {
    flex-direction: column;
    margin-top: -4.5rem;
  }
`;

function App() {
  const Posts = [
    {
      id: 1,
      author: {
        avatarURL: 'https://avatars.githubusercontent.com/u/71133582?v=4',
        name: "Alexandre Shyjada",
        role: "Product Designer",
      },
      content: [
        {
          id: 1,
          type: "paragrath",
          content: "Fala galeraa 👋",
        },
        {
          id: 2,
          type: "paragrath",
          content:
            "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
        },
        {
          id: 3,
          type: "link",
          content: "https://alexshyjada.com",
        },
      ],
      publishedAt: new Date("2022-06-13 15:00:00"),
    },
    {
      id: 2,
      author: {
        avatarURL: 'https://avatars.githubusercontent.com/u/71133582?v=4',
        name: "Alexandre Shyjada",
        role: "Product Designer",
      },
      content: [
        {
          id: 1,
          type: "paragrath",
          content: "Fala galeraa 👋",
        },
        {
          id: 2,
          type: "paragrath",
          content:
            "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
        },
        {
          id: 3,
          type: "link",
          content: "https://alexshyjada.com",
        },
      ],
      publishedAt: new Date("2022-06-13 15:00:00"),
    },
  ];

  return (
    <div className="App">
      <Header />
      <Wrapper>
        <Sidebar />
        <main>
          {Posts.map((post) => {
            return (
              <Post
                id={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </Wrapper>
    </div>
  );
}

export default App;
