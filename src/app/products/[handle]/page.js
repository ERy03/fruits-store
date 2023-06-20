import { storeFront } from "../../../../utils";

export default function Example() {
  return (
    <main className="mx-auto pt-14 px-4 sm:pt-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="lg:grid lg:grid-cols-7 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16">
        <div className="lg:col-span-4">
          <div className="aspect-w-4 aspect-h-3 rounded-lg bg-gray-100 overflow-hidden">
            <img
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
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
