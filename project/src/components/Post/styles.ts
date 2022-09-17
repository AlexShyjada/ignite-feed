import styled from "styled-components";

export const StyledPost = styled.article`
  width: 100%;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background: var(--gray-800);
  border-radius: 0.5rem;

  header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .userContainer {
      display: flex;
      align-items: center;
      gap: 1rem;
      figure {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 4px;
        border-radius: 0.5rem;
        border: solid 2px var(--green-light);
        img {
          width: 3rem;
          height: 3rem;
          object-fit: cover;
          border-radius: 0.25rem;
        }
      }

      .nameAndPosition {
        display: flex;
        flex-direction: column;
        .name {
          font-weight: 700;
          font-size: 16px;
          line-height: 1.55rem;
        }
        .position {
          font-weight: 400;
          font-size: 14px;
          line-height: 1.35rem;
          color: var(--gray-500);
        }
      }
    }

    .postTime {
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 1.35rem;
      color: var(--gray-500);
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    p {
      width: 100%;
      display: flex;
      align-items: baseline;
      line-height: 1.5rem;
      gap: 0.25rem;
      a {
        color: var(--green-light);
        font-weight: 700;
        transition: 0.2s;

        &:hover {
          filter: brightness(1.5);
        }
      }
    }
  }

  .addComment {
    border-top: solid 1px var(--gray-700);
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1.5rem 0 0 0;

    textarea {
      height: 6rem;
      width: 100%;
      padding: 1rem;
      border-radius: 0.5rem;
      border: solid 1px var(--gray-900);

      font-weight: 400;
      font-size: 16px;
      line-height: 1.35rem;
      color: var(--gray-400);

      transition: 0.2s;
      background: var(--gray-900);
      resize: none;

      &::placeholder {
        color: var(--gray-600);
      }
    }

    footer {
      margin-top: -1rem;
      visibility: hidden;
      max-height: 0;

      button {
        width: fit-content;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        border: solid 3px var(--green);

        font-weight: 700;
        font-size: 1rem;
        line-height: 1.25rem;
        color: var(--white);

        cursor: pointer;
        transition: background-color 0.2s;
        background: var(--green);

        &:hover {
          background: var(--green-light);
        }
      }
    }

    &:focus-within {
      footer {
        margin-top: 0;
        visibility: visible;
        max-height: none;
      }
    }
  }

  .commentList {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-top: 0.5rem;
  }
`;
