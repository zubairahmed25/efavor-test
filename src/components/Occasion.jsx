import { useCallback, useContext } from "react";
import { GlobalContext } from "../GlobalContext/Context";
import { useNavigate } from "react-router-dom";

function Occasion() {
  const { categories } = useContext(GlobalContext)
  const navigate=useNavigate()
  const occasions = useCallback(() => {
    return categories?.categories?.filter(obj => obj.level === 1)
  }, [categories])()
  console.log('occasions', occasions);
  return (
    <div className="container">
      <div className="flex">
        {occasions?.map((occasion) => (
          <div key={occasion?.id} onClick={() =>navigate(`/category?id=${occasion.id}`)}>
            <img src={occasion.image_url} alt={occasion.title} />
            <p>{occasion.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Occasion;
