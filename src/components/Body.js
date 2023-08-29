import { useEffect, useState } from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Details from "./Details";


export const foodData = [
  {
    id: 1,
    CategoryName: "Biryani/Rice",
    name: "Chicken Fried Rice",
    img: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpY2tlbiUyMGZyaWVkJTIwcmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    description:
      "Made using Indian masalas and Basmati rice.",
      price: 200,
  },
  {
    id: 2,
    CategoryName: "Biryani/Rice",
    name: "Veg Fried Rice",
    img: "https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dmVnJTIwZnJpZWQlMjByaWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    description: "Made using Indian masalas and Basmati rice.",
    price: 110,
},
  {
    id: 3,
    CategoryName: "Biryani/Rice",
    name: "Fish Biryani",
    img: "https://media.istockphoto.com/photos/king-fish-biryani-with-raita-served-in-a-golden-dish-isolated-on-dark-picture-id1409942571?b=1&k=20&m=1409942571&s=170667a&w=0&h=ozlMJf5hsDmS2sSdEdBWnoSZOEITef4qGMeWeq2lyTc=",
    description:
      "Made using Indian masalas and Basmati rice.",
      price: 150,
  },
  {
    id: 4,
    CategoryName: "Biryani/Rice",
    name: "Chicken Biryani",
    img: "https://cdn.pixabay.com/photo/2019/11/04/12/16/rice-4601049__340.jpg",
    description:
      "Barbequed pieces of Paneer/Chicken/Mutton were added.",
      price: 250,
  },
  {
    id: 5,
    CategoryName: "Biryani/Rice",
    name: "Veg Biryani",
    img: "https://media.istockphoto.com/photos/veg-biryani-picture-id1363306527?b=1&k=20&m=1363306527&s=170667a&w=0&h=VCbro7CX8nq2kruynWOCO2GbMGCea2dDJy6O6ebCKD0=",
    description:
      "Barbequed pieces of Paneer/Chicken/Mutton were added.",
      price: 120,
  },
  {
    id: 6,
    CategoryName: "Biryani/Rice",
    name: "Prawns Fried Rice",
    img: "https://cdn.pixabay.com/photo/2018/03/23/08/27/thai-fried-rice-3253027__340.jpg",
    description:
      "Barbequed pieces of Paneer/Chicken/Mutton were added.",
      price: 180,
  },
  {
    id: 7,
    CategoryName: "Starter",
    name: "Chilli Paneer",
    img: "https://media.istockphoto.com/photos/spicy-paneer-or-chilli-paneer-or-paneer-tikka-or-cottage-cheese-in-picture-id697316634?b=1&k=20&m=697316634&s=170667a&w=0&h=bctfHdYTz9q2dJUnuxGRDUUwC9UBWjL_oQo5ECVVDAs=",
    description:
      "Made using Indian masalas and Basmati rice.",
      price: 140,
  },
  {
    id: 8,
    CategoryName: "Starter",
    name: "Paneer 65",
    img: "https://media.istockphoto.com/photos/paneer-tikka-kabab-in-red-sauce-is-an-indian-dish-made-from-chunks-of-picture-id1257507446?b=1&k=20&m=1257507446&s=170667a&w=0&h=Nd7QsslbvPqOcvwu1bY0rEPZXJqwoKTYCal3nty4X-Y=",
    description:
      "Made using Indian masalas and Basmati rice.",
      price: 220,
  },
  {
    id: 9,
    CategoryName: "Starter",
    name: "Chicken Tikka",
    img: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpY2tlbiUyMHRpa2thfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    description:
      "Barbequed pieces of Paneer/Chicken/Mutton were added.",
      price: 280,
  },
  {
    id: 10,
    CategoryName: "Starter",
    name: "Paneer Tikka",
    img: "https://media.istockphoto.com/photos/paneer-tikka-at-skewers-in-black-bowl-at-dark-slate-background-paneer-picture-id1186759790?k=20&m=1186759790&s=612x612&w=0&h=e9MlX_7cZtq9_-ORGLPNU27VNP6SvDz7s-iwTxrf7wU=",
    description:
      "Made using Indian masalas and Basmati rice.",
      price: 230,
  },
  {
    id: 11,
    CategoryName: "Pizza",
    name: "Chicken Cheese Pizza",
    img: "https://media.istockphoto.com/photos/double-topping-pizza-on-the-wooden-desk-isolated-picture-id1074109872?k=20&m=1074109872&s=612x612&w=0&h=JoYwwTfU_mMBykXpRB_DmgeecfotutOIO9pV5_JObpk=",
    description:
      "Made using Indian masalas and Basmati rice.",
      price: 350,
  },
  {
    id: 12,
    CategoryName: "Pizza",
    name: "Mix Veg Pizza",
    img: "https://media.istockphoto.com/photos/chinese-food-veg-pizza-picture-id1341905237?k=20&m=1341905237&s=612x612&w=0&h=Lbuza1Ig5cC1PwQhqTsq-Uac8hg1W-V0Wx4d4lqDeB0=",
    description:
      "Barbequed pieces of Paneer/Chicken/Mutton were added.",
      price: 200,
  },
];
const Body = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("")
  const [filterData, setFilterData] = useState([])
  const {id} = useParams()
  useEffect(() => {
    setData(foodData);
    setFilterData(foodData);
  }, []);
  const handleSearch = () => {
    console.log("Search button clicked");
    const searchData = data.filter(item =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilterData(searchData);
  }
  return (
    <>
    <div className="text-center">
    <input
    type="text"
    className=" p-2 mt-20 text-sm font-medium text-slate-700 appearance-none border-2 border-gray-300 rounded-md w-72 py-2 px-4 focus:outline-none focus:border-blue-500"
    placeholder="Search"
    value={search}
    onChange={(e) => {
      setSearch(e.target.value);
    }}
  />
  <button
  className="mt-20 bg-gray-800 text-teal-50 p-2 rounded hover:bg-slate-950"
  onClick={handleSearch}
>
  Search
</button>
    </div>
    <div className="flex justify-evenly mt-5 mx-auto mb-14 max-w-screen-xl">
    
      <div className="grid grid-cols-3 gap-3">
     
        {filterData.map((item, index) => (
          <div
            key={index.id}
            className="bg-white rounded-lg overflow-hidden shadow-md border border-transparent hover:border-gray-800 transition duration-300 ease-in-out"
          >
          <Link to = {`/details/${item.id}`}>
            <Card key={item.id} {...item}/>
            </Link>
            
          </div>
          
        ))}
      </div>
    </div>
    </>
  );
};
export default Body;
