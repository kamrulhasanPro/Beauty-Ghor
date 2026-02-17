import MyContainer from "@/components/shares/MyContainer";

export default function ProductDetailsSkeleton() {
  return (
    <MyContainer className="grid grid-cols-1 md:grid-cols-2 gap-10 animate-pulse">
      {/* Image Section */}
      <div className="bg-white p-6 rounded-xl shadow">
        {/* Main Image */}
        <div className="w-full h-[500px] bg-gray-200 rounded-lg" />

        {/* Thumbnails */}
        <div className="flex gap-3 mt-4">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="w-[80px] h-[80px] bg-gray-200 rounded border"
            />
          ))}
        </div>
      </div>

      {/* Product Info */}
      <div className="space-y-4">
        {/* Title */}
        <div className="h-8 w-3/4 bg-gray-200 rounded" />

        {/* Brand & Category */}
        <div className="h-4 w-1/2 bg-gray-200 rounded" />

        {/* Rating */}
        <div className="h-4 w-1/3 bg-gray-200 rounded" />

        {/* Price */}
        <div className="flex gap-4 items-center mt-4">
          <div className="h-8 w-32 bg-gray-200 rounded" />
          <div className="h-5 w-24 bg-gray-200 rounded" />
          <div className="h-6 w-20 bg-gray-200 rounded" />
        </div>

        {/* Short Description */}
        <div className="space-y-2 mt-4">
          <div className="h-4 w-full bg-gray-200 rounded" />
          <div className="h-4 w-5/6 bg-gray-200 rounded" />
          <div className="h-4 w-4/6 bg-gray-200 rounded" />
        </div>

        {/* Stock */}
        <div className="h-4 w-1/4 bg-gray-200 rounded mt-2" />

        {/* Buttons */}
        <div className="flex gap-4 mt-6">
          <div className="h-12 w-40 bg-gray-200 rounded" />
          <div className="h-12 w-32 bg-gray-200 rounded" />
        </div>

        {/* Extra Info */}
        <div className="space-y-2 mt-6">
          <div className="h-4 w-1/3 bg-gray-200 rounded" />
          <div className="h-4 w-1/2 bg-gray-200 rounded" />
          <div className="h-4 w-1/3 bg-gray-200 rounded" />
        </div>
      </div>

      {/* Full Description Section */}
      <div className="md:col-span-2 mt-10 bg-white p-6 rounded-xl shadow space-y-6">
        {/* Description */}
        <div>
          <div className="h-6 w-40 bg-gray-200 rounded mb-3" />
          <div className="space-y-2">
            <div className="h-4 w-full bg-gray-200 rounded" />
            <div className="h-4 w-5/6 bg-gray-200 rounded" />
          </div>
        </div>

        {/* Key Benefits */}
        <div>
          <div className="h-6 w-40 bg-gray-200 rounded mb-3" />
          <div className="space-y-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-4 w-3/4 bg-gray-200 rounded" />
            ))}
          </div>
        </div>

        {/* Ingredients */}
        <div>
          <div className="h-6 w-40 bg-gray-200 rounded mb-3" />
          <div className="space-y-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-4 w-2/3 bg-gray-200 rounded" />
            ))}
          </div>
        </div>

        {/* How To Use */}
        <div>
          <div className="h-6 w-40 bg-gray-200 rounded mb-3" />
          <div className="space-y-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-4 w-5/6 bg-gray-200 rounded" />
            ))}
          </div>
        </div>
      </div>
    </MyContainer>
  );
}
