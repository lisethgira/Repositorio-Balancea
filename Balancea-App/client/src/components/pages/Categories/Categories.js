import React, { useState, useEffect } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";

//Styles
import styles from "./Categories.module.css";

//Material UI Icons
import LayersIcon from "@mui/icons-material/Layers";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CircleIcon from "@mui/icons-material/Circle";

//Components
import NewCategory from "../NewCategory/NewCategory";
import UpdateCategory from "../UpdateCategory/UpdateCategory";
import RightMenu from "../../RightMenu/RightMenu";

//ContextAPI
import { useContext } from "react";
import AuthContext from "../../../context/AuthContext";

const Categories = () => {
  const [incomeCategoryList, setIncomeCategoryList] = useState([]);
  const [expensesCategoryList, setExpensesCategoryList] = useState([]);

  const [favoriteCategoryList, setFavoriteCategoryList] = useState([]);

  const { userId } = useContext(AuthContext);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/categories/find/" + userId, {
        withCredentials: true,
      })
      .then((res) => {
        setIncomeCategoryList(
          res.data.filter((category) => category.type === "income")
        );
        setExpensesCategoryList(
          res.data.filter((category) => category.type === "expense")
        );
      })
      .catch((error) => console.log(error));
  }, [userId]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/transactions/find/" + userId, {
        withCredentials: true,
      })
      .then((res) => {
        let allTransactionsList = res.data;

        const map = new Map();

        for (let i = 0; i < allTransactionsList.length; i++) {
          if (!map.has(allTransactionsList[i].category)) {
            map.set(allTransactionsList[i].category, 1);
          } else {
            let counter = map.get(allTransactionsList[i].category);
            counter = counter + 1;
            map.set(allTransactionsList[i].category, counter);
          }
        }
        let newMap = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));
        let allCategoriesUsed = [];
        for (const key of newMap.keys()) {
          allCategoriesUsed.push(key);
        }
        allCategoriesUsed.splice(3);
        setFavoriteCategoryList(allCategoriesUsed);
      })
      .catch((error) => console.log(error));
  }, [userId]);

  const deleteCategory = (_id) => {
    axios
      .delete("http://localhost:8000/api/categories/" + _id, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
        axios
          .get("http://localhost:8000/api/categories/find/" + userId, {
            withCredentials: true,
          })
          .then((res) => {
            setIncomeCategoryList(
              res.data.filter((category) => category.type === "income")
            );
            setExpensesCategoryList(
              res.data.filter((category) => category.type === "expense")
            );
          })
          .catch((error) => console.log(error));
      });
  };

  //NEW CATEGORY
  const [newCategoryClicked, setNewCategoryClicked] = useState(false);
  const [updateCategoryClicked, setUpdateCategoryClicked] = useState(false);
  const [activeCategoryId, setActiveCategoryId] = useState(null);

  return (
    <>
      <div className={styles.page}>
        <div className={styles.categories}>
          <h2 className={styles.page__title}>Categorías</h2>
          <div className={styles.categories__label}>
            <h2 className={styles.categories__title}>Categorías Favoritas</h2>
            <button
              className={styles.categories__add}
              onClick={(e) => setNewCategoryClicked(true)}
            >
              <AddIcon fontSize="small"></AddIcon>
              Agregar Categoría
            </button>
          </div>
          <ul className={styles.categories__favoriteCategories}>
            {favoriteCategoryList.map((category) => (
              <li className={styles.categories__favoriteCategory}>
                <div className={styles.categories__icon}>
                  <LayersIcon style={{ fontSize: 25.5 }}></LayersIcon>
                </div>
                {category}
              </li>
            ))}
          </ul>

          <h4 className={styles.categories__title}>Todas las Categorías</h4>
          <div className={styles.categories__allCategories}>
            <div>
              <h2 className={styles.categories__title}>Catgorías de Gastos</h2>
              <div className={styles.scroll__bar__right}>
                {expensesCategoryList.length === 0 ? (
                  <p>Aún no tienes ninguna categoría de gastos</p>
                ) : (
                  expensesCategoryList.map((category, index) => (
                    <div className={styles.categories__card} key={index}>
                      <div className={styles.card__left}>
                        <CircleIcon
                          className={styles.card__circle}
                          style={{ fontSize: 13, color: category.color }}
                        ></CircleIcon>
                        <p>{category.categoryName}</p>
                      </div>
                      <div>
                        <button
                          className={styles.card__edit}
                          onClick={(e) => {
                            setUpdateCategoryClicked(true);
                            setActiveCategoryId(category._id);
                          }}
                        >
                          <EditIcon></EditIcon>
                        </button>

                        <button
                          className={styles.card__delete}
                          onClick={() => deleteCategory(category._id)}
                        >
                          <DeleteIcon></DeleteIcon>
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
            <div>
              <h2 className={styles.categories__title}>
                Categorías de Ingresos
              </h2>
              <div className={styles.scroll__bar__right}>
                {incomeCategoryList.length === 0 ? (
                  <p>Aún no tienes ninguna categoría de ingresos</p>
                ) : (
                  incomeCategoryList.map((category, index) => (
                    <div className={styles.categories__card} key={index}>
                      <div className={styles.card__left}>
                        <CircleIcon
                          className={styles.card__circle}
                          style={{ fontSize: 13, color: category.color }}
                        ></CircleIcon>
                        <p>{category.categoryName}</p>
                      </div>

                      <div>
                        <button
                          className={styles.card__edit}
                          onClick={(e) => {
                            setUpdateCategoryClicked(true);
                            setActiveCategoryId(category._id);
                          }}
                        >
                          <EditIcon></EditIcon>
                        </button>

                        <button
                          className={styles.card__delete}
                          onClick={() => deleteCategory(category._id)}
                        >
                          <DeleteIcon></DeleteIcon>
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <RightMenu></RightMenu>

      {newCategoryClicked ? (
        <NewCategory click={setNewCategoryClicked}></NewCategory>
      ) : null}

      {updateCategoryClicked ? (
        <UpdateCategory
          categoryId={activeCategoryId}
          click={setUpdateCategoryClicked}
        ></UpdateCategory>
      ) : null}

      {updateCategoryClicked ? console.log(activeCategoryId) : null}
    </>
  );
};

export default Categories;
