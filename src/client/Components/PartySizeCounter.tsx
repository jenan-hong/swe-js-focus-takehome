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
    <div data-testid={`Party Size List ${id} Counter`}>
      <span>{id}</span>
      <select
        data-testid={`Counter Select`}
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
        data-testid={`Counter Subtract Button`}
        disabled={count <= 0 || isButtonDisabled(-1)}
        onClick={() => onButtonClick(id, -1)}
      >
        -
      </button>
      <button
        data-testid={`Counter Add Button`}
        disabled={isButtonDisabled(1)}
        onClick={() => onButtonClick(id, 1)}
      >
        +
      </button>
    </div>
  );
};
