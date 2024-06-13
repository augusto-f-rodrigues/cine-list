import Header from "@/components/Header";
import MediaCarousel from "@/components/media/MediaCarousel";
import SearchForm from "@/components/search/SearchForm";
import SearchResults from "@/components/search/SearchResults";

import { getTrending } from "@/services/api";

export default async function Home({
  searchParams,
}: Readonly<{
  searchParams: { q: string; page: string };
}>) {
  const trendingMovie = await getTrending("movie");
  const trendingTv = await getTrending("tv");

  return (
    <main>
      <Header />
      <SearchForm query={searchParams.q} />
      {searchParams.q ? (
        <SearchResults query={searchParams.q} page={searchParams.page} />
      ) : (
        <div className="my-global px-global space-y-5">
          <MediaCarousel title="Filmes em Alta" items={trendingMovie.results} />
          <MediaCarousel title="TV Shows em Alta" items={trendingTv.results} />
        </div>
      )}
    </main>
  );
}
