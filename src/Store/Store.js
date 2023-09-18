import { combineReducers, configureStore } from '@reduxjs/toolkit';
import catSlice from './Cat_slice';
import SubcatSlice from './Sub_catSlice';
import cartSlice from './cartSlice';
import userSlice from './userSlice';

const rootReducer = combineReducers({
        catSlice,
        SubcatSlice,
        cartSlice,
        userSlice
})
// const storageReducer = combineReducers({
//     testSlice2
// })
// const persistConfig = {
//     key: 'persisted',
//     storage,
//     whitelist: ['persistedData'],
// };


// const persistedStore = configureStore({
//     reducer: persistReducer(persistConfig, storageReducer),
// });

const temporaryStore = configureStore({
    reducer: rootReducer,
});

// const persistor = persistStore(persistedStore);
export { temporaryStore };

