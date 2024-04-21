import React from "react";

function ProgressionItem({ year, milestone, duration, details }) {
  return (
    <ol className="flex flex-col md-flex-row relative border-l border-stone-900 dark:border-white">
      <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border border-white" />
        <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
          <span className="inline-block px-2 py-1 font-semibold text-white bg-stone-900 dark:bg-black rounded-md">
            {year}
          </span>
          <h3 className="text-lg font-semibold text-stone-900 dark:text-white">{milestone}</h3>
          <div className="my-1 text-sm font-normal leading-none text-stone-400">
            {duration}
          </div>
        </p>
        <p className="my-2 text-base text-justify font-normal text-stone-500">{details}</p>
      </li>
    </ol>
  );
}

export default ProgressionItem;
