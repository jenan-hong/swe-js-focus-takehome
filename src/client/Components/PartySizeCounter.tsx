import React from "react";

type CounterProps = {
  id: string;
  count: number;
  maxCount: number;
  onCountChange: (id: string, count: number) => void;
  onButtonClick: (id: string, change: number) => void;
  isButtonDisabled: (change: number) => boolean;
};

export const PartySizeCounter = ({
  id,
  count,
  maxCount,
  onCountChange,
  onButtonClick,
  isButtonDisabled,
}: CounterProps): JSX.Element => {
  const handleCountChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newCount = Number(e.target.value);
    onCountChange(id, newCount);
  };

  return (
    <div>
      <span>{id}</span>
      <select
        data-testid={`Party Size List ${id} Counter`}
        value={count}
        onChange={handleCountChange}
      >
        {[...Array(maxCount + 1).keys()].map((i) => (
          <option key={i} value={i}>
            {i}
          </option>
        ))}
      </select>
      <button
        data-testid={`Party Size List ${id} Counter Counter Subtract Button`}
        disabled={count <= 0}
        onClick={() => onButtonClick(id, -1)}
      >
        -
      </button>
      <button
        data-testid={`Party Size List ${id} Counter Counter Add Button`}
        disabled={isButtonDisabled(1)}
        onClick={() => onButtonClick(id, 1)}
      >
        +
      </button>
    </div>
  );
};
