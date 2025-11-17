import { useEffect, useState } from "react";
import "../App.css";
import Search from "../components/Search";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [searchInput, setSearchInput] = useState(""); 
  const [search, setSearch] = useState(""); 

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products", error));
  }, []);

  const filteredProducts =
    search.trim() === ""
      ? products
      : products.filter((product) => {
          const nameMatch = product.name
            .toLowerCase()
            .includes(search.toLowerCase());

          const categoryMatch = product.category
            ?.toLowerCase()
            .includes(search.toLowerCase());

          return nameMatch || categoryMatch;
        });

  return (
    <div>
      <Search 
        searchInput={searchInput} 
        setSearchInput={setSearchInput} 
        applySearch={() => setSearch(searchInput)} 
      />
      <div className="pd-container">

      {products.length === 0 ? (
        <p>Loading products...</p>
      ) : (
        filteredProducts.map((product) => (
          <div key={product.id} className="pd-card">
            {product.image_url && (
              <img
                src={`http://localhost:5000${product.image_url}`}
                alt={product.name}
                className="pd-img"
              />
            )}
            <h3 className="ptitle">{product.name}</h3>
            <p className="ptxt">{product.description}</p>
            <p className="ptxt">
              <strong>Price:</strong> ${product.price}
            </p>
          </div>
        ))
      )}
      </div>
    </div>
  );
}
