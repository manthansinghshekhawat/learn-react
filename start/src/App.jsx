import "./App.css";

function App() {
  return (
    <>
      <div className="max-w-sm bg-white border border-grey-200 rounded -xl mt-8 shadow overflow-hidden transition-shadow">
        <img
          className="object-cover w-full h-50"
          src="https://images.unsplash.com/photo-1509042239860-f550ce710b93"
          alt="Sample Image"
        ></img>
        <div className="p-4">
          <h2 className="text-lg font-semibold  text-gray-800">Card Title</h2>
          <p className="mt-2 text-gray-600 text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit cum
            ducimus, hic laboriosam reiciendis dolor?
          </p>
          <button className="mt-4 px-4 bg-blue-400 rounded-lg text-white py-2 hover:bg-blue-700">
            Buy Now
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
