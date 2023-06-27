import Image from "next/image";
import { format, parseISO } from "date-fns";
import { formatPrice, storeFront } from "../../../../utils";
import Link from "next/link";

export default async function Example({ params }) {
  const { data } = await storeFront(SingleProductQuery, {
    handle: params.handle,
  });
  // related products
  const relatedProducts = data.products.edges
    .filter((item) => item.node.handle !== params.handle)
    .slice(0, 4);
  // single product
  const productByHandle = data.productByHandle;
  const image = productByHandle.images.edges[0].node;
  console.log(productByHandle);
  console.log(image);

  return (
    <main className="mx-auto pt-14 px-4 sm:pt-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="lg:grid lg:grid-cols-7 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16">
        <div className="lg:col-span-4">
          <div className="aspect-w-4 aspect-h-3 rounded-lg bg-gray-100 overflow-hidden">
            <Image
              width={500}
              height={500}
              src={image.url}
              alt={image.altText}
              className="object-center object-cover"
            />
          </div>
        </div>

        {/* product detail */}
        <div className="max-w-2xl mx-auto mt-14 sm:mt-16 lg:max-w-none lg:mt-0 lg:col-span-3">
          <div className="flex flex-col-reverse">
            <div>
              <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                {productByHandle.title}
              </h1>

              <h2 id="information-heading" className="sr-only">
                Product information
              </h2>
              <p className="text-sm text-gray-500 mt-2">
                {productByHandle.tags[0]} &middot; Updated{" "}
                <time dateTime={productByHandle.updatedAt}>
                  {format(parseISO(productByHandle.updatedAt), "dd MMM yyyy")}
                </time>
              </p>
            </div>
          </div>

          <p className="text-gray-500 mt-6">{productByHandle.description}</p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
            <button
              type="button"
              className="w-full bg-gray-900 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-gray-500"
            >
              Pay{" "}
              {formatPrice(productByHandle.priceRange.minVariantPrice.amount)}
            </button>
            <button
              type="button"
              className="w-full bg-white border rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-gray-500"
            >
              Preview
            </button>
          </div>

          <div className="border-t border-gray-200 mt-10 pt-10">
            <h3 className="text-sm font-medium text-gray-900">
              About the fruit farm
            </h3>
            <p className="mt-4 text-sm text-gray-500">
              Welcome to our exquisite organic fruit farm, where we cultivate
              the finest fruits using sustainable, environmentally friendly
              practices. Our farm is a sanctuary of pure goodness, free from
              GMOs and pesticides, ensuring that every bite you take is filled
              with natural, untainted flavors. Committed to fair trade
              principles, we prioritize the well-being of our farmers and
              community.{" "}
              <a
                href="#"
                className="font-medium text-gray-900 hover:text-gray-700"
              >
                Read more
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Realted Products */}
      <div className="max-w-2xl mx-auto mt-24 sm:mt-32 lg:max-w-none">
        <div className="flex items-center justify-between space-x-4">
          <h2 className="text-lg font-medium text-gray-900">
            Customers also viewed
          </h2>
          <a
            href="#"
            className="white-space-nowrap text-sm font-medium text-gray-900 hover:text-gray-700"
          >
            View all<span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
          {relatedProducts.map((item) => {
            const product = item.node;
            const image = product.images.edges[0].node;
            return (
              <div key={product.handle} className="group relative">
                <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden bg-gray-100">
                  <Image
                    width={500}
                    height={500}
                    src={image.url}
                    alt={image.altText}
                    className="object-center object-cover group-hover:opacity-75"
                  />
                </div>
                <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900 space-x-8">
                  <h3>
                    <Link href={`/products/${product.handle}`}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.title}
                    </Link>
                  </h3>
                  <p>
                    {formatPrice(product.priceRange.minVariantPrice.amount)}
                  </p>
                </div>
                <p className="mt-1 text-sm text-gray-500">{product.tags[0]}</p>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}

const gql = String.raw;

const SingleProductQuery = gql`
  query SingleProduct($handle: String!) {
    productByHandle(handle: $handle) {
      title
      handle
      description
      updatedAt
      tags
      priceRange {
        minVariantPrice {
          amount
        }
      }
      images(first: 1) {
        edges {
          node {
            url
            altText
          }
        }
      }
    }
    products(first: 6) {
      edges {
        node {
          title
          handle
          tags
          priceRange {
            minVariantPrice {
              amount
            }
          }
          images(first: 1) {
            edges {
              node {
                url
                altText
              }
            }
          }
        }
      }
    }
  }
`;
