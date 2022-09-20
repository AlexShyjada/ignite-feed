import styled from "styled-components";

export const StyledModal = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100vh;
  inset: 0 0 0 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background: rgba(0, 0, 0, 0.75);

  .contentContainer {
    width: 100%;
    max-width: 27rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.5rem 2rem 2rem;
    gap: 1.5rem;

    border-radius: 0.5rem;
    background: var(--gray-700);

    h1 {
      font-weight: 700;
      font-size: 1.5rem;
      line-height: 140%;
      text-align: center;
      color: #e1e1e6;
    }

    span {
      font-weight: 400;
      font-size: 1rem;
      line-height: 162.5%;
      text-align: center;
      color: #c4c4cc;
    }

    .buttonContainer {
      display: flex;
      flex-direction: row;
      gap: 1rem;
      button {
        display: flex;
        align-items: center;
        text-align: center;

        padding: 0.75rem 2rem;
        font-weight: 700;
        font-size: 0.875rem;
        line-height: 1.5rem;

        border-radius: 0.25rem;
        cursor: pointer;
        transition: 0.2s;
        
        &.cancel {
          color: var(--gray-300);
          &:hover {
            background-color: var(--gray-800);
          }
        }
        
        &.execute {
          color: var(--red);
          background-color: var(--gray-800);
          
          &:hover {
            color: var(--white);
            background-color: var(--red);
          }
        }
      }
    }
  }
`;
