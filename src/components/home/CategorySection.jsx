import React from "react";

const categories = ["Electronics", "Fashion", "Home", "Sports"];

export default function CategorySection() {
  return (
    <section className="bg-gray-900 px-6 py-20 text-white sm:px-9">
      <div className="mx-auto w-full">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-normal sm:text-4xl">
            Shop by Category
          </h2>
          <p className="mt-6 text-lg text-slate-100 sm:text-xl">
            Find exactly what you're looking for
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className="flex min-h-24 w-full items-center justify-center rounded-xl bg-gray-800 px-6 text-xl font-bold text-white shadow-sm transition-colors hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-white/70 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
