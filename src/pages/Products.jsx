import { useEffect, useState } from "react";
import "../App.css";

export default function Products() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        //fetching data from backend
        fetch("http://localhost:5000/api/products")
        .then((response) => response.json())
        .then((data) => setProducts(data))
        .catch((error) => console.error("Error fetching products", error));
    }, []);
    return (
        <div className="Products">
            <div className="pd-container">
                {products.length === 0 ? (
                    <p>Loading products...</p>
                ) : (
                
                products.map((product) => (
                    <div key={product.id} className="pd-card">
                        {product.image && (
                            <img
                            src={product.image}
                            alt={product.name}
                            className="pd-img"
                            />
                        )}
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p><strong>Price:</strong> ${product.price}</p>
                        </div>
                ))
            )}
            </div>
        </div>
    );

};

