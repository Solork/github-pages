import { getField } from 'vuex-map-fields';

const getData = (state) => {
	return state.rows;
}

export {
	getData,
	getField
}