import * as types from '../constants/actionTypes';

export function populateSelectBox(meetingTypes) {
  return {
    type:types.POPULATE_SELECT_BOX,
    meetingTypes:meetingTypes
  }
}
export function changeSelected(selectedId) {
  return {
    type:types.CHANGE_SELECTED,
    selectedId:selectedId
  }
}
