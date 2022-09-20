import styled from "styled-components";

export const StyledComment = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 1rem;

  .avatar {
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 0.5rem;
  }

  .commentBox {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .commentContent {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      border-radius: 0.5rem;
      padding: 1rem 1rem 1.5rem 1rem;
      background: var(--gray-700);
      header {
        display: flex;
        justify-content: space-between;

        .userInfo {
          width: 100%;
          display: flex;
          flex-direction: column;

          strong {
            font-weight: 700;
            font-size: 0.875rem;
            line-height: 160%;
            color: var(--gray-300);
          }

          time {
            font-weight: 400;
            font-size: 0.75rem;
            line-height: 160%;
            color: var(--gray-500);
          }
        }

        button {
          color: var(--gray-500);
        }
      }
    }

    footer {
      button {
        display: flex;
        align-items: center;
        gap: 0.25rem;
        
        font-weight: 700;
        font-size: 0.875rem;
        line-height: 1rem;
        color: var(--gray-500);
        cursor: pointer;

        &.liked {
          color: var(--green);
        }
      }
    }
  }
`;
