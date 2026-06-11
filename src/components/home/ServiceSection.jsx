import React from "react";
import { service } from "@/data/services";

export default function ServiceSection() {
  return (
    <section className="bg-white py-14">
      <div className="mx-auto grid grid-cols-1 gap-8 px-6 sm:grid-cols-2 lg:grid-cols-3 lg:px-5">
        {service.map((item) => (
          <div key={item.title} className="flex items-center gap-5">
            <div className="flex h-15 w-15 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-2xl text-blue-600">
              {item.icon}
            </div>

            <div>
              <h3 className="text-xl font-bold text-black">{item.title}</h3>
              <p className="mt-4 text-lg text-slate-700">{item.disc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

