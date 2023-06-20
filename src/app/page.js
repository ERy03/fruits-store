import storeFront from "../../utils";
import Link from "next/link";

const mockProducts = [
  {
    id: 1,
    name: "Apple",
    href: "#",
    price: "¥1000",
    description: "The best apple in the world",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
    imageAlt: "Shining red apple with water droplets on it",
  },
  {
    id: 2,
    name: "Banana",
    href: "#",
    price: "¥2000",
    description: "The best banana in the world",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-01.jpg",
    imageAlt: "Yellow banana",
  },
  {
    id: 3,
    name: "Orange",
    href: "#",
    price: "¥3000",
    description: "The best orange in the world",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-01.jpg",
    imageAlt: "Orange orange",
  },
];

export default async function HomePage() {
  const { data } = await storeFront(productsQuery);
  const products = data.products.edges;
  return (
    <main>
      <div className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            Fruits Market
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            The only place where you can find the best fruits in the world. All
            fruits are fresh, organic, and filled with all the vitamins you
            neeed.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <a
                href="#"
                className="w-full flex items-center justify-center px-6 py-4 border border-transparent text-base font-medium rounded-md divide-x  text-white bg-indigo-600 hover:bg-indigo-700 md:text-lg md:py-4 md:px-10"
              >
                <span className="pr-6">Get Everything</span>
                <span className="pl-6">¥30,000</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto pt-24 px-4 sm:pt-32 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 id="products-heading" className="sr-only">
          Products
        </h2>

        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {products.map((item) => {
            const product = item.node;
            console.log(product);
            const image = product.images.edges[0].node;
            console.log(product.tags[0]);
            return (
              <Link
                key={product.handle}
                href={`/products/${product.handle}`}
                className="group"
              >
                <div className="w-full aspect-w-3 aspect-h-3  rounded-lg overflow-hidden ">
                  <img
                    src={image.transformedSrc}
                    alt={product.altText}
                    className="w-full h-full object-center object-cover group-hover:opacity-75"
                  />
                </div>
                <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
                  <h3>{product.title}</h3>
                  <p>{product.priceRange.minVariantPrice.amount}</p>
                </div>
                <p className="mt-1 text-sm text-gray-500">{product.tags[0]}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}

const gql = String.raw;

const productsQuery = gql`
  query Products {
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
                transformedSrc
                altText
              }
            }
          }
        }
      }
    }
  }
`;
