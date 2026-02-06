import Image from "next/image";

export default function VisionValues() {
  return (
    <section className="w-full relative overflow-hidden">
      <div className="relative h-[420px] w-full">
        <Image
          src="/Our vision 1.png"
          alt="Cockpit view"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
            Our Vision
          </h2>
          <p className="text-gray-200 max-w-2xl text-sm md:text-base leading-relaxed">
            To nurture future commanders of flight decks across the globe
            through disciplined preparation, ethical guidance, and world-class
            mentorship.
          </p>
        </div>
      </div>

      <div className="bg-[#143A66] md:pt-48 pt-16 pb-20 relative">
        <div className="absolute -md:top-32 -top-16 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl">
          <Image
            src="/aeroplane full shot 1.png"
            alt="Aircraft"
            width={1200}
            height={500}
            className="w-full h-auto"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-white text-2xl md:text-3xl font-semibold md:mb-14">
            Our Values
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center">
              <div className=" w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <Image
                  src="/vision1.png"
                  alt="Excellence"
                  width={58}
                  height={58}
                />
              </div>
              <p className="text-white text-sm max-w-xs">
                Service excellence in pilot training
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className=" w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <Image
                  src="/vision2.png"
                  alt="Teamwork"
                  width={58}
                  height={58}
                />
              </div>
              <p className="text-white text-sm max-w-xs">
                Teamwork and discipline
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className=" w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <Image
                  src="/vision3.png"
                  alt="Commitment"
                  width={58}
                  height={58}
                />
              </div>
              <p className="text-white text-sm max-w-xs">
                Commitment to student satisfaction and long-term success
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
