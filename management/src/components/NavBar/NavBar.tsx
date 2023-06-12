import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { useNavigate } from 'react-router-dom'

export default function NavigationBar() {
  const [loading, setLoading] = useState(false);
  //   const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setLoading(true);

    // remove this when fetch request is live
    let skip = false;

    // start a fetch request to search for the products with the search term, return an aborted fetch operation
    const abortController = new AbortController();
    const signal = abortController.signal;

    // fetch the products
    // fetch(`https://fakestoreapi.com/products?search=${searchTerm}`, {
    //   signal: signal,
    // });

    // fake a fetch request with a timeout
    setTimeout(() => {
      // setLoading(false); // uncomment when fetch request is live

      // remove this when fetch request is live
      if (!skip) {
        setLoading(false);
      }
    }, 1000);

    // return a function to abort the fetch operation
    return () => {
      //   abortController.abort();
      skip = true; // remove this when fetch request is live
    };
  }, [searchTerm]);
  const navigate = useNavigate()

  const navigateToAcountPage = () => {
    // 👇️ navigate to /contacts
    navigate('/account')
  }
  return (
    <div className="w-full h-20 flex flex-row items-center justify-between pl-24 pr-28 bg-primary rounded">
      <div className="flex flex-row gap-4">
        <button>Home</button>
        <button>About</button>
        <button>Products</button>
      </div>
      <div className="flex flex-row gap-4">
        <div className="w-80 h-full flex items-center relative">
          <input
            type="text"
            className="py-3 px-4 pl-10 block w-full h-12 shadow-sm rounded-full text-sm border-4 border-secondary"
            placeholder="Input search"
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
          <div
            className={`transition-opacity absolute left-0 flex items-center pointer-events-none pl-4 ${
              loading ? "opacity-0" : "opacity-100"
            }`}
          >
            <svg
              className={`h-4 w-4 ${loading ? "opacity-0" : "opacity-100"}`}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </div>
          <div
            className={`transition-opacity absolute left-0 flex items-center pointer-events-none pl-4 ${
              loading ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className="animate-spin inline-block w-4 h-4 border-[3px] border-current border-t-transparent text-secondary rounded-full"
              role="status"
              aria-label="loading"
            >
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        </div>
        <div className="rounded-full bg-secondary aspect-square w-12 h-12 flex items-center justify-center relative">
          <Icon icon="ic:outline-shopping-cart" width="2rem" color="#f2f1df" />
          <div className="absolute rounded-full bg-red-500 font-bold text-white px-2 py-1 -right-3 -bottom-2 text-sm">
            13
          </div>
        </div>
        <div>
          <img
            src="/account-circle.svg"
            className="rounded-full w-12 h-12 object-cover bg-secondary"
            alt="user image"
            onClick={navigateToAcountPage}
          />
        </div>
      </div>
    </div>
  );
}