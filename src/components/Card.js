
const Card = ({
    img, name, description, price
}) => {
  return (
    <div>
      <div className="h-48">
        <img
          src={img}
          alt={name}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{name}</h2>
        <p className="text-gray-600">{description}</p>
        <p className="text-gray-900">&#8377; {price}</p>
      </div>
    </div>
  );
};
export default Card;
