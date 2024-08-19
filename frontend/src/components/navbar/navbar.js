import '../../App';

const Navbar = () => {
  return (
    <div>
      <nav className="bg-black border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="https://www.abstract.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHENnu5kFzmgLNKZf94d3EfTJvpXlG7x_8arlo3Mncz2A6PhGLqwxXFU8AppmJEPnNnPs&usqp=CAU" className="h-8 bg-black" alt="Logo" />
            <span className="self-center text-1xl font-normal whitespace-nowrap text-white">Abstract | Help Center</span>
          </a>
          
          <button 
            type="button" 
            onClick={() => window.location.href = 'https://help.abstract.com/hc/en-us/articles/360050382291-Contact-Support'}
            className="text-gray-900 border border-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 bg-gray-800 text-white dark:border-gray-600 dark:focus:ring-gray-700"
          >
            Submit a request
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
