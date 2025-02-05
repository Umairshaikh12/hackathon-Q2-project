import { client } from "@/sanity/lib/client";
import { Product } from "types/products"; 
import { groq } from "next-sanity";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

interface ProductPageProps {
  params: { slug: string };
}

async function getProduct(slug: string): Promise<Product> {
  return client.fetch(
    groq`*[_type == "product" && slug.current == $slug][0]{
      _id,
      title,
      _type,
      productImage,
      price
    }`,
    { slug }
  );
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = params;
  const product = await getProduct(slug);

  return (

    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Image Section */}
        <div className="aspect-square">
          {product.productImage && (
            <Image
              src={urlFor(product.productImage).url()}
              alt={product.title}
              width={500}
              height={500}
              className="rounded-lg shadow-md object-cover"
            />
          )}
        </div>

        {/* Product Details */}
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl font-bold">{product.title}</h1>
          <p className="text-2xl font-bold text-green-600">${product.price}</p>
        </div>
      </div>
    </div>
  );
}
