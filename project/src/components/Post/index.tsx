import { StyledPost } from "./styles";
import { Comment } from "../Comment";

interface IPostProps {
  id: number;
  author: {
    avatarURL: string;
    name: string;
    role: string;
  };
  content: {
    id: number;
    type: string;
    content: string;
  }[];
  publishedAt: Date;
}

export function Post(props: IPostProps) {
  const { author, content, publishedAt } = props;

  const publishedDateFormatted = new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "long",
    hour: "2-digit",
    minute: "2-digit",
  }).format(publishedAt);

  return (
    <StyledPost>
      <header>
        <div className="userContainer">
          <figure>
            <img src={author.avatarURL} alt={`Avatar de ${author.name}`} />
          </figure>
          <div className="nameAndPosition">
            <span className="name">{author.name}</span>
            <span className="position">{author.role}</span>
          </div>
        </div>
        <time className="postTime" dateTime="">
          Públicado em {publishedDateFormatted}
        </time>
      </header>

      <div className="content">
        {content.map((postContent) => {
          return postContent.type === "paragrath" ? (
            <p>{postContent.content}</p>
          ) : (
            <a href={postContent.content}>{postContent.content}</a>
          );
        })}
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
