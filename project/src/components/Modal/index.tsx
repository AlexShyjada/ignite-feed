import { StyledModal } from "./styles";

interface IModalProps {
  isModalDeleteCommentOpen: boolean;
  setIsModalDeleteCommenteOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Modal(props: IModalProps) {

  function deleteComment() {
    setIsModalDeleteCommenteOpen(!isModalDeleteCommentOpen)
  }

  const { isModalDeleteCommentOpen, setIsModalDeleteCommenteOpen } = props;
  return (
    <StyledModal>
      <div className="contentContainer">
        <h1>Excluir comentário</h1>
        <span>Você tem certeza que gostaria de excluir este comentário?</span>
        <div className="buttonContainer">
          <button
            onClick={() =>
              setIsModalDeleteCommenteOpen(!isModalDeleteCommentOpen)
            }
            className="cancel"
          >
            Cancelar
          </button>
          <button  onClick={() => deleteComment()} className="execute">Sim, excluir</button>
        </div>
      </div>
    </StyledModal>
  );
}
