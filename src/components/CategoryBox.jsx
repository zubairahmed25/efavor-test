import PropTypes from "prop-types";
import { Link } from "react-router-dom";

Category_box.propTypes = {
  data: PropTypes.object,
};

function Category_box({ data }) {
  return (
    <Link className="category_box" to={`/category?id=${data.id}`}>
      <img src={data?.image_url} alt={data.title} />
      <span>{data?.title}</span>
    </Link>
  );
}

export default Category_box;
