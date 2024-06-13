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
    <div className="my-global item relative col-end-1 flex w-full justify-center px-4">
      <input
        type="text"
        name="q"
        className="w-full max-w-96 rounded-full border border-transparent border-b-zinc-700 bg-zinc-800 p-4 text-base focus:border focus:border-teal-500 focus:outline-none"
        placeholder="Buscar..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        required
        autoFocus
      />
      {search && (
        <button
          type="button"
          className="mx-2 flex transform items-center justify-center rounded-full bg-orange-500 p-4 hover:bg-orange-400"
          onClick={clearSearch}
        >
          <PiX className="text-white-500 text-2xl" />
        </button>
      )}
    </div>
  );
}
