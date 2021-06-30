import { independantCountryIndexs } from 'src/resources/independantCountryIndexs';
import { regionIndexes } from 'src/resources/regions';
import { actions, NEXT_CLICK, PREV_CLICK, REGION_CHANGE } from './actions';

type state = {
  index: number;
  flag: boolean;
  max: number;
  indexes: number[];
};

// max keeps track of how far the user has reached
export const initialState: state = {
  index: 0,
  flag: true,
  max: 0,
  indexes: [],
};

export const reducer = (state = initialState, action: actions): state => {
  switch (action.type) {
    case NEXT_CLICK:
      if (state.flag)
        return {
          ...state,
          flag: false,
        };
      if (state.index + 1 >= state.indexes.length) {
        return initialState;
      }
      const newIndex = state.index + 1;
      return {
        ...state,
        index: newIndex,
        flag: !(state.max >= newIndex),
        max: Math.max(state.max, newIndex),
      };

    case PREV_CLICK:
      return {
        ...state,
        index: state.index - 1 < 0 ? state.indexes.length - 1 : state.index - 1,
        flag: false,
      };
    case REGION_CHANGE:
      return {
        ...state,
        indexes: action.region
          ? regionIndexes[action.region]
          : independantCountryIndexs,
      };
    default:
      return state;
  }
};
