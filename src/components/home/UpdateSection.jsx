import React from "react";

export default function UpdateSection() {
  return (
    <section className="bg-slate-100 px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-slate-950 sm:text-4xl">
          Stay Updated
        </h2>
        <p className="mt-6 text-lg text-slate-700 sm:text-xl">
          Subscribe to our newsletter for exclusive deals and new arrivals
        </p>

        <form className="mx-auto mt-10 flex max-w-xl flex-col gap-5 sm:flex-row">
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            placeholder="Enter your email"
            className="min-h-16 flex-1 rounded-xl border border-slate-300 bg-slate-100 px-5 text-lg text-slate-900 outline-none transition placeholder:text-slate-500 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
          />
          <button
            type="submit"
            className="min-h-16 rounded-xl bg-blue-600 px-8 text-lg font-bold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-slate-100"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
