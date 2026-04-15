import { storyData } from "../data/content";

export default function Story() {
  return (
    <section
      id="story"
      className="grid md:grid-cols-2 px-10 py-20 bg-[#e9e6dc] items-start gap-12"
    >
      {/* IMAGE */}
      <div className="flex justify-center">
        <div className="w-[420px] aspect-square overflow-hidden shadow-md">
          <img src={storyData.image} className="w-full h-full object-cover" />
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-xl">
        <h2 className="text-3xl font-semibold mb-6">{storyData.title}</h2>

        <p className="text-gray-700 leading-relaxed mb-8">
          {storyData.description}
        </p>

        {/* BLOCK 1 */}
        <div className="mb-6">
          <p className="font-medium">Family Legacy</p>
          <p className="text-sm text-gray-600">
            Generations of spice expertise from Uttarkashi, Uttarakhand
          </p>
        </div>

        <hr className="border-gray-300 mb-6" />

        {/* BLOCK 2 */}
        <div className="mb-6">
          <p className="font-medium">Homemade Quality</p>
          <p className="text-sm text-gray-600">
            100% Pure - No Added Preservatives | FSSAI Certified
          </p>
        </div>

        <hr className="border-gray-300 mb-6" />

        {/* BLOCK 3 */}
        <div>
          <p className="font-medium">Amazon Trusted</p>
          <p className="text-sm text-gray-600">
            Premium quality standards recognized by global platforms
          </p>
        </div>
      </div>
    </section>
  );
}
