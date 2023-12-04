import { IBlogData, blogsData } from "@/data/blog";
import { useState } from "react";

const useBlogData = () => {
  const [singleData, setSingleData] = useState<IBlogData>(blogsData[0]);
  const [isOpen, setIsOpen] = useState(false);

  const handleBlogsData = (id: number) => {
    const find = blogsData.find((item) => item?.id === id);
    setSingleData(find ? find : blogsData[0]);
    setIsOpen(true);
  };

  return {
    singleData,
    isOpen,
    setIsOpen,
    blogsData,
    handleBlogsData,
  };
};

export default useBlogData;
