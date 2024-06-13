"use client";

import { useRouter } from "next/navigation";

export default function SearchForm({ query }: Readonly<{ query?: string }>) {
  const router = useRouter();

  return (
    <div className="my-global item col-end-1 flex w-full justify-center">
      <input
        type="text"
        name="q"
        className="rounded-full border border-transparent border-b-zinc-700 bg-zinc-800 p-4 text-2xl focus:border focus:border-blue-500 focus:outline-none"
        placeholder="Buscar..."
        defaultValue={query}
        onChange={(e) =>
          setTimeout(() => router.replace(`?q=${e.target.value}`), 500)
        }
        required
        autoFocus
      />
    </div>
  );
}
