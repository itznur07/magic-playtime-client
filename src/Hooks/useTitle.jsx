import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `Magic playtime - ${title}`;
  }, [title]);
};

export default useTitle;
