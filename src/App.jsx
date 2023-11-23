import "./App.css";

function App() {
  return (
    <div className="flex flex-col md:flex-row h-screen w-content m-auto items-center justify-center">
      <div className="md:mx-10 my-5 cursor-pointer">
        <img
          width={300}
          className="my-2"
          height={300}
          src="https://www.shutterstock.com/image-photo/bloggingblog-concepts-ideas-white-worktable-600nw-1029506242.jpg"
          alt=""
        />
        <h3 className="text-center">Blog website</h3>
      </div>
      <div className="md:mx-10 my-5 text-center cursor-pointer">
        <img
          className="my-2"
          width={300}
          height={300}
          src="https://spmrf.org/wp-content/uploads/2019/08/economics.jpg"
          alt=""
        />
        <h3>Ecommerce website</h3>
      </div>
      <div className="md:mx-10 my-5 text-center cursor-pointer  `">
        <img
          className="my-2"
          width={300}
          height={300}
          src="https://www.shutterstock.com/image-photo/wellness-sign-wooden-cubes-flowers-260nw-384943213.jpg"
          alt=""
        />
        <h3>Health Wellness</h3>
      </div>
      <div className="md:mx-10 my-5 text-center cursor-pointer  `">
        <img
          className="my-2"
          width={300}
          height={300}
          src="https://www.shutterstock.com/image-photo/wellness-sign-wooden-cubes-flowers-260nw-384943213.jpg"
          alt=""
        />
        <h3>ChatBot</h3>
      </div>
    </div>
  );
}
export default App;
