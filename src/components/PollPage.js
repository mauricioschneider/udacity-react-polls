import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const pricing = {
  tiers: [
    {
      name: "Hobby",
      id: "tier-hobby",
      href: "#",
      price: { monthly: "$15", annually: "$144" },
      description: "The essentials to provide your best work for clients.",
      features: ["5 products", "Up to 1,000 subscribers", "Basic analytics"],
      mostPopular: false,
    },
    {
      name: "Freelancer",
      id: "tier-freelancer",
      href: "#",
      price: { monthly: "$30", annually: "$288" },
      description: "The essentials to provide your best work for clients.",
      features: [
        "5 products",
        "Up to 1,000 subscribers",
        "Basic analytics",
        "48-hour support response time",
      ],
      mostPopular: true,
    },
  ],
};

const PollPage = () => {
  return (
    <div className="min-h-full">
      <main>
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-2xl items-center justify-between gap-x-8 lg:mx-0 lg:max-w-none">
            <div className="flex items-center gap-x-6">
              <img
                src="https://tailwindui.com/img/logos/48x48/tuple.svg"
                alt=""
                className="h-16 w-16 flex-none rounded-full ring-1 ring-gray-900/10"
              />
              <h1>
                <div className="text-sm leading-6 text-gray-500">
                  Invoice <span className="text-gray-700">#00011</span>
                </div>
                <div className="mt-1 text-base font-semibold leading-6 text-gray-900">
                  Tuple, Inc
                </div>
              </h1>
            </div>
            <div className="flex items-center gap-x-4 sm:gap-x-6">
              <button
                type="button"
                className="hidden text-sm font-semibold leading-6 text-gray-900 sm:block"
              >
                Copy URL
              </button>
              <a
                href="#"
                className="hidden text-sm font-semibold leading-6 text-gray-900 sm:block"
              >
                Edit
              </a>
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Send
              </a>

              <Menu as="div" className="relative sm:hidden">
                <Menu.Button className="-m-3 block p-3">
                  <span className="sr-only">More</span>
                  <EllipsisVerticalIcon
                    className="h-5 w-5 text-gray-500"
                    aria-hidden="true"
                  />
                </Menu.Button>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-0.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          type="button"
                          className={classNames(
                            active ? "bg-gray-50" : "",
                            "block w-full px-3 py-1 text-left text-sm leading-6 text-gray-900"
                          )}
                        >
                          Copy URL
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? "bg-gray-50" : "",
                            "block px-3 py-1 text-sm leading-6 text-gray-900"
                          )}
                        >
                          Edit
                        </a>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 md:max-w-2xl md:grid-cols-2 lg:max-w-2xl xl:mx-0 xl:max-w-none xl:grid-cols-2">
            {pricing.tiers.map((tier) => (
              <div
                key={tier.id}
                className={classNames(
                  tier.mostPopular
                    ? "ring-2 ring-indigo-600"
                    : "ring-1 ring-gray-200",
                  "rounded-3xl p-8"
                )}
              >
                <h2
                  id={tier.id}
                  className={classNames(
                    tier.mostPopular ? "text-indigo-600" : "text-gray-900",
                    "text-lg font-semibold leading-8"
                  )}
                >
                  {tier.name}
                </h2>
                <p className="mt-4 text-sm leading-6 text-gray-600">
                  {tier.description}
                </p>
                <a
                  href={tier.href}
                  aria-describedby={tier.id}
                  className={classNames(
                    tier.mostPopular
                      ? "bg-indigo-600 text-white shadow-sm hover:bg-indigo-500"
                      : "text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300",
                    "mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  )}
                >
                  Buy plan
                </a>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default PollPage;
