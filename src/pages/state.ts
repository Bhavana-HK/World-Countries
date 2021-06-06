import { independantCountryIndexs } from '../resources/indCountryIdx';
import { actions, NEXT_CLICK, PREV_CLICK } from './actions';

type state = {
  index: number;
  flag: boolean;
  max: number;
};

// max keeps track of how far the user has reached
export const initialState: state = {
  index: 0,
  flag: true,
  max: 0,
};

export const reducer = (state = initialState, action: actions): state => {
  switch (action.type) {
    case NEXT_CLICK:
      if (state.flag)
        return {
          ...state,
          flag: false,
        };
      if (state.index + 1 >= independantCountryIndexs.length) {
        return initialState;
      }
      const newIndex = state.index + 1;
      return {
        index: newIndex,
        flag: !(state.max >= newIndex),
        max: Math.max(state.max, newIndex),
      };

    case PREV_CLICK:
      return {
        ...state,
        index:
          state.index - 1 < 0
            ? independantCountryIndexs.length - 1
            : state.index - 1,
        flag: false,
      };
    default:
      return state;
  }
};
