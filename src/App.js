import { Fragment, useState, useRef } from "react";
import TaskCard from "./components/TaskCard";
import Input from "./components/Input";

function App() {
  const [valueList, setValueList] = useState([]);
  const inputRef = useRef();

  const confirmHandler = (newValue, id) => {
    const previousList = [...valueList];
    const object = previousList.find((item) => item.id === id);
    previousList[previousList.indexOf(object)].value = newValue;
    setValueList([...previousList]);
  };

  const clickHandler = (event) => {
    if (inputRef.current.value !== "") {
      const newCard = {
        value: inputRef.current.value,
        id: `${inputRef.current.value} ${new Date().getTime()}`,
      };
      setValueList([...valueList, newCard]);
    }
    inputRef.current.value = "";
  };

  return (
    <div className="container px-3 py-8 ">
      <div className="md:flex">
        <Input inputRef={inputRef} />

        <button
          onClick={clickHandler}
          className="w-full bg-blue-500 flex justify-center p-2 rounded-md text-white md:w-4/12"
        >
          <img src="./plus-circle.svg" alt="Add icon" className="mr-2 w-6" />
          Add
        </button>
      </div>

      <div className="mt-10 py-5 border rounded-md  bg-white">
        <div className="font-bold text-xl text-center pb-2 md:text-left md:pl-3 md:pb-0">
          <h2>Todo list</h2>
        </div>
        {valueList.length < 1 ? (
          <div className="text-center mt-3">
            <p>There are no tasks!</p>
          </div>
        ) : (
          valueList.map(({ value, id }) => (
            <Fragment key={id}>
              <TaskCard
                info={{ title: value, id: id }}
                inputRef={inputRef}
                onDelete={(id) => {
                  const list = valueList.filter((item) => item.id !== id);
                  setValueList(list);
                }}
                onConfirm={confirmHandler}
              />
            </Fragment>
          ))
        )}
      </div>
    </div>
  );
}
export default App;
