import {
  CheckIcon,
  ClockIcon,
  QuestionMarkCircleIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";

export default function Cart({ products }) {
  if (products.length === 0) {
    return <div>CART IS EMPTY</div>;
  }

  return (
    <section aria-labelledby="cart-heading" className="">
      <h2 id="cart-heading" className="sr-only">
        Items in your shopping cart
      </h2>

      <ul
        role="list"
        className="divide-y divide-gray-200 border-b border-t border-gray-200"
      >
        {products.map((product, productIdx) => (
          <li key={product.id} className="flex py-6 sm:py-10">
            <div className="flex-shrink-0">
              <img
                src={product.image}
                alt={product.title}
                className="h-24 w-24 rounded-md object-cover object-center sm:h-48 sm:w-48"
              />
            </div>

            <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
              <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                <div>
                  <div className="flex justify-between">
                    <h3 className="text-sm">
                      <a
                        href={product.href}
                        className="font-medium text-gray-700 hover:text-gray-800"
                      >
                        {product.title}
                      </a>
                    </h3>
                  </div>
                  <div className="mt-1 flex text-sm">
                    <p className="text-gray-500">{product.color}</p>
                    {product.size ? (
                      <p className="ml-4 border-l border-gray-200 pl-4 text-gray-500">
                        {product.size}
                      </p>
                    ) : null}
                  </div>
                  <p className="mt-1 text-sm font-medium text-gray-900">
                    {product.price}
                  </p>
                </div>

                <div className="mt-4 sm:mt-0 sm:pr-9">
                  <label htmlFor={`quantity-${productIdx}`} className="sr-only">
                    Quantity, {product.name}
                  </label>
                  <select
                    id={`quantity-${productIdx}`}
                    name={`quantity-${productIdx}`}
                    className="max-w-full rounded-md border border-gray-300 py-1.5 text-left text-base font-medium leading-5 text-gray-700 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                  >
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                  </select>

                  <div className="absolute right-0 top-0">
                    <button
                      type="button"
                      className="-m-2 inline-flex p-2 text-gray-400 hover:text-gray-500"
                    >
                      <span className="sr-only">Remove</span>
                      <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>

              <p className="mt-4 flex space-x-2 text-sm text-gray-700">
                {product.inStock ? (
                  <CheckIcon
                    className="h-5 w-5 flex-shrink-0 text-green-500"
                    aria-hidden="true"
                  />
                ) : (
                  <ClockIcon
                    className="h-5 w-5 flex-shrink-0 text-gray-300"
                    aria-hidden="true"
                  />
                )}

                <span>
                  {product.inStock
                    ? "In stock"
                    : `Ships in ${product.leadTime}`}
                </span>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
