export const NEXT_CLICK = 'NEXT_CLICK';
export const PREV_CLICK = 'PREV_CLICK';

interface nextClickAction {
  type: typeof NEXT_CLICK;
}
interface prevClickAction {
  type: typeof PREV_CLICK;
}

export type actions = nextClickAction | prevClickAction;
