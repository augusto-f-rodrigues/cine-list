import Header from "@/components/Header";
import MediaCarousel from "@/components/MediaCarousel";
import { getTrending } from "@/services/api";

export default async function Home() {
  const trendingMovie = await getTrending("movie");
  const trendingTv = await getTrending("tv");

  return (
    <main>
      <Header />
      <div className="my-global px-global space-y-5">
        <MediaCarousel title="Filmes em Alta" items={trendingMovie.results} />
        <MediaCarousel title="TV Shows em Alta" items={trendingTv.results} />
      </div>
    </main>
  );
}
