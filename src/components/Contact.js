

const Contact = () => {
  
    
    return (
        <div className="flex justify-center items-center h-screen">
          <form className="w-96 p-6 bg-white shadow-md rounded-lg">
            <div className="mb-4">
              <label className="block font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                className="w-96 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-96 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block font-medium mb-1">
                Phone No
              </label>
              <input
                type="text"
                className="w-96 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 mt-4" 
            >
              Contact us
            </button>
          </form>
        </div>
      );
}
export default Contact;