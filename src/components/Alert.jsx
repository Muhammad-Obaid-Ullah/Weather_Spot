function Alert({ alert }) {
  return (
    <li className="bg-slate-50 w-[75%] 2.2xl:w-full rounded-lg shrink-0 2.2xl:shrink">
      <div className="relative text-sm xxsm:text-base text-gray-900 px-4 py-3 text-center border-b border-1 border-solid border-gray-600">
        {alert.event}
      </div>

      <div className="sm:flex sm:items-center sm:justify-start sm:gap-10 2.2xl:gap-0 2.2xl:block 3xl:flex 3xl:items-center 3xl:justify-between mx-7 mt-2 pb-2 border-b border-1 border-solid border-gray-600">
        <div className="bg-[red] text-white rounded-lg px-4 py-[0.155rem] text-xs mb-2 sm:mb-0 2.2xl:mb-2 2.2xl:text-center 3xl:mb-0 3xl:text-left">
          alert
        </div>

        {alert.severity && (
          <div className="bg-[darkorange] text-white rounded-lg px-4 py-[0.155rem] text-xs 2.2xl:text-center 3xl:text-left">
            Severity:&nbsp;&nbsp;&nbsp;{alert.severity}
          </div>
        )}
      </div>

      <div className="text-gray-900 px-10 pb-6 mt-6 2.2xl:px-7 2.2xl:pb-4 2.2xl:mt-2 text-sm lg:leading-normal 2.2xl:leading-snug text-justify">
        {alert.desc.split("*").join("")}
      </div>
    </li>
  );
}

export default Alert;
