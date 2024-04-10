import {DEFAULT_STATE} from "@/shared/mocks";
import {offersSlice} from "./";

describe('Main Slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = {type: ''};
    const expectedState = {
      ...DEFAULT_STATE.offers,
    };

    const result = offersSlice.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });
})
