import * as types from '../constants/actionTypes';

export function populateSelectBox(meetingTypes) {
  return {
    type:types.POPULATE_SELECT_BOX,
    meetingTypes:meetingTypes
  };
}
export function changeSelected(selectedId) {
  return {
    type:types.CHANGE_SELECTED,
    selectedId:selectedId
  };
}
export function unsetItem(key) {
  return {
    type:types.UNSET_ITEM,
    key:key
  };
}
export function setIsFresh() {
  return {
    type:types.MEETING_TYPE_SELECT_BOX_SET_IS_FRESH
  };
}
