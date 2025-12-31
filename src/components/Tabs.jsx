import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../redux/features/searchSlice";

const Tabs = () => {

  const tabs = ["photo", "videos", "GIF"];
  
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.search.activeTab);

  return (
    <div className="flex p-4 md:p-10 gap-4 md:gap-10">
      {tabs.map((tab, idx) => {
        return (
          <button
            className={`${
              activeTab === tab ? "bg-blue-700" : "bg-gray-600"
            } cursor-pointe transition rounded outline-none active:scale-95 text-sm md:text-xl px-3 md:px-4 py-2 uppercase`}
            key={idx}
            onClick={() => {
              dispatch(setActiveTab(tab));
            }}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
