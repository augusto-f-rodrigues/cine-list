"use client";
import { useRef } from "react";
import { PiCaretLeft, PiCaretRight } from "react-icons/pi";
import MediaCard from "./MediaCard";

export default function MediaCarousel({
  title,
  items,
}: Readonly<{
  title?: string;
  items: Media[] | Person[];
}>) {
  const scrollContainer = useRef<HTMLUListElement>(null);

  function scrollLeft() {
    scrollContainer?.current?.scrollBy({
      left: -window.innerWidth,
      behavior: "smooth",
    });
  }

  function scrollRight() {
    scrollContainer?.current?.scrollBy({
      left: window.innerWidth,
      behavior: "smooth",
    });
  }

  return (
    <div className="my-global">
      <div className="px-global mb-5 flex items-center text-lg lg:text-xl">
        <span>{title}</span>
      </div>
      <div>
        <div className="group relative">
          <ul
            className="carousel snap-x snap-mandatory scroll-p-4 overflow-x-scroll whitespace-nowrap pl-4 md:scroll-p-10 md:pl-10 lg:scroll-p-12 lg:pl-12"
            ref={scrollContainer}
          >
            {items.map((item) => (
              <li
                key={item.id}
                className="mr-2 inline-block w-40 snap-start whitespace-normal lg:w-60"
              >
                <MediaCard media={item as Media} />
              </li>
            ))}
          </ul>
          <button
            className="absolute bottom-0 left-0 top-0 items-center bg-black/50 p-3 text-3xl transition lg:flex"
            onClick={scrollLeft}
          >
            <PiCaretLeft />
            <span className="sr-only">Scroll left</span>
          </button>
          <button
            className="absolute bottom-0 right-0 top-0 items-center bg-black/50 p-3 text-3xl transition lg:flex"
            onClick={scrollRight}
          >
            <PiCaretRight />
            <span className="sr-only">Scroll right</span>
          </button>
        </div>
      </div>
    </div>
  );
}
