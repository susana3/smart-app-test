import {AsyncThunkAction, configureStore} from '@reduxjs/toolkit';
import usersReducer from '../features/users/usersSlice';
import filtersReducer from '../features/filters/filtersSlice';

const store = configureStore({
    reducer: {
        users: usersReducer,
        filters: filtersReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch & {
    <ThunkArg extends (...args: any) => any>(action: AsyncThunkAction<ReturnType<ThunkArg>, ThunkArg, {}>): ReturnType<ThunkArg>;
};
export default store;
