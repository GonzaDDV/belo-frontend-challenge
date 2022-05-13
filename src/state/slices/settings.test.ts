import { showCensoredMoney } from "src/utils/coins";
import { initialState, settingsSlice } from "./settings";

describe("Settings slice", () => {
  it("should toggle show money setting", () => {
    const nextState = settingsSlice.reducer(
      initialState,
      settingsSlice.actions.toggleShowMoney()
    );

    expect(nextState.showMoney).toBe(!initialState.showMoney);
  });
});
