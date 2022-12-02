//REDUCER HANDLES ACTIONS' PROPERTIES, WHEN DISPATCH ACTION(WITH TYPE) WE GOT PROPERTIES AND VALUES OF IT ALL.

const Reducer = (state, action) => {
	console.log('type we got', action);
	switch (action.type) {
		case 'LOGIN_START':
			return {
				user: null,
				isFetching: true,
				error: false,
			};
		case 'LOGIN_SUCCESS':
			return {
				user: action.payload,
				isFetching: false,
				error: false,
			};
		case 'LOGIN_FAILURE':
			return {
				user: null,
				isFetching: false,
				error: true,
			};
		case 'UPDATE_START':
			return {
				...state,
				isFetching: true,
			};
		case 'UPDATE_SUCCESS':
			return {
				user: action.payload,
				isFetching: false,
				error: false,
			};
		case 'UPDATE_FAILURE':
			return {
				user: state.user,
				isFetching: false,
				error: true,
			};
		case 'LOG_OUT':
			return {
				user: null,
				isFetching: false,
				error: false,
			};

		default:
			return state;
	}
};

export default Reducer;
