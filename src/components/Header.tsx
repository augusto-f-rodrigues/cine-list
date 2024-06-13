import Image from "next/image";

export default function Header() {
  return (
    <header className="relative flex h-[500px] items-center justify-center p-4">
      <div className="absolute inset-0 z-0">
        <Image
          src="/svg/cine-list-bg.svg"
          alt="Cine list background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div className="relative z-10 flex gap-10">
        <Image
          src="/svg/cine-list-logo.svg"
          alt="Cine list logo"
          width={100}
          height={100}
          style={{ width: "auto", height: "200px" }}
        />
        <div className="flex items-center justify-center">
          <h1 className="text-start text-2xl font-semibold">
            O seu catálogo <br /> de filmes e séries <br /> favorito!
          </h1>
        </div>
      </div>
    </header>
  );
}
