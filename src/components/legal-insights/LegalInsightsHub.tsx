"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "@/lib/mdx";

interface Props {
  posts: BlogPost[];
}

export function LegalInsightsHub({ posts }: Props) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const featuredPost = posts[0] || null;

  const filterMap: Record<string, (post: BlogPost) => boolean> = {
    all: () => true,
    criminal: (p) =>
      p.category.toLowerCase().includes("criminal") || p.pillar.includes("criminal"),
    family: (p) =>
      p.category.toLowerCase().includes("family") ||
      p.category.toLowerCase().includes("matrimonial") ||
      p.pillar.includes("divorce"),
    "cheque-bounce": (p) =>
      p.category.toLowerCase().includes("cheque") ||
      p.category.toLowerCase().includes("138") ||
      p.pillar.includes("cheque"),
    civil: (p) =>
      p.category.toLowerCase().includes("civil") ||
      p.category.toLowerCase().includes("property") ||
      p.pillar.includes("civil"),
    trademark: (p) =>
      p.category.toLowerCase().includes("trademark") ||
      p.category.toLowerCase().includes("ip") ||
      p.pillar.includes("trademark"),
  };

  const isPostVisible = (post: BlogPost): boolean => {
    const matchesCategory = filterMap[selectedCategory] ? filterMap[selectedCategory](post) : true;
    const matchesSearch =
      searchQuery.trim() === "" ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  };

  return (
    <div className="flex flex-col w-full text-on-surface">
      {/* Header Title Banner & Search Architecture */}
      <section className="relative w-full bg-gradient-to-b from-surface-container-lowest via-surface-container-low to-surface px-margin-mobile lg:px-margin pt-space-2xl pb-space-xl">
        <div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
          {/* Top Badging & Micro Data String */}
          <div className="flex flex-wrap items-center justify-between gap-space-sm border-b border-tertiary/15 pb-space-sm">
            <div className="flex items-center gap-space-xs text-tertiary">
              <span className="material-symbols-outlined text-[15px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                assured_workload
              </span>
              <span className="font-eyebrow text-eyebrow uppercase tracking-[0.2em] font-bold">
                Jurisprudential Archive &amp; Bench Analyses
              </span>
            </div>
            <div className="flex items-center gap-space-md text-legal-disclaimer font-legal-disclaimer text-on-surface-variant">
              <span className="flex items-center gap-space-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse"></span>
                Roster Index 2026
              </span>
              <span className="text-outline-variant">/</span>
              <span>Delhi HC &amp; SC Reports</span>
            </div>
          </div>

          {/* Main Headline Block */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-end">
            <div className="lg:col-span-8 flex flex-col gap-space-xs">
              <h1 className="font-headline-xl text-display-lg text-on-surface tracking-tight font-semibold">
                Legal Insights &amp; Treatises
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
                Authoritative legal articles, statutory interpretations, and procedural guides authored for litigants and counsel appearing before Delhi Courts.
              </p>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end pb-space-xs">
              <div className="p-space-sm rounded bg-surface-container-high text-on-surface-variant flex items-center gap-space-md shadow-sm">
                <span className="material-symbols-outlined text-tertiary text-subheading-serif font-subheading-serif">
                  menu_book
                </span>
                <div className="flex flex-col">
                  <span className="font-eyebrow text-[10px] uppercase tracking-widest text-on-surface-variant">
                    Archived Articles
                  </span>
                  <span className="font-subheading-serif text-subheading-serif text-tertiary font-bold leading-tight">
                    {posts.length} Treatises
                  </span>
                </div>
                <span className="text-outline-variant mx-1">|</span>
                <div className="flex flex-col">
                  <span className="font-eyebrow text-[10px] uppercase tracking-widest text-on-surface-variant">
                    Jurisdictions
                  </span>
                  <span className="font-subheading-serif text-subheading-serif text-on-surface font-semibold leading-tight">
                    SC &amp; DHC
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Integrated Search Command Bar */}
          <div className="mt-space-md w-full rounded-DEFAULT bg-surface-container-high p-space-xs shadow-xl">
            <form className="flex flex-col md:flex-row items-stretch gap-space-xs" onSubmit={(e) => e.preventDefault()}>
              <div className="relative flex-grow flex items-center bg-surface-container-lowest rounded-DEFAULT px-space-md">
                <span className="material-symbols-outlined text-tertiary mr-space-sm text-body-lg">
                  search
                </span>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by statute, notice timeline, section, or keyword..."
                  className="w-full bg-transparent py-space-md text-body-md font-body-md text-on-surface placeholder:text-on-surface-variant/60 focus:outline-none"
                />
              </div>
              <button
                type="button"
                className="h-full px-space-lg py-space-md bg-secondary-container hover:bg-on-secondary text-secondary-fixed transition-colors font-label-md text-label-md uppercase tracking-wider rounded-DEFAULT flex items-center justify-center gap-space-xs shadow-md"
              >
                <span>Search Archive</span>
                <span className="material-symbols-outlined text-body-md">arrow_forward</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Filter Taxonomy Navigation */}
      <section className="w-full bg-surface-container-lowest px-margin-mobile lg:px-margin py-space-md">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-space-md">
          <div className="flex items-center gap-space-xs overflow-x-auto pb-space-xs md:pb-0 scrollbar-none">
            {[
              { id: "all", label: "All Dispatches" },
              { id: "criminal", label: "Criminal Defense" },
              { id: "family", label: "Matrimonial & Family" },
              { id: "cheque-bounce", label: "Cheque Bounce (Sec 138)" },
              { id: "civil", label: "Civil & Property" },
              { id: "trademark", label: "Trademark & IP" },
            ].map((cat) => {
              const count =
                cat.id === "all"
                  ? posts.length
                  : posts.filter((p) => filterMap[cat.id](p)).length;
              const isActive = selectedCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`whitespace-nowrap px-space-md py-space-xs rounded-DEFAULT font-label-md text-label-md uppercase tracking-wide transition-all flex items-center gap-space-xs ${
                    isActive
                      ? "bg-secondary-container text-on-secondary-fixed shadow-sm"
                      : "bg-surface-container text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high"
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`px-1.5 py-0.2 rounded-full font-legal-disclaimer font-semibold ${
                      isActive
                        ? "bg-on-secondary-fixed/20 text-legal-disclaimer"
                        : "text-tertiary"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
          <div className="hidden lg:flex items-center gap-space-xs text-on-surface-variant font-label-md text-label-md">
            <span className="material-symbols-outlined text-[18px] text-tertiary">tune</span>
            <span className="uppercase tracking-wider">Indexed Chronologically</span>
          </div>
        </div>
      </section>

      {/* Featured Article Spread */}
      {featuredPost && (
        <section className={`w-full px-margin-mobile lg:px-margin pt-space-xl pb-space-2xl ${isPostVisible(featuredPost) ? "block" : "hidden"}`}>
          <div className="max-w-7xl mx-auto">
            <div className="group relative rounded-DEFAULT bg-surface-container-low overflow-hidden shadow-2xl transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[480px]">
                <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full overflow-hidden bg-surface-container-lowest">
                  <Image
                    alt={featuredPost.title}
                    src="/images/stitch/hero_supreme_court.jpg"
                    fill
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/60 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-surface-container-lowest/50 lg:to-surface-container-lowest"></div>
                  <div className="absolute top-space-md left-space-md flex flex-wrap gap-space-xs">
                    <span className="px-space-sm py-1 rounded-DEFAULT bg-surface-container-lowest/90 backdrop-blur-md text-tertiary font-eyebrow text-[11px] uppercase tracking-[0.16em] font-bold shadow-lg">
                      Featured Analysis • {featuredPost.readTime}
                    </span>
                  </div>
                </div>
                <div className="lg:col-span-7 p-space-lg lg:p-space-xl flex flex-col justify-between bg-surface-container-low">
                  <div className="flex flex-col gap-space-md">
                    <div className="flex items-center justify-between">
                      <span className="font-eyebrow text-eyebrow text-tertiary uppercase tracking-[0.2em] font-semibold flex items-center gap-space-xs">
                        <span className="w-2 h-2 rounded-full bg-tertiary"></span>
                        {featuredPost.category}
                      </span>
                      <span className="font-legal-disclaimer text-legal-disclaimer text-on-surface-variant uppercase tracking-wider">
                        {featuredPost.date}
                      </span>
                    </div>
                    <h2 className="font-headline-xl text-headline-xl text-on-surface tracking-tight group-hover:text-tertiary transition-colors">
                      <Link href={`/legal-insights/${featuredPost.slug}/`}>
                        {featuredPost.title}
                      </Link>
                    </h2>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      {featuredPost.description}
                    </p>
                  </div>
                  <div className="pt-space-md mt-space-md border-t border-outline-variant/30 flex flex-col sm:flex-row sm:items-center justify-between gap-space-md">
                    <div className="flex items-center gap-space-md">
                      <Image
                        alt={featuredPost.author}
                        src="/images/stitch/shubham_singh_profile_mobile.jpeg"
                        width={48}
                        height={48}
                        className="w-12 h-12 rounded-full object-cover shadow-md"
                      />
                      <div className="flex flex-col">
                        <span className="font-headline-md text-body-md text-on-surface font-semibold leading-tight">
                          {featuredPost.author}
                        </span>
                        <span className="font-eyebrow text-[11px] text-tertiary uppercase tracking-wider">
                          Advocate in Delhi
                        </span>
                      </div>
                    </div>
                    <Link
                      href={`/legal-insights/${featuredPost.slug}/`}
                      className="inline-flex items-center justify-center gap-space-xs px-space-lg py-space-sm bg-secondary-container hover:bg-on-secondary text-secondary-fixed font-label-md text-label-md uppercase tracking-wider rounded-DEFAULT shadow-md transition-all group-hover:translate-x-0.5"
                    >
                      <span>Read Full Treatise</span>
                      <span className="material-symbols-outlined text-body-md">arrow_forward</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Grid of Article Cards */}
      <section className="w-full px-margin-mobile lg:px-margin pb-space-3xl">
        <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-space-sm border-b border-tertiary/20 pb-space-sm">
            <div>
              <span className="font-eyebrow text-eyebrow text-tertiary uppercase tracking-[0.2em] font-semibold">
                Analytical Corpus
              </span>
              <h3 className="font-headline-md text-headline-md text-on-surface tracking-wide mt-1">
                Bench Briefs &amp; Legal Guides
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter lg:gap-space-lg" id="treatisesGrid">
            {posts.map((post) => {
              const visible = isPostVisible(post);
              return (
                <article
                  key={post.slug}
                  className={`group flex-col justify-between bg-surface-container rounded-DEFAULT overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:bg-surface-container-high ${
                    visible ? "flex" : "hidden"
                  }`}
                >
                  <div>
                    <div className="relative h-52 w-full overflow-hidden bg-surface-container-lowest">
                      <Image
                        alt={post.title}
                        src="/images/stitch/hero_supreme_court.jpg"
                        fill
                        className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-surface-container via-surface-container/30 to-transparent"></div>
                      <div className="absolute top-space-sm left-space-sm">
                        <span className="px-space-xs py-0.5 rounded bg-surface-container-lowest/90 backdrop-blur-sm text-tertiary font-eyebrow text-[10px] uppercase tracking-wider font-bold">
                          {post.category}
                        </span>
                      </div>
                      <div className="absolute bottom-space-xs right-space-sm font-legal-disclaimer text-legal-disclaimer text-on-surface-variant bg-surface-container-lowest/70 px-space-xs rounded">
                        {post.readTime}
                      </div>
                    </div>
                    <div className="p-space-lg flex flex-col gap-space-sm">
                      <div className="flex items-center gap-space-xs text-legal-disclaimer font-legal-disclaimer text-on-surface-variant">
                        <span className="material-symbols-outlined text-[13px] text-tertiary">
                          calendar_month
                        </span>
                        <span>{post.date}</span>
                        <span className="text-outline-variant">•</span>
                        <span>Legal Commentary</span>
                      </div>
                      <h4 className="font-headline-md text-subheading-serif text-on-surface font-semibold group-hover:text-tertiary transition-colors line-clamp-2">
                        <Link href={`/legal-insights/${post.slug}/`}>{post.title}</Link>
                      </h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3 leading-relaxed">
                        {post.description}
                      </p>
                    </div>
                  </div>
                  <div className="px-space-lg pb-space-lg pt-space-xs border-t border-outline-variant/20 flex items-center justify-between">
                    <span className="font-legal-disclaimer text-legal-disclaimer text-tertiary-fixed-dim">
                      Delhi Practice
                    </span>
                    <Link
                      href={`/legal-insights/${post.slug}/`}
                      className="inline-flex items-center gap-space-xs text-tertiary group-hover:text-tertiary-fixed font-label-md text-label-md uppercase tracking-wider transition-transform group-hover:translate-x-1"
                    >
                      <span>Read Article</span>
                      <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
