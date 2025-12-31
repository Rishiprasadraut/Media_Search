import { useEffect } from "react";
import { fatchPhotos, fatchvideos, fatchGIF } from "../api/mediaApi";
import {
  setLoading,
  setError,
  setResults,
} from "../redux/features/searchSlice";
import { useDispatch, useSelector } from "react-redux";
import ResultCard from "./ResultCard";

const ResultGrid = () => {
  const dispatch = useDispatch();
  const { activeTab, query, results, loading, error } = useSelector(
    (store) => store.search
  );

  useEffect(() => {
    if (!query) return;
    const getData = async () => {
      try {
        dispatch(setLoading());

        let Data = [];
        if (activeTab === "photo") {
          let response = await fatchPhotos(query);
          Data = response.results.map((item) => ({
            id: item.id,
            type: "photo",
            title: item.alt_description,
            thumbnail: item.urls.small,
            src: item.urls.full,
            url: item.links.html,
          }));
        }
        if (activeTab === "videos") {
          let response = await fatchvideos(query);
          Data = response.videos.map((item) => ({
            id: item.id,
            type: "video",
            title: item.user.name || "video",
            thumbnail: item.image,
            src: item.video_files[0].link,
            url: item.url
          }));
        }
        if (activeTab === "GIF") {
          let response = await fatchGIF(query);
          Data = response.results.map((item) => ({
            id: item.id,
            title: item.title || "GIF",
            type: "GIF",
            thumbnail: item.media_formats.tinygif.url,
            src: item.media_formats.gif.url,
            url: item.url,
          }));
        }
        dispatch(setResults(Data));
      } catch (error) {
        dispatch(setError(error.message));
      }
    };
    getData();
  }, [query, activeTab]);

  if (error) return <h1 className="text-center font-bold">ERROR</h1>;
  if (loading) return <h1 className="text-center font-bold">Loading...</h1>;

  return (
    <div className="flex w-full flex-wrap gap-4 md:gap-6 justify-between overflow-auto px-4 md:px-10">
      {results.map((item, idx) => {
        return (
          <div key={idx}>
            <ResultCard item={item} />
          </div>
        );
      })}
    </div>
  );
};

export default ResultGrid;
