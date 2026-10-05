import React from "react";
import Link from "next/link";
import Image from "next/image";

export interface ImageTileProps {
  title: string;
  category?: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  className?: string;
}

export function ImageTile({
  title,
  category,
  href,
  imageSrc,
  imageAlt,
  className = "",
}: ImageTileProps) {
  return (
    <Link
      href={href}
      className={`group relative overflow-hidden rounded-md border border-gold/20 hover:border-gold transition-colors duration-300 block bg-charcoal aspect-[4/3] ${className}`}
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/60 to-navy/30 group-hover:via-navy/70 transition-colors" />

      <div className="absolute inset-0 p-6 flex flex-col justify-end items-center text-center z-10">
        {category && (
          <span className="font-sans text-[11px] uppercase tracking-[0.18em] text-gold font-bold mb-1">
            {category}
          </span>
        )}
        <h3 className="font-serif text-lg md:text-xl font-semibold uppercase tracking-wider text-text-dark group-hover:text-gold transition-colors">
          {title}
        </h3>
        <span className="mt-3 text-gold text-xs uppercase tracking-widest font-sans font-semibold opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
          Explore Practice →
        </span>
      </div>
    </Link>
  );
}
