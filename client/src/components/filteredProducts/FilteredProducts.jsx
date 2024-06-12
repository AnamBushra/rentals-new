import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import NoProducts from "./NoProducts";

const FilteredProducts = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [count, setcount] = useState(0);
  const location = useLocation();
  const { city, category } = location.state || {};
  const navigate = useNavigate();
  // Now, city and category should be defined
  console.log("City:", city);
  console.log("Category:", category);

  //  const city="Manali";
  //  const category="Vehicles"
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `https://rent-n-roam.onrender.com/get-products`
        );
        if (response.data.products) {
          setProducts(response.data.products);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false); // Set loading to false after data is fetched
      }
    };

    fetchProducts();
  }, []);
  useEffect(() => {
    // Update the count when products or filter criteria change

    const filteredProducts = products.filter(
      (item) => item.pcity === city && item.category === category
    );
    setcount(filteredProducts.length);
  }, [products, city, category]);
  return (
    <>
      {loading ? (
        <div>
          <h2 style={{ marginTop: "50px" }}>Loading....</h2>
        </div> // Display a loading indicator while fetching data
      ) : (
        <div className="container">
          <div
            className="bigbox"
            style={{ marginTop: "20px", textAlign: "center" }}
          >
            <h2>
              {category} in {city}
            </h2>
            <div className="d-flex justify-content-center flex-wrap">
              {products.map(
                (item, index) =>
                  item.pcity === city &&
                  item.category === category && (
                    <div
                      className="card"
                      style={{
                        margin: "20px",
                        width: "250px",
                        cursor: "pointer",
                      }}
                      key={index}
                      onClick={() => {
                        navigate(`/product/${item._id}`);
                      }}
                    >
                      <img
                        width="250px"
                        height="150px"
                        src={`https://rent-n-roam.onrender.com/${item.pimage}`}
                        alt={item.pname}
                      />

                      <h3 className="m-2 price-text text-danger">
                        {" "}
                        Rs. {item.price} /-{" "}
                      </h3>
                      <p className="m-2">
                        {" "}
                        {item.pname} | {item.category}{" "}
                      </p>
                      <p className="m-2 text-success"> {item.pdesc} </p>
                    </div>
                  )
              )}
            </div>
            {!count && <NoProducts />}
          </div>
        </div>
      )}
    </>
  );
};

export default FilteredProducts;
