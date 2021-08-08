import { Fragment } from "react";
import TaskCard from "./components/TaskCard";

function App() {
  const valueList = [
    "Pug JS - Inducción Extends Block",
    "Stylus JS",
    "React JS - Inducción Props y States",
    "Vue JS - Inducción LifeCycle",
  ];
  return (
    <div className="container px-3 py-8 ">
      <div className="md:flex">
        <input
          type="text"
          placeholder="agrega el tema a revisar..."
          className="block border px-5 py-2 rounded-md md:w-8/12 md:mb-0 md:mr-7 "
        />

        <button className="bg-blue-500 flex justify-center p-2 rounded-md text-white md:w-4/12">
          <img src="./plus-circle.svg" alt="Add icon" className="mr-2 w-6" />
          Add
        </button>
      </div>

      <div className="mt-10 py-5 border rounded-md  bg-white">
        <div className="font-bold text-xl  md:text-left md:pl-3 md:pb-0">
          <h2>Todo list</h2>
        </div>
        {valueList.length < 1 ? (
          <div className="text-center mt-3">
            <p>There are no tasks!</p>
          </div>
        ) : (
          valueList.map((value, index) => (
            <Fragment key={index}>
              <TaskCard title={value} />
            </Fragment>
          ))
        )}
      </div>
    </div>
  );
}
export default App;
