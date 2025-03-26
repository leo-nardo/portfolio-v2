"use client";

import Image from "next/image";
import { useState } from "react";

export function Cabecalho() {
  return (
    <header className="flex w-min">
      <div className="hero">
        <HeroImage />
      </div>
      <div className="info">
        <h1 className="titulo">Leonardo Vinicius</h1>
        <h3 className="texto">
          Leonardo Vincius Leonardo VinciusLeonardo Vincius Leonardo Vincius
          Leonardo Vincius
        </h3>
      </div>
    </header>
  );
}

const HeroImage = () => {
  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);

  return (
    <div
      className="flex items-center flex-shrink mr-6 cursos-pointer"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {isHovering ? (
        <Image
          src="/leonardo_2.svg"
          alt="Globe icon"
          width={300}
          height={300}
        />
      ) : (
        <Image
          src="/leonardo_1.svg"
          alt="Globe icon"
          width={300}
          height={300}
        />
      )}
    </div>
  );
};
