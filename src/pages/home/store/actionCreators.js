import { CHANGE_CURRENT_DATA, CHANG_START_INDEX } from './constants';
import { fromJS } from 'immutable';

export const changeCurrentData = (data) => ({
  type: CHANGE_CURRENT_DATA,
  data: fromJS(data)
});

export const changeIndex = (num) => ({
  type: CHANG_START_INDEX,
  data: num
})