import { Post } from "../types";

interface ArticleCardProps {
  post: Post;
}

export default function ArticleCard({ post }: ArticleCardProps) {
  return (
    <article className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm overflow-hidden transition-colors">
      <div
        className="h-40 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=2d9b0b9e6d3b2e3f7a1f9d4c3a5b6c7d)",
        }}
      />
      <div className="p-5">
        <h4 className="font-semibold text-base leading-snug mb-2">
          {post.title}
        </h4>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
          {post.excerpt}
        </p>
        <div className="flex items-center gap-3 text-xs text-zinc-500">
          <div className="w-6 h-6 rounded-full bg-gray-200" />
          <div>
            <div className="font-medium text-xs text-zinc-800 dark:text-zinc-100">
              {post.author}
            </div>
            <div className="text-xs">{post.date}</div>
          </div>
        </div>
      </div>
    </article>
  );
}
