import { SelectedCoin, swapSlice } from "./swap";
import { initialState } from "./swap";

describe("Coin slices", () => {
  it("should change first coin", () => {
    const coin: SelectedCoin = { key: "Ethereum", amount: 0.5 };

    const nextState = swapSlice.reducer(
      initialState,
      swapSlice.actions.changeFirstCoin(coin)
    );

    expect(nextState.selectedCoins[0]).toEqual(coin);
    expect(nextState.selectedCoins.length).toEqual(2);
  });

  it("should change second coin", () => {
    const coin: SelectedCoin = { key: "Ethereum", amount: 0.5 };

    const nextState = swapSlice.reducer(
      initialState,
      swapSlice.actions.changeSecondCoin(coin)
    );

    expect(nextState.selectedCoins[1]).toEqual(coin);
    expect(nextState.selectedCoins.length).toEqual(2);
  });

  it("should change first coin amount", () => {
    const nextState = swapSlice.reducer(
      initialState,
      swapSlice.actions.updateCoinAmount({ index: 0, amount: 123 })
    );

    expect(nextState.selectedCoins[0].amount).toEqual(123);
  });

  it("should swap between first and second coin", () => {
    const nextState = swapSlice.reducer(
      initialState,
      swapSlice.actions.swapFirstAndSecond()
    );

    expect(nextState.selectedCoins[0]).toEqual(initialState.selectedCoins[1]);
    expect(nextState.selectedCoins[1]).toEqual(initialState.selectedCoins[0]);
  });

  it("should update error message", () => {
    const nextState = swapSlice.reducer(
      initialState,
      swapSlice.actions.updateErrorMessage("error")
    );
    expect(nextState.error).toEqual("error");
  });

  it("should reset swap state", () => {
    const nextState = swapSlice.reducer(
      initialState,
      swapSlice.actions.resetSwapState()
    );
    expect(nextState).toEqual(initialState);
  });

  it("should swap the coins places when changing first", () => {
    const coin: SelectedCoin = { key: "Tether", amount: 0.5 };

    const nextState = swapSlice.reducer(
      initialState,
      swapSlice.actions.changeFirstCoin(coin)
    );

    expect(nextState.selectedCoins[0].key).toEqual("Tether");
    expect(nextState.selectedCoins[1].key).toEqual("Bitcoin");
  });

  it("should swap the coins places when changing second", () => {
    const coin: SelectedCoin = { key: "Bitcoin", amount: 0.5 };

    const nextState = swapSlice.reducer(
      initialState,
      swapSlice.actions.changeSecondCoin(coin)
    );

    expect(nextState.selectedCoins[0].key).toEqual("Tether");
    expect(nextState.selectedCoins[1].key).toEqual("Bitcoin");
  });
});
