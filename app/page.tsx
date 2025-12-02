"use client";
import React from "react";
import { useTheme } from "./context/ThemeContext";
import Header from "../components/Header";
import Hero from "../components/Hero";
import ArticleCard from "../components/ArticleCard";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";
import { posts } from "../lib/data";

export default function Home() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-zinc-100 text-zinc-900 font-sans dark:bg-black dark:text-zinc-100 transition-colors">
      <Header theme={theme} toggleTheme={toggleTheme} />

      <Hero />

      <main className="max-w-7xl mx-auto px-6 pb-16">
        {/* Recent posts */}
        <section className="mt-12">
          <h3 className="text-lg font-semibold mb-6">Recent blog posts</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.concat(posts).map((post, idx) => (
              <ArticleCard key={idx} post={post} />
            ))}
          </div>

          <div className="flex justify-center mt-10">
            <button className="px-6 py-2 rounded-md bg-gray-300 text-black">
              Loading more
            </button>
          </div>
        </section>

        <Gallery />

        {/* <CTA /> */}
      </main>

      <Footer />
    </div>
  );
}
