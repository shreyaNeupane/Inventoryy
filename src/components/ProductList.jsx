import React, { useEffect, useState } from "react";
import { Input } from "./ui/input"; // Custom input component
import Product from "./Product"; // Product card component

const ProductList = () => {
  // State variables
  const [products, setProducts] = useState([]); // List of all products
  const [error, setError] = useState(null); // Error state
  const [loading, setLoading] = useState(true); // Loading indicator
  const [searchText, setSearchText] = useState(""); // Text entered in the search input
  const [selectedCategory, setSelectedCategory] = useState("All"); // Currently selected category
  const [categories, setCategories] = useState([]); // List of all categories
  const [sortOrder, setSortOrder] = useState("default"); // Sorting option
  const [cart, setCart] = useState([]); // Items added to the cart

  // Fetch products from API when component loads
  const getProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const json = await response.json();

      setProducts(json); // Save products
      const uniqueCategories = ["All", ...new Set(json.map((p) => p.category))];
      setCategories(uniqueCategories); // Extract unique categories
      setLoading(false); // Stop loading after data is fetched
    } catch (error) {
      setError(error); // Save error
      setLoading(false); // Stop loading
    }
  };

  // Fetch data once when component is mounted
  useEffect(() => {
    getProducts();
  }, []);

  // Filter products based on search and category
  let filteredProducts = products.filter(
    (product) =>
      product.title.toLowerCase().includes(searchText.toLowerCase()) &&
      (selectedCategory === "All" || product.category === selectedCategory)
  );

  // Sort products based on price
  if (sortOrder === "lowToHigh") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortOrder === "highToLow") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  // Add product to cart
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  // Show loading message
  if (loading) return <p className="text-center p-4">Loading...</p>;

  // Show error message
  if (error) return <p className="text-center text-red-500">{error.message}</p>;

  return (
    <>
      {/* Top section: Search, Category Filter, Sort */}
      <div className="flex flex-col sm:flex-row gap-4 p-6 items-center">
        {/* Search bar */}
        <Input
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="w-full sm:w-1/3"
        />

        {/* Category filter */}
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="p-2 border rounded w-full sm:w-1/3"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category[0].toUpperCase() + category.slice(1)}
            </option>
          ))}
        </select>

        {/* Sort dropdown */}
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="p-2 border rounded w-full sm:w-1/3"
        >
          <option value="default">Sort by Price</option>
          <option value="lowToHigh">Low to High</option>
          <option value="highToLow">High to Low</option>
        </select>
      </div>

      {/* Cart summary */}
      <div className="px-6">
        <h2 className="text-xl font-bold mb-2">Cart ({cart.length} items)</h2>
        {cart.length > 0 ? (
          <ul className="list-disc ml-6 text-sm">
            {cart.map((item, index) => (
              <li key={index}>
                {item.title} - ${item.price}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 text-sm">Your cart is empty.</p>
        )}
      </div>

      {/* Display product cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {filteredProducts.length === 0 ? (
          <p className="text-center col-span-full">No products found.</p>
        ) : (
          filteredProducts.map((product) => (
            <Product
              product={product}
              key={product.id}
              onAddToCart={addToCart} // Pass add to cart function
            />
          ))
        )}
      </div>
    </>
  );
};

export default ProductList;
