import { createStore } from 'redux';
import rootReducer from '../reducers';

export default function configureStore(initialState) {
	// the third parameter is a store enhancer needed for the redux dev-tools chrome extension, download on the Chrome app store:
	// https://github.com/zalmoxisus/redux-devtools-extension
	const store = createStore(rootReducer, initialState, window.devToolsExtension ? window.devToolsExtension() : undefined);

	if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
    	const nextReducer = require('../reducers').default;
    	store.replaceReducer(nextReducer);
    });
};

return store;
};
