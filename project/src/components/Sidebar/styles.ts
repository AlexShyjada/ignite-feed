import styled from "styled-components";

export const StyledSidebar = styled.aside`
  width: 100%;
  max-width: 256px;
  overflow: hidden;
  border-radius: 0.5rem;
  background: var(--gray-800);
  height: fit-content;

  .cover {
    object-fit: cover;
    height: 72px;
    width: 100%;
  }

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
      border: solid 2px var(--green-light);
      background: var(--gray-800);

      img {
        width: 3rem;
        height: 3rem;
        object-fit: cover;
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
        line-height: 1.5rem;
      }

      .userPosition {
        font-weight: 400;
        font-size: 14px;
        line-height: 1.35rem;
        color: var(--gray-500);
      }
    }
  }

  .buttonContainer {
    margin-top: 24px;
    padding: 1.5rem 2rem 2rem 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    max-height: max-content;
    border-top: solid 1px var(--gray-700);

    .editProfile {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.25rem;
      
      font-weight: 700;
      font-size: 16px;
      line-height: 1.25rem;
      color: var(--green-light);
      
      padding: 1rem 0 1rem 0;
      border: solid 1px var(--green-light);
      border-radius: 0.5rem;
      background: transparent;

      cursor: pointer;
      transition: 0.2s;

      &:hover {
        background: var(--green-light);
        color: var(--gray-300);
      }
    }
  }
`;
