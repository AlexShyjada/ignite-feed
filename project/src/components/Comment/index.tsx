import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import { Modal } from "../Modal";
import { StyledComment } from "./styles";

export function Comment() {
  const [isLiked, setIsLiked] = useState(false);
  const [isModalDeleteCommentOpen, setIsModalDeleteCommenteOpen] =
    useState(false);

  return (
    <>
      {isModalDeleteCommentOpen ? (
        <Modal
          isModalDeleteCommentOpen={isModalDeleteCommentOpen}
          setIsModalDeleteCommenteOpen={setIsModalDeleteCommenteOpen}
        />
      ) : (
        ""
      )}
      <StyledComment>
        <img
          className="avatar"
          src="https://avatars.githubusercontent.com/u/71133582?v=4"
          alt="User Profile"
        />

        <div className="commentBox">
          <div className="commentContent">
            <header>
              <div className="userInfo">
                <strong>Alexandre Shyjada (você)</strong>
                <time>Cerca de 2h</time>
              </div>

              <button
                title="Deletar comentário"
                className="deleteButton"
                onClick={() =>
                  setIsModalDeleteCommenteOpen(!isModalDeleteCommentOpen)
                }
              >
                <Trash className="deleteIcon" size={24} />
              </button>
            </header>

            <div className="commentMessenge">
              <p>Muito bom Devon, parabéns!! 👏👏</p>
            </div>
          </div>

          <footer>
            <button
              onClick={() => setIsLiked(!isLiked)}
              className={isLiked ? "liked" : ""}
            >
              <ThumbsUp size={20} weight={isLiked ? "fill" : "bold"} />
              Aplaudir • 03
            </button>
          </footer>
        </div>
      </StyledComment>
    </>
  );
}
