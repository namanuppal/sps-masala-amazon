import { storyData } from "../data/content";

export default function Story() {
  return (
    <section
      id="story"
      className="grid grid-cols-1 md:grid-cols-2 px-5 sm:px-8 md:px-10 py-12 sm:py-16 md:py-20 bg-[#e9e6dc] items-start gap-8 sm:gap-10 md:gap-12"
    >
      {/* IMAGE */}
      <div className="flex justify-center">
        <div className="w-full max-w-[320px] sm:max-w-[380px] md:w-[420px] aspect-square overflow-hidden shadow-md">
          <img src={storyData.image} className="w-full h-full object-cover" />
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-xl">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">
          {storyData.title}
        </h2>

        <p className="text-gray-700 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
          {storyData.description}
        </p>

        {/* BLOCK 1 */}
        <div className="mb-5 sm:mb-6">
          <p className="font-medium text-sm sm:text-base">Family Legacy</p>
          <p className="text-xs sm:text-sm text-gray-600">
            Generations of spice expertise from Uttarkashi, Uttarakhand
          </p>
        </div>

        <hr className="border-gray-300 mb-5 sm:mb-6" />

        {/* BLOCK 2 */}
        <div className="mb-5 sm:mb-6">
          <p className="font-medium text-sm sm:text-base">Homemade Quality</p>
          <p className="text-xs sm:text-sm text-gray-600">
            100% Pure - No Added Preservatives | FSSAI Certified
          </p>
        </div>

        <hr className="border-gray-300 mb-5 sm:mb-6" />

        {/* BLOCK 3 */}
        <div>
          <p className="font-medium text-sm sm:text-base">Amazon Trusted</p>
          <p className="text-xs sm:text-sm text-gray-600">
            Premium quality standards recognized by global platforms
          </p>
        </div>
      </div>
    </section>
  );
}
