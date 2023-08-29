import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="sticky top-0">
        <div className="flex justify-between bg-yellow-200 shadow fixed top-0 left-0 w-full h-[70px] z-50">
          <img
            className="h-16 p-1 m-3"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS61VN62gBZkGyuWJUlkgPFWpe9X4usrLEbVA&usqp=CAU"
            alt="Crowne Plaza"
          />
          <ul className="flex space-x-9 ml-96 items-center container mx-auto py-4 sticky top-0">
            <li className="text-black hover:text-orange-600 p-2  hover:underline">
            <Link to={"/"}>Home</Link>
            </li>
            <li className="text-black hover:text-orange-600 p-2  hover:underline">
            <Link to={"/about"}>About</Link>
            </li>
            <li className="text-black hover:text-orange-600 p-2  hover:underline">
            <Link to={"/contact"}>Contact us</Link>
            </li>
          </ul>
          <div className="flex space-x-3 justify-end ml-56">
            <button className="rounded-lg text-black hover:text-orange-600 p-1">Login</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
