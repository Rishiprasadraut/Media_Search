import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CollectionCard from "../components/CollectionCard";
import {clearCollection} from "../redux/features/collectionSlice";


const CollectionPage = () => {
  const collection = useSelector((state) => state.collection.items);
  const dispatch = useDispatch()
  const clearCollectionHandler = () => {
    dispatch(clearCollection())
  }
      

  return (
    <div className="overflow-auto px-4 md:px-10 py-5">
      {collection.length > 0 ? 
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4 sm:gap-0">
        <h2 className="text-lg sm:text-xl font-medium">Your Collection</h2>
        <button 
        onClick={()=>{
          clearCollectionHandler()
        }}
        className="bg-red-600 px-4 sm:px-5 py-2 text-sm sm:text-base font-medium rounded active:scale-95 transition cursor-pointer active:bg-red-700">
          Clear Collection
        </button>
      </div> : <h2 className="text-2xl font-medium items-center justify-center text-center">Collection is Empty</h2>}
      <div className="flex w-full flex-wrap col-end-3 gap-4 md:gap-6 justify-start">
        {collection.map((item, idx) => {
          return (
            <div key={idx}>
              <CollectionCard item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CollectionPage;
