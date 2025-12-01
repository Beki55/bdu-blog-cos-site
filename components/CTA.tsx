export default function CTA() {
  return (
    <section className="mt-16 rounded-2xl overflow-hidden bg-black text-white p-12 shadow-lg">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-2xl font-semibold">
          Let’s get started on something great
        </h3>
        <p className="mt-3 text-sm text-white/80">
          Join over 4,000+ startups already growing with Untitled.
        </p>
        <div className="mt-6 flex items-center justify-center gap-4">
          <button className="px-4 py-2 rounded-md border border-white/20">
            Chat to us
          </button>
          <button className="px-4 py-2 rounded-md bg-white text-black">
            Get started
          </button>
        </div>
      </div>
    </section>
  );
}
