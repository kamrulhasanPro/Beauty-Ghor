// app/products/[slug]/page.jsx (Next.js App Router example)
// or components/ProductDetails.jsx for React

import { StarIcon, ZapIcon } from "lucide-react";
import Image from "next/image";
import AddToCard from "../buttons/AddToCard";
import BuyNow from "../buttons/BuyNow";

export default function ProductDetailsCard({ product }) {
  const {
    _id,
    slug,
    title,
    brand,
    category,
    price,
    originalPrice,
    discountPercentage,
    stock,
    thumbnail,
    images,
    shortDescription,
    description,
    keyBenefits,
    ingredients,
    howToUse,
    skinType,
    size,
    countryOfOrigin,
    rating,
    reviewsCount,
  } = product || {};
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Product Image Section */}
      <div className="bg-white p-6 rounded-xl shadow">
        <Image
          // src={thumbnail}
          src="https://bk.shajgoj.com/storage/2025/12/sku-11589-y5ou.jpg"
          alt={title}
          width={500}
          height={500}
          className="rounded-lg"
        />

        <div className="flex gap-3 mt-4">
          {images.map((img, index) => (
            <Image
              key={index}
              // src={img}
              src="https://bk.shajgoj.com/storage/2025/12/sku-11589-y5ou.jpg"
              alt="product"
              width={80}
              height={80}
              className="border rounded cursor-pointer"
            />
          ))}
        </div>
      </div>

      {/* Product Info Section */}
      <div>
        <h1 className="text-3xl font-semibold">{title}</h1>
        <p className="text-gray-500 mt-1">
          {brand} • {category}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2 mt-2">
          <span className="text-yellow-400 font-bold flex items-center gap-1">
            <StarIcon fill="oklch(85.2% 0.199 91.936)" /> {rating}
          </span>
          <span className="text-sm text-gray-500">
            ({reviewsCount} reviews)
          </span>
        </div>

        {/* Price */}
        <div className="mt-4 flex items-center gap-4">
          <span className="text-3xl font-bold text-green-600">৳{price}</span>
          <span className="line-through text-gray-400">৳{originalPrice}</span>
          <span className="bg-red-100 text-red-600 px-2 py-1 text-sm rounded">
            {discountPercentage}% OFF
          </span>
        </div>

        {/* Short Description */}
        <p className="mt-4 text-gray-700">{shortDescription}</p>

        {/* Stock */}
        <p className="mt-2 text-sm text-green-600">In Stock: {stock} units</p>

        {/* Add to Cart */}
        <div className="mt-6 flex flex-wrap gap-4">
          <AddToCard id={_id}/>
          <BuyNow />
        </div>

        {/* Extra Info */}
        <div className="mt-6 text-sm text-gray-600 space-y-1">
          <p>
            <b>Size:</b> {size}
          </p>
          <p>
            <b>Skin Type:</b> {skinType.join(", ")}
          </p>
          <p>
            <b>Origin:</b> {countryOfOrigin}
          </p>
        </div>
      </div>

      {/* Full Description Section */}
      <div className="md:col-span-2 mt-10 bg-white p-6 rounded-xl shadow space-y-6">
        <div>
          <h2 className="text-xl font-bold mb-2 text-primary">Description</h2>
          <p className="text-gray-400">{description}</p>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-2 text-primary">Key Benefits</h2>
          <ul className="list-disc ml-6 text-gray-400">
            {keyBenefits.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-2 text-primary">Ingredients</h2>
          <ul className="list-disc ml-6 text-gray-400">
            {ingredients.map((ing, i) => (
              <li key={i}>{ing}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-2 text-primary">How To Use</h2>
          <ol className="list-decimal ml-6 text-gray-400">
            {howToUse.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
