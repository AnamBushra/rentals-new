import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./catPage.css";

function CatPage() {
  const navigate = useNavigate();
  const [openCategory, setOpenCategory] = useState(null);

  useEffect(() => {
    const arrowButtons = document.querySelectorAll(".arrow-button");

    const handleClick = (button, subcategoryList) => {
      const categoryItem = button.parentElement;

      setOpenCategory(categoryItem);

      const categoryItems = document.querySelectorAll(".category-item");
      categoryItems.forEach((item) => {
        if (item !== categoryItem) {
          item.classList.remove("open");
          item.querySelector(".subcategory-list").style.display = "none";
        }
      });

      categoryItem.classList.toggle("open");
      // subcategoryList.style.display = subcategoryList.style.display === "none" ? "block" : "none";
      subcategoryList.style.display = "block";
    };

    arrowButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
        event.stopPropagation(); // Prevent the event from reaching the document and causing issues

        const subcategoryList =
          button.parentElement.querySelector(".subcategory-list");
        handleClick(button, subcategoryList);
      });
    });

    // Cleanup event listeners when the component unmounts
    return () => {
      arrowButtons.forEach((button) => {
        button.removeEventListener("click", () => {});
      });
    };
  }, [openCategory]);

  const handleClickSub = (cat, subcat) => {
    navigate("/addproduct", { state: { category: cat, subcategory: subcat } });
  };

  return (
    <div>
      <div className="abcde" id="abcde">
        <div className="FreshMango">
          <Link to="/">
            <span className="cherry" aria-label="Back">
              <i className="bi bi-arrow-left" style={{ fontSize: "30px" }}></i>
            </span>
          </Link>
        </div>
      </div>
      <div className="p-3">
        <h3 style={{ marginTop: "20px" }}>POST YOUR AD:</h3>
        <div className="containerbox">
          <h5
            style={{
              marginTop: "15px",
              float: "left",
              marginLeft: "15px",
              marginBottom: "15px",
            }}
          >
            Choose a Category
          </h5>
          <div className="category-box">
            <ul className="category-list">
              <li className="category-item" id="first">
                Vehicles
                <div className="arrow-button"></div>
                <ul className="subcategory-list">
                  <li
                    className="subitem"
                    onClick={() => handleClickSub("Vehicles", "Car")}
                  >
                    Car
                  </li>
                  <li
                    className="subitem"
                    onClick={() => handleClickSub("Vehicles", "Two-Wheelers")}
                  >
                    Two-Wheelers
                  </li>
                  <li
                    className="subitem"
                    onClick={() => handleClickSub("Vehicles", "Bicycle")}
                  >
                    {" "}
                    Bicycle
                  </li>
                </ul>
              </li>
              <li className="category-item">
                Rooms
                <div className="arrow-button"></div>
                <ul className="subcategory-list">
                  <li
                    className="subitem"
                    onClick={() => handleClickSub("Rooms", "Single-Bed")}
                  >
                    1 Bed
                  </li>
                  <li
                    className="subitem"
                    onClick={() => handleClickSub("Rooms", "Double-Bed")}
                  >
                    2 Bed{" "}
                  </li>
                  <li
                    className="subitem"
                    onClick={() => handleClickSub("Rooms", "Multi-Bed")}
                  >
                    3+ Bed
                  </li>
                </ul>
              </li>

              <li className="category-item">
                Clothes
                <div className="arrow-button"></div>
                <ul className="subcategory-list">
                  <li
                    className="subitem"
                    onClick={() => handleClickSub("Clothes", "Winter")}
                  >
                    Winter Clothes
                  </li>
                  <li
                    className="subitem"
                    onClick={() => handleClickSub("Clothes", "All")}
                  >
                    Others{" "}
                  </li>
                </ul>
              </li>
              <li className="category-item">
                Tour Guide
                <div className="arrow-button"></div>
                <ul className="subcategory-list">
                  <li
                    className="subitem"
                    onClick={() => handleClickSub("Guides", "Guides")}
                  >
                    BookYour Tour Guide beforehand
                  </li>
                </ul>
              </li>
              <li className="category-item">
                Hiking Gear
                <div className="arrow-button"></div>
                <ul className="subcategory-list">
                  <li
                    className="subitem"
                    onClick={() => handleClickSub("Hiking Gear", "Bagpacks")}
                  >
                    Bagpacks
                  </li>
                  <li
                    className="subitem"
                    onClick={() => handleClickSub("Hiking Gear", "Equipments")}
                  >
                    Equipments{" "}
                  </li>
                  <li
                    className="subitem"
                    onClick={() => handleClickSub("Hiking Gear", "Others")}
                  >
                    Others
                  </li>
                </ul>
              </li>
              <li className="category-item">
                Camera Accessories
                <div className="arrow-button"></div>
                <ul className="subcategory-list">
                  <li
                    className="subitem"
                    onClick={() =>
                      handleClickSub("Camera & Accessories", "Cameras")
                    }
                  >
                    Cameras
                  </li>
                  <li
                    className="subitem"
                    onClick={() =>
                      handleClickSub("Camera & Accessories", "Tripods")
                    }
                  >
                    Tripods{" "}
                  </li>
                  <li
                    className="subitem"
                    onClick={() =>
                      handleClickSub("Camera & Accessories", "Others")
                    }
                  >
                    Others
                  </li>
                </ul>
              </li>
              <li className="category-item">
                Camping Equipment
                <div className="arrow-button"></div>
                <ul className="subcategory-list">
                  <li
                    className="subitem"
                    onClick={() =>
                      handleClickSub("Camping Gear", "Toileteries")
                    }
                  >
                    Travel Toileteries
                  </li>
                  <li
                    className="subitem"
                    onClick={() => handleClickSub("Camping Gear", "Tents")}
                  >
                    Tents{" "}
                  </li>
                  <li
                    className="subitem"
                    onClick={() => handleClickSub("Camping Gear", "Others")}
                  >
                    Others
                  </li>
                </ul>
              </li>
              <li className="category-item">
                Others
                <div className="arrow-button"></div>
                <ul className="subcategory-list">
                  <li
                    className="subitem"
                    onClick={() => handleClickSub("Other", "Other")}
                  >
                    Others
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CatPage;
