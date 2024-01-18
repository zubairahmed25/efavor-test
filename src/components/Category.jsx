import CategoryBox from "./CategoryBox";
import { useContext } from "react";
import { GlobalContext } from "../GlobalContext/Context";

function Category() {
  const { categories } = useContext(GlobalContext)

  return (
    <div className="container">
      <div className="category">
        {(categories?.recommend || []).map((category) => {
          return (
            <CategoryBox data={category}
              key={category.id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Category;
