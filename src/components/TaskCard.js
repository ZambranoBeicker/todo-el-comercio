import { useState } from "react";
import Input from "./Input";

export default function TaskCard({ onConfirm, onDelete, info }) {
  const [deleted, setDeleted] = useState(false);
  const [edit, setEdit] = useState(false);

  const Icons = () => (
    <div className="col-span-2 flex pb-2">
      <img
        src="./edit.svg"
        alt="Edit icon"
        className="w-full mr-2 h-auto bg-icons p-2 rounded-md cursor-pointer"
        onClick={() => setEdit((state) => !state)}
      />
      <img
        src="./trash.svg"
        alt="Delete icon"
        className="w-full mr-2 h-auto bg-icons p-2 rounded-md cursor-pointer"
        onClick={() => {
          setDeleted(true);
          setTimeout(() => {
            onDelete(info.id);
          }, 100);
        }}
      />
    </div>
  );

  return (
    <div
      className={`${
        deleted ? "leave" : "appear"
      } grid grid-cols-6 border-t pt-5 px-3 pb-0 mt-3 text-center md:flex md:justify-between`}
    >
      {edit ? (
        <>
          <Input
            isEdit
            onCancel={() => {
              setEdit(false);
            }}
            onConfirm={(newValue) => {
              setEdit(false);
              onConfirm(newValue, info.id);
            }}
          />
        </>
      ) : (
        <>
          <div className="text-left col-span-4">
            <p>{info.title}</p>
          </div>
          <Icons />
        </>
      )}
    </div>
  );
}
