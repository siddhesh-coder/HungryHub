import { useState, useEffect } from "react";
import CardContainer from "./CardContainer";
import Shimmer from "../Shimmers/Shimmer";
import { Link } from "react-router-dom";
import LabeledCardContainer from "../../HOC/LabeledCardContainer";
import Filter from "./Filter";

const Restros = ({ resList }) => {
  const [resLists, setResList] = useState([]);  

  useEffect(() => {
    if (Array.isArray(resList)) {
      setResList(resList);
    }
  }, [resList]);

  const LabelComponent = LabeledCardContainer(CardContainer); // HOC

  return (
    <>
      <Filter resList={resList} setResList={setResList} />
      <div className="flex flex-wrap">
        {resLists.length === 0 ? (
          <Shimmer count={10} />
        ) : (
          resLists.map((restro) => (
            <Link
              key={restro.info.id}
              className="bg-white bg-opacity-75 decoration-0"
              to={"/restaurants/" + restro.info.id}
            >
              {restro.info.avgRating >= 4.5 ? (
                <LabelComponent foodData={restro} />
              ) : (
                <CardContainer foodData={restro} />
              )}
            </Link>
          ))
        )}
      </div>
    </>
  );
};

export default Restros;