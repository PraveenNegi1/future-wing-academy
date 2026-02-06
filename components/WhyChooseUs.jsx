"use client";

import Image from "next/image";

const features = [
  {
    id: 1,
    title: "A City Built for Focus",
    description:
      "Dehradun offers a calm, disciplined, and distraction-free environment—ideal for intense pilot preparation and concept-driven DGCA studies.",
    icon: "/Clocktower icon.png",
  },
  {
    id: 2,
    title: "Train in Peace",
    description:
      "Away from metro chaos, Dehradun allows students to stay focused, mentally fresh, and fully committed to building strong aviation foundations.",
    icon: "/healthicons_i-training-class-outline-24px.svg",
  },
  {
    id: 3,
    title: "PG Facilities",
    description:
      "We assist students with safe and comfortable PG accommodation during the 3-month ground training programme.",
    icon: "/healthicons_i-training-class-outline-24px.svg",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white md:py-20 py-10">
      <div className="mx-auto max-w-7xl px-6 text-center">
        {/* Header */}
        <p className="mb-2 text-[18px] font-bold text-[#104E7E]">
          Why Choose Us
        </p>

        <h2 className="mb-4 text-[22px] font-bold text-gray-800 md:text-4xl">
          Our Future Doesn&apos;t Wait. Neither Do We.
        </h2>

        <p className="mx-auto mb-16 mt-8 max-w-3xl text-gray-600">
          Future Wings Academy is one of Dehradun&apos;s most trusted
          career-focused learning institutes — designed to help students build
          confidence, real skills, and careers they&apos;re passionate about.
        </p>

        {/* Cards */}
        <div className="grid gap-12 md:grid-cols-3">
          {features.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#183961]">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={32}
                  height={32}
                />
              </div>

              <h3 className="mb-2 font-semibold text-gray-800">{item.title}</h3>

              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
