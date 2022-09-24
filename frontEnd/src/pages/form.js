import React from 'react';

const form = (props) => {
  const {
    type,
    labelName,
    styleContainerInput,
    placeHolder,
    onClick,
    className,
  } = props;
  return (
    <React.Fragment>
      <section
        onClick={onClick}
        className={`${className} form w-2/4 mx-auto shadow-2xl my-10 p-10`}
      >
        <form
          className="flex flex-col gap-y-3"
          method="POST"
          // action="/news"
          // enctype="multipart/form-data"
        >
          <label className="">{labelName}</label>
          <div className={styleContainerInput}>
            <input
              className="w-full p-1"
              type={type}
              placeholder={placeHolder}
            />
          </div>
          <input
            className="p-1 w-20 border-2 border-slate-500 cursor-pointer hover:border-sky-300 hover:text-sky-300 rounded-lg"
            type="button"
            value="Submit"
          />
        </form>
      </section>
    </React.Fragment>
  );
};

export default form;
