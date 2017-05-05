import * as types from '../../constants/actionTypes';

export function updateName(name) {
  return {
    type:types.NEW_MEETING_GROUP_UPDATE_NAME,
    name:name
  };
}

export function updatePath(path) {
  return {
    type:types.NEW_MEETING_GROUP_UPDATE_PATH,
    path:path
  };
}
