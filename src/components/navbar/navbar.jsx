import Image from "next/image";

export function NavBar() {
  return (
    <div className="flex w-full justify-between h-auto bg-[#252525]">
      <div className="flex p-4">
        <Image src="/logo.svg" alt="logo" width={30} height={30} />
      </div>
      <div>
        <li className="flex p-2">
          <ul className="flex p-4">
            <span className="text-white"> Principal</span>
          </ul>
          <ul className="flex p-4">
            <span className="text-white">Sobre mim</span>
          </ul>
          <ul className="flex p-4">
            <span className="text-white">Habilidades</span>
          </ul>
          <ul className="flex p-4">
            <span className="text-white">Projetos</span>
          </ul>
          <ul className="flex p-4">
            <span className="text-white">Contatos</span>
          </ul>
        </li>
      </div>
    </div>
  );
}
