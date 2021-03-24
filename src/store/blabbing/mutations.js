import { updateField as UPDATE_FIELD } from 'vuex-map-fields';
import { copy } from '@/config/helpers.js';

const SET_TEST_LIST = (state, payload) => {
	state.tests = copy(payload)
}
const SET_DETAIL_RESULT = (state, payload) => {
	state.detail_result = copy(payload)
}
const SET_DETAIL_RESULT_TABS = (state, payload) => {
	state.detail_result_tabs = copy(payload)
}

export {
	SET_DETAIL_RESULT,
	SET_DETAIL_RESULT_TABS,
	SET_TEST_LIST,
	UPDATE_FIELD
}