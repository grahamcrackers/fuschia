import { GetCurrencyDocument } from "@fuschia/graphql";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { graphqlClient } from "../../utils";

const currencies = ["CAD", "USD", "AUD", "EUR", "GBP"];

export async function CurrencySelector() {
    return (
        <form className="hidden lg:block lg:flex-1">
            <div className="flex">
                <label htmlFor="desktop-currency" className="sr-only">
                    Currency
                </label>
                <div className="group relative -ml-2 rounded-md border-transparent bg-gray-900 focus-within:ring-2 focus-within:ring-white">
                    <select
                        id="desktop-currency"
                        name="currency"
                        className="flex items-center rounded-md border-transparent bg-gray-900 bg-none py-0.5 pl-2 pr-5 text-sm font-medium text-white focus:border-transparent focus:outline-none focus:ring-0 group-hover:text-gray-100"
                    >
                        {currencies.map((currency) => (
                            <option key={currency}>{currency}</option>
                        ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center">
                        <ChevronDownIcon className="h-5 w-5 text-gray-300" aria-hidden="true" />
                    </div>
                </div>
            </div>
        </form>
    );
}
