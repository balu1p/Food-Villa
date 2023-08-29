import { useParams } from "react-router-dom";
import { foodData } from "./Body";


const Details = () => {
    const {id} = useParams()
    console.log(id)
   let data;
  
        for(let x of foodData ) {
            console.log(x.id)
            if(x.id == id) {
                data = x;
                break;
            }
        }
    
    console.log(data)
  return (
    <div className=" flex mt-44 align-middle justify-center">
    
      <div className="h-48">
        <img
          src={data.img}
          alt={data.name}
          className="h-full w-96 object-cover"
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{data.name}</h2>
        <p className="text-gray-600">{data.description}</p>
        <p className="text-gray-900">&#8377; {data.price}</p>
      </div>
    </div>
  );
};
export default Details;
