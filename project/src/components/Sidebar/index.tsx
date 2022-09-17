import { StyledSidebar } from "./styles";

import { PencilLine } from "phosphor-react";

export function Sidebar() {
  return (
    <StyledSidebar>
      <img className="cover" src="/bg-aside.png" alt="Imagem de Capa" />

      <div className="userContainer">
        <figure>
          <img
            src="https://avatars.githubusercontent.com/u/71133582?v=4"
            alt="Imagem de Avatar do Usuário"
          />
        </figure>

        <div className="userInformation">
          <span className="userName">Alexandre Shyjada</span>
          <span className="userPosition">Product Designer</span>
        </div>
      </div>

      <div className="buttonContainer">
        <a className="editProfile" href="#">
          <PencilLine size={20} weight="bold" />
          Editar seu perfil
        </a>
      </div>
    </StyledSidebar>
  );
}
