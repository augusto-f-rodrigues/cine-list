import { getSearch } from "@/services/api";
import MediaCard from "./MediaCard";
import Link from "next/link";

export default async function SearchResults({
  query,
  page = "1",
}: Readonly<{
  query: string;
  page?: string;
}>) {
  const data = await getSearch(query, page);

  return (
    <>
      {query && data.results.length === 0 && (
        <p className="px-global text-2xl">No results found</p>
      )}

      {query && data.results.length > 0 && (
        <>
          <h1 className="px-global my-global text-2xl text-orange-500">
            Mostrando resultados para &quot;{query}&quot;
          </h1>

          <div className="px-global grid grid-cols-[repeat(auto-fill,minmax(10rem,1fr))] gap-2 lg:grid-cols-[repeat(auto-fill,minmax(15rem,1fr))]">
            {data.results.map(
              (el) =>
                el.media_type !== "person" && (
                  <MediaCard key={el.id} media={el as Media} />
                ),
            )}
          </div>
          <div className="mt-6 flex items-center justify-center">
            <Link
              href={{
                query: { q: query, page: parseInt(page) - 1 },
              }}
              className={`button-secondary ${
                page === "1" && "pointer-events-none text-neutral-700"
              }`}
              aria-disabled={page === "1"}
            >
              Anterior
            </Link>
            <span className="text-light p-3 px-5 text-sm text-neutral-500">
              {page} of {data.total_pages > 500 ? "500+" : data.total_pages}
            </span>
            <Link
              href={{
                query: { q: query, page: parseInt(page) + 1 },
              }}
              className={`button-secondary ${
                (page === "500" || parseInt(page) === data.total_pages) &&
                "pointer-events-none text-neutral-700"
              }`}
              aria-disabled={
                page === "500" || parseInt(page) === data.total_pages
              }
            >
              Próxima
            </Link>
          </div>
        </>
      )}
    </>
  );
}
