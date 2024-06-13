import { formatContent } from "@/lib/utils";
import { PiQuestion } from "react-icons/pi";
import Image from "next/image";
import { getPerson } from "@/services/api";
import Link from "next/link";

export default async function PersonDetails({
  params,
}: Readonly<{
  params: { id: string };
}>) {
  const person = await getPerson(params.id);

  return (
    <>
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
      <main className="my-global px-global flex h-full w-full flex-col items-center justify-center">
        <div className="px-global flex items-start">
          <div className="mr-12 hidden aspect-[2/3] max-w-[350px] flex-shrink-0 lg:block">
            {person.profile_path ? (
              <Image
                className="h-full w-full object-cover"
                src={`https://image.tmdb.org/t/p/w500${person.profile_path}`}
                width={500}
                height={750}
                alt=""
                unoptimized
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-zinc-800">
                <PiQuestion className="text-4xl text-zinc-500" />
              </div>
            )}
          </div>
          <div>
            <h2 className="mb-4 text-2xl">{person.name}</h2>
            {person.biography && (
              <div
                className="mb-8 max-w-3xl space-y-4"
                dangerouslySetInnerHTML={{
                  __html: formatContent(person.biography),
                }}
              />
            )}
          </div>
        </div>
        <div className="z-10">
          <Link href="/">
            <p className="mt-10 rounded bg-teal-500 px-4 py-2 text-white shadow transition hover:bg-teal-600">
              Voltar para a Página Inicial
            </p>
          </Link>
        </div>
      </main>
    </>
  );
}
