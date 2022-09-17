import { StyledPost } from "./styles";
import { Comment } from "../Comment"

export function Post() {
  return (
    <StyledPost>
      <header>
        <div className="userContainer">
          <figure>
            <img
              src="https://avatars.githubusercontent.com/u/71133582?v=4"
              alt="Usuário"
            />
          </figure>
          <div className="nameAndPosition">
            <span className="name">Alexandre Shyjada</span>
            <span className="position">Product Designer</span>
          </div>
        </div>
        <time className="postTime" dateTime="">
          Públicado há 1h
        </time>
      </header>

      <div className="content">
        <p>Fala galeraa 👋</p>

        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>

        <p>
          <a href="">👉 jane.design/doctorcare</a>
        </p>

        <p>
          <a href="">#novoprojeto</a>
          <a href="">#nlw</a>
          <a href="">#rocketseat</a>
        </p>
      </div>

      <form className="addComment">
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Escreva um comentário..." />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className="commentList">
        <Comment />
        <Comment />
        <Comment />
      </div>
    </StyledPost>
  );
}
