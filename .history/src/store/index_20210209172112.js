import {createStore} from 
const store = createStore({
    state() {
        return {
            count: 1,
        };
    },
});

export default store;