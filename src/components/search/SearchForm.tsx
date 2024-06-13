"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { PiX } from "react-icons/pi";

export default function SearchForm({ query }: Readonly<{ query?: string }>) {
  const router = useRouter();
  const [search, setSearch] = useState(query || "");

  useEffect(() => {
    const handler = setTimeout(() => {
      router.replace(`?q=${search}`);
    }, 500);

    return () => clearTimeout(handler);
  }, [search, router]);

  const clearSearch = () => {
    setSearch("");
    router.replace("?q=");
  };

  return (
    <div className="my-global item relative col-end-1 flex w-full justify-center">
      <input
        type="text"
        name="q"
        className="rounded-full border border-transparent border-b-zinc-700 bg-zinc-800 p-4 text-2xl focus:border focus:border-teal-500 focus:outline-none"
        placeholder="Buscar..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        required
        autoFocus
      />
      {search && (
        <button
          type="button"
          className="absolute right-[31rem] top-1/2 -translate-y-1/2 transform"
          onClick={clearSearch}
        >
          <PiX className="text-2xl text-zinc-500 transition-colors hover:text-orange-500" />
        </button>
      )}
    </div>
  );
}
