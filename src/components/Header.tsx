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
          priority
        />
      </div>
      <div className="relative z-10 flex h-full w-full items-center justify-center gap-10">
        <div className="flex h-full max-h-60 w-full max-w-60 items-center justify-center">
          <Image
            src="/svg/cine-list-logo.svg"
            alt="Cine list logo"
            width={150}
            height={150}
            // style={{ width: "auto", height: "auto" }}
            className="h-full w-full p-1"
            priority
          />
        </div>
        <div className="flex items-center justify-center">
          <h1 className="text-start text-base font-semibold lg:text-2xl">
            O seu catálogo <br /> de filmes e séries <br /> favorito!
          </h1>
        </div>
      </div>
    </header>
  );
}
