import styled from "styled-components";
import { Header, Post } from "./components";
import "./styles/global.css";

const StyledApp = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  .wrapper {
    max-width: 70rem;
    margin: 2rem auto;
    padding: 0 1rem;
    display: grid;
    grid-template-columns: 256px 1fr;
    gap: 2rem;
    align-items: flex-start;

    aside {
      overflow: hidden;
      border-radius: 0.5rem;
      background: var(--gray-800);

      .userContainer {
        margin-top: -30px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;

        figure {
          display: flex;
          justify-content: center;
          align-items: center;
          height: min-content;
          width: min-content;
          padding: 4px;
          border-radius: 0.5rem;
          border: solid 2px var(--green);
          background: var(--gray-800);

          img {
            border-radius: 0.25rem;
          }
        }

        .userInformation {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;

          .userName {
            font-weight: 700;
            font-size: 16px;
            line-height: 25.6px;
          }

          .userPosition {
            font-weight: 400;
            font-size: 14px;
            line-height: 160%;
            color: var(--gray-500);
          }
        }
      }

      .buttonContainer {
        margin-top: 24px;
        padding: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        max-height: max-content;
        border-top: solid 1px var(--gray-700);

        button {
          width: 100%;
          a {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.25rem;

            font-weight: 700;
            font-size: 16px;
            line-height: 19px;
            color: var(--green);

            padding: 1rem 0 1rem 0;
            border: solid 1px var(--green);
            border-radius: 0.5rem;
            cursor: pointer;
            transition: 0.2s;

            figure {
              height: 20px;
              width: 20px;
              background-image: url("/icons/edit-green.svg");
            }
            
            &:hover {
              background: var(--green);
              color: var(--gray-300);

              figure {
                height: 20px;
                width: 20px;
                background-image: url("/icons/edit-white.svg");
              }
            }
          }
        }
      }
    }
  }
`;

export default function App() {
  return (
    <StyledApp className="App">
      <Header />
      <div className="wrapper">
        <aside>
          <img src="/bg-aside.png" alt="Imagem de Capa" />
          <div className="userContainer">
            <figure>
              <img
                src="/users/user-profile.png"
                alt="Imagem de Avatar do Usuário"
              />
            </figure>

            <div className="userInformation">
              <span className="userName">Leslie Alexander</span>
              <span className="userPosition">UI Designer</span>
            </div>
          </div>
          <div className="buttonContainer">
            <button>
              <a href="#">
                <figure></figure>
                Editar seu perfil
              </a>
            </button>
          </div>
        </aside>
        <main>
          <Post />
        </main>
      </div>
    </StyledApp>
  );
}