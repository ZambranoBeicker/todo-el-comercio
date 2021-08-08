import { useState } from "react";

export default function TaskCard({ title, onDelete, id }) {
  const [deleted, setDeleted] = useState(false);
  return (
    <div
      className={`${
        deleted ? "leave" : "appear"
      } grid grid-cols-6 border-t pt-5 px-3 pb-0 mt-3 text-center md:flex md:justify-between`}
    >
      <div className="text-left col-span-4">
        <p>{title}</p>
      </div>
      <div className="col-span-2 flex pb-2">
        <img
          src="./edit.svg"
          alt="Edit icon"
          className="w-full mr-2 h-auto bg-icons p-2 rounded-md cursor-pointer"
        />
        <img
          src="./trash.svg"
          alt="Delete icon"
          className="w-full mr-2 h-auto bg-icons p-2 rounded-md cursor-pointer"
          onClick={() => {
            setDeleted(true);
            setTimeout(() => {
              onDelete(id);
            }, 200);
          }}
        />
      </div>
    </div>
  );
}
