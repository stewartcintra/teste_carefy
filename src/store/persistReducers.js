import AsyncStorage from '@react-native-community/async-storage';
import {persistReducer} from 'redux-persist';

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: 'app@testeCarefy',
      storage: AsyncStorage,
      whitelist: ['auth', 'user', 'tasks'],
    },
    reducers,
  );

  return persistedReducer;
};
