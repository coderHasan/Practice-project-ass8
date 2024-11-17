import { useNavigate } from "react-router-dom";

const Card = ({ product }) => {
  const { name, image, price, id } = product || {};
  const naviget = useNavigate();
  return (
    <div>
      <div className="card bg-base-100 border shadow-xl">
        <figure className="p-3 bg-gray-400 w-full h-[200px]">
          <img className="w-full h-full rounded-xl" src={image} alt="name" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p className="text-gray-400">Price: ${price}</p>
          <div className="card-actions">
            <button
              onClick={() => naviget(`/dtails/${id}`)}
              className="py-2 px-5 border border-[#9538E2] rounded-full font-semibold text-textColor"
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
