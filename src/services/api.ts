import { cache } from "react";

export const apiUrl = "https://api.themoviedb.org/3";

export const fetchApi = cache(async (path: string, params?: any) => {
  const url = new URL(apiUrl);
  const searchParams = new URLSearchParams({
    ...params,
    api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY,
  });

  url.pathname += path;
  url.search = searchParams.toString();

  const resp = await fetch(url.toString());
  const data = await resp?.json();

  if (!resp.ok || !data) throw new Error("Network Error");

  return data;
});

export const getTrending = cache(
  (type: MediaType, page: number | string = 1): Promise<PageResult<Media>> =>
    fetchApi(`/trending/${type}/week`, {
      page,
    }),
);

export const getMedia = cache(
  (type: MediaType, id: string): Promise<Media> =>
    fetchApi(`/${type}/${id}`, {
      append_to_response: "credits,images,videos,recommendations,episodes",
      language: "pt-BR",
    }),
);
