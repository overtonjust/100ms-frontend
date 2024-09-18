import React, { useEffect } from 'react';
import {
  selectIsConnectedToRoom,
  useHMSActions,
  useHMSStore
} from '@100mslive/react-sdk';
import './App.css'
import SignIn from './components/SignIn';
import Conference from './components/Conference';
import Footer from './components/Footer';

const App = () => {
  const isConnected = useHMSStore(selectIsConnectedToRoom);
  const hmsActions = useHMSActions();

  useEffect(() => {
    if(!isConnected) {
      hmsActions.leave();
    }
  },[hmsActions, isConnected])

  return (
    <div className='App'>
      {isConnected ? (
        <>
          <Conference/>
          <Footer/>
        </>
      ) : (
        <SignIn/>
      )}
    </div>
  );
};

export default App;