import {
  directors,
  fullDate,
  fullLang,
  numberWithCommas,
  runtime,
} from "@/lib/utils";
import Image from "next/image";
import { PiQuestion } from "react-icons/pi";

export default function MediaOverview({ media }: Readonly<{ media: Media }>) {
  const type = media.name ? "tv" : "movie";

  const details = [
    {
      title: "Primeira Exibição",
      value: media.first_air_date ? fullDate(media.first_air_date) : null,
      type: "tv",
    },
    {
      title: "Última Exibição",
      value: media.last_air_date ? fullDate(media.last_air_date) : null,
      type: "tv",
    },
    {
      title: "Duração",
      value: media.episode_run_time?.length
        ? runtime(media.episode_run_time[0])
        : null,
      type: "tv",
    },
    {
      title: "Lançamento",
      value: media.release_date ? fullDate(media.release_date) : null,
      type: "movie",
    },
    {
      title: "Temporadas",
      value: media.number_of_seasons,
      type: "tv",
    },
    {
      title: "Episódios",
      value: media.number_of_episodes,
      type: "tv",
    },
    {
      title: "Duração",
      value: media.runtime ? runtime(media.runtime) : null,
      type: "movie",
    },
    {
      title: "Diretor",
      value: media.credits?.crew
        ? directors(media)?.map((p) => (
            <span key={p.id} className="text-orange-500">
              {p.name}
            </span>
          ))
        : null,
      type: "movie",
    },
    {
      title: "Orçamento",
      value: media.budget ? "R$ " + numberWithCommas(media.budget) : null,
      type: "movie",
    },
    {
      title: "Receita",
      value: media.revenue ? "R$ " + numberWithCommas(media.revenue) : null,
      type: "movie",
    },
    {
      title: "Criador",
      value:
        media.created_by?.length > 0 &&
        media.created_by?.map((p) => (
          <span key={p.id} className="text-orange-500">
            {p.name}
          </span>
        )),
      type: "tv",
    },
    {
      title: "Gênero",
      value: media.genres?.map((g) => (
        <span key={g.id} className="text-orange-500">
          {g.name}
        </span>
      )),
      type: "tv&movie",
    },
    {
      title: "Status",
      value: media.status,
      type: "tv",
    },
    {
      title: "Idioma",
      value: fullLang(media.original_language),
      type: "tv&movie",
    },
    {
      title: "Rede",
      value: media.networks?.map((network) => network.name).join(", "),
      type: "tv",
    },
    {
      title: "Produção",
      value: media.production_companies
        ?.map((company) => company.name)
        .join(", "),
      type: "tv&movie",
    },
  ];

  return (
    <div className="px-global flex items-center justify-center">
      <div className="mr-12 hidden aspect-[2/3] max-w-[350px] flex-shrink-0 lg:block">
        {media.poster_path ? (
          <Image
            className="h-full w-full bg-zinc-800 object-cover p-1"
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
      <div>
        <h2 className="mb-4 text-2xl">Enredo</h2>
        <p className="mb-8 max-w-3xl">{media.overview}</p>

        <div>
          {details.map((detail) =>
            detail.type.includes(type)
              ? detail.value && (
                  <div className="mt-2 flex" key={detail.title}>
                    <div className="min-w-[120px] font-bold">
                      {detail.title}
                    </div>
                    <div className="flex flex-wrap gap-2 text-white/70">
                      {detail.value}
                    </div>
                  </div>
                )
              : null,
          )}
        </div>
      </div>
    </div>
  );
}
