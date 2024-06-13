import Image from "next/image";
import Link from "next/link";
import { PiQuestion } from "react-icons/pi";
import Rating from "../Rating";

export default function MediaCard({ media }: Readonly<{ media: Media }>) {
  const type = media.name ? "tv" : "movie";

  return (
    <Link href={`/${type}/detail/${media.id}`} className="relative block">
      <div className="aspect-[2/3]">
        {media.poster_path ? (
          <Image
            className="h-full w-full bg-zinc-800/60 object-cover p-1"
            src={`https://image.tmdb.org/t/p/w500${media.poster_path}`}
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
      <div className="mt-2">
        <h3 className="truncate">{media.name || media.title}</h3>
        <div className="mt-2 flex items-center space-x-2">
          <Rating average={media.vote_average} />
          <span className="text-xs font-medium text-white/60">
            {media.vote_average.toFixed(1)}
          </span>
        </div>
      </div>
    </Link>
  );
}
