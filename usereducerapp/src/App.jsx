import React, { useReducer } from 'react';
import userReducer from './reducers/userReducer';
import userContext from './context/userContext';
import { db } from './DB';
import ListOfFriends from './components/ListOfFriends';

function App() {
  const [list, dispatch] = useReducer(userReducer, db)
  return (
    <userContext.Provider value={{list, dispatch}}>
      <ListOfFriends/>
    </userContext.Provider>
  );
}

export default App;
