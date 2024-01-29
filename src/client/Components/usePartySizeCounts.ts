import { useState } from "react";

const usePartySizeCounts = () => {
  const [partyCounts, setPartyCounts] = useState({
    Children: 0,
    Babies: 0,
    Seniors: 0,
    Adults: 0,
  });

  const handleCountChange = (id: string, count: number) => {
    setPartyCounts(prevCounts => ({ ...prevCounts, [id]: count }));
  };

  const handleButtonClick = (id: string, change: number) => {
    setPartyCounts(prevCounts => ({
      ...prevCounts,
      [id]: Math.max(0, prevCounts[id] + change),
    }));
  };

  return {
    partyCounts,
    handleCountChange,
    handleButtonClick,
  };
};

export default usePartySizeCounts;
