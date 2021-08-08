import { useState } from "react";

export default function Input({ onConfirm, inputRef, isEdit, onCancel }) {
  const [animation, setAnimation] = useState("appear");
  const [value, setvalue] = useState("");

  const defaultField = (
    <input
      ref={inputRef ? inputRef : null}
      type="text"
      placeholder="Agrega el tema a revisar..."
      className="border mb-5 rounded-md w-full  block px-3 py-2  md:w-8/12 md:mb-0 md:mr-7 md:px-5"
    />
  );

  const editField = (
    <div
      className={`${animation} flex col-span-6 border mb-5 rounded-md md:w-full`}
    >
      <input
        ref={inputRef ? inputRef : null}
        type="text"
        placeholder="Editar TODO"
        className="relative w-full block px-3 py-2 md:mb-0 md:mr-auto md:px-5 "
        onChange={(event) => setvalue(event.target.value)}
      />
      <img
        src="./confirm.svg"
        alt="Confirm icon"
        className="w-10 mr-2 rounded-md p-2 bg-icons cursor-pointer"
        onClick={() => {
          setAnimation("leave");
          setTimeout(() => {
            onConfirm(value);
          }, 180);
        }}
      />
      <img
        src="./cancel.svg"
        alt="Cancel icon"
        className="w-10 rounded-md p-2 bg-icons cursor-pointer"
        onClick={() => {
          setAnimation("leave-input");
          setTimeout(() => {
            onCancel();
          }, 200);
        }}
      />
    </div>
  );
  return <>{isEdit ? editField : defaultField}</>;
}
