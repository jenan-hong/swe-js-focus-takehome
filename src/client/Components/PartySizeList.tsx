import { PartySize } from "../Pages/ShopBookingPage/PartySize";
import { PartySizeCounter } from "./PartySizeCounter";
import usePartySizeCounts from "./usePartySizeCounts";

type Props = {
  partySize: PartySize;
};

export const PartySizeList = ({ partySize }: Props): JSX.Element => {
  const {
    getMinNumPeople,
    getMaxNumPeople,
    getShowBaby,
    getShowChild,
    getShowSenior,
    getIsGroupOrder,
    getMinOrderQty,
    getMaxOrderQty,
  } = partySize;

  const {
    partyCounts,
    handleCountChange,
    handleButtonClick,
  } = usePartySizeCounts(partySize);

  const overallCount = Object.values(partyCounts).reduce((acc, count) => acc + count, 0);

  const isAddButtonDisabled = () => {
    return getIsGroupOrder() ? overallCount >= getMaxOrderQty() : overallCount >= getMaxNumPeople();
  };

  const isSubtractButtonDisabled = () => {
    return getIsGroupOrder() ? overallCount <= getMinOrderQty() : overallCount <= getMinNumPeople();
  };

  const getMaxSelectableCount = (id: string) => {
    const maxCount = getIsGroupOrder() ? getMaxOrderQty() : getMaxNumPeople();
    return maxCount - overallCount + partyCounts[id];
  };

  const renderCounters = () => {
    return Object.entries(partyCounts).map(([id, count]) => {
      if ((id === 'Babies' && !getShowBaby()) ||
          (id === 'Children' && !getShowChild()) ||
          (id === 'Seniors' && !getShowSenior())) {
        return null;
      }

      return (
        <PartySizeCounter
          key={id}
          id={id}
          count={count}
          maxCount={getMaxSelectableCount(id)}
          onCountChange={handleCountChange}
          onButtonClick={handleButtonClick}
          isButtonDisabled={(change) => (change > 0 ? isAddButtonDisabled() : isSubtractButtonDisabled())}
        />
      );
    });
  };

  return (
    <div data-testid="Party Size List">
      {renderCounters()}
      <p>Overall Count: {overallCount}</p>
    </div>
  );
};
