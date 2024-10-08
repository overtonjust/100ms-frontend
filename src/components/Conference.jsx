import React from 'react';
import { selectPeers, useHMSStore } from '@100mslive/react-sdk'
import Peer from './Peer';
import '../App.css'
const Conference = () => {
    const peers = useHMSStore(selectPeers);
    console.log(peers)

    
    return (
        <div className='room-section'>
            <div className='conference-section'>
                <div className='peers-container'>
                    {peers.map((peer) => (
                        <Peer key={peer.id} peer={peer}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Conference;