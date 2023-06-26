import Image from "next/image";
import { formatPrice, storeFront } from "../../../../utils";
const relatedProducts = [
  {
    id: 1,
    name: "Apple Jam",
    href: "#",
    price: "1000",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-05-related-product-02.jpg",
    imageAlt: "Jar of apple jam beside fresh apples.",
  },
  {
    id: 2,
    name: "Apple Jam",
    href: "#",
    price: "1000",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-05-related-product-01.jpg",
    imageAlt: "Jar of apple jam beside fresh apples.",
  },
  {
    id: 3,
    name: "Apple Jam",
    href: "#",
    price: "1000",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-05-related-product-03.jpg",
    imageAlt: "Jar of apple jam beside fresh apples.",
  },
  {
    id: 4,
    name: "Apple Jam",
    href: "#",
    price: "1000",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-05-related-product-04.jpg",
    imageAlt: "Jar of apple jam beside fresh apples.",
  },
];

export default function Example() {
  return (
    <main className="mx-auto pt-14 px-4 sm:pt-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="lg:grid lg:grid-cols-7 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16">
        <div className="lg:col-span-4">
          <div className="aspect-w-4 aspect-h-3 rounded-lg bg-gray-100 overflow-hidden">
            <Image
              width={500}
              height={500}
              // src={product.imageSrc}
              src="https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80"
              // alt={product.imageAlt}
              alt="test"
              className="object-center object-cover"
            />
          </div>
        </div>

        {/* product detail */}
        <div className="max-w-2xl mx-auto mt-14 sm:mt-16 lg:max-w-none lg:mt-0 lg:col-span-3">
          <div className="flex flex-col-reverse">
            <div>
              <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                {/* {product.title} */}
                dog
              </h1>

              <h2 id="information-heading" className="sr-only">
                Product information
              </h2>
              <p className="text-sm text-gray-500 mt-2">
                {/* {product.tags[0]} &middot; Updated{' '} */}
                {/* <time dateTime={product.updatedAt}>{format(new Date(product.updateAt), "dd MM yyyy")}</time> */}
                something
              </p>
            </div>
          </div>

          <p className="text-gray-500 mt-6">
            {/* {product.description} */}
            lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            quod, voluptatum, quae, quia, voluptas quibusdam quos natus quas
            voluptatibus doloribus fugiat. Quisquam quod, voluptatum, quae,
            quia, voluptas quibusdam quos natus quas voluptatibus doloribus
            fugiat.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
            <button
              type="button"
              className="w-full bg-gray-900 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-gray-500"
            >
              {/* Pay {formatPrice(product.pricerange.minVariantPrice.amount)} */}
              Pay Now
            </button>
            <button
              type="button"
              className="w-full bg-white border rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-gray-500"
            >
              Preview
            </button>
          </div>

          <div className="border-t border-gray-200 mt-10 pt-10">
            <h3 className="text-sm font-medium text-gray-900">Lorem ipsum</h3>
            <p className="mt-4 text-sm text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
              dolores id similique accusantium excepturi. Dignissimos quisquam
              debitis laboriosam maxime nam cum soluta, illum tenetur ipsam
              veritatis eum aut animi voluptatibus.{" "}
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
          {relatedProducts.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden bg-gray-100">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="object-center object-cover group-hover:opacity-75"
                />
              </div>
              <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900 space-x-8">
                <h3>
                  <a href="#">
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                  </a>
                </h3>
                <p>{formatPrice(product.price)}</p>
              </div>
              <p className="mt-1 text-sm text-gray-500">{product.category}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

const gql = String.raw;

const SingleProduct = gql`
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
