import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - ToyHouse`;
  }, [title]);
};

export default useTitle;
