import MediaOverview from "@/components/MediaOverview";
import { getMedia } from "@/services/api";
import Image from "next/image";
import Link from "next/link";

export default async function Detail({
  params,
}: Readonly<{
  params: { type: MediaType; id: string };
}>) {
  const media = await getMedia(params.type, params.id);
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
        <MediaOverview media={media} />
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
