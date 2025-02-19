import Image from "next/image";

export function NavBar() {
  return (
    <div className="w-full h-auto">
      <div className="logo-container">
        <Image src="/logo.svg" alt="logo" width={30} height={30} />
      </div>
      <div>
        <li className="links">
          <ul className="item-link ">
            <span className="link"> Principal</span>
          </ul>
          <ul className="item-link">
            <span className="link">Sobre mim</span>
          </ul>
          <ul className="item-link">
            <span className="link">Habilidades</span>
          </ul>
          <ul className="item-link">
            <span className="link">Projetos</span>
          </ul>
          <ul className="item-link">
            <span className="link">Contatos</span>
          </ul>
        </li>
      </div>
    </div>
  );
}
