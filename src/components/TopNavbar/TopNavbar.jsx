export default function TopNavbar() {
  return (
    <div className="sticky shadow-lg w-full p-4 flex items-center space-x-4">
      <div className="md:hidden">
        <button>
          <img src="Vector.svg" alt="Burger Button" />
        </button>
      </div>
      <div className="flex sm:justify-between justify-end items-center w-full">
        <div className="rounded-full shadow-lg px-2 py-1 sm:flex space-x-2 items-center w-full hidden sm:max-w-xs lg:max-w-md md:max-w-sm">
          <img src="/8666693_search_icon 1.svg" alt="Search" />
          <span>Search</span>
        </div>
        <div className="flex items-center space-x-2">
          <img src="user_10904350.svg" alt="User" />
          <span>John Doe</span>
        </div>
      </div>
    </div>
  );
}
