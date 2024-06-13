import Image from "next/image";
import Link from "next/link";
import { PiQuestion } from "react-icons/pi";

export default function PersonCard({ person }: { person: Person }) {
  return (
    <Link href={`/person/detail/${person.id}`} className="relative block">
      <div className="aspect-[2/3]">
        {person.profile_path ? (
          <Image
            className="h-full w-full bg-zinc-800 object-cover p-1"
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
      <div className="mt-2">
        <h3 className="truncate" title={person.name}>
          {person.name}
        </h3>
        <p className="truncate text-sm text-white/60" title={person.character}>
          {person.character}
        </p>
      </div>
    </Link>
  );
}
