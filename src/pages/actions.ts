import { Region } from "../resources/regions";

export const NEXT_CLICK = 'NEXT_CLICK';
export const PREV_CLICK = 'PREV_CLICK';
export const REGION_CHANGE = 'REGION_CHANGE';

interface nextClickAction {
  type: typeof NEXT_CLICK;
}
interface prevClickAction {
  type: typeof PREV_CLICK;
}
interface regionChangeAction {
  type: typeof REGION_CHANGE;
  region?: Region
}

export type actions = nextClickAction | prevClickAction|regionChangeAction;
