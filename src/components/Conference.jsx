import React from 'react';
import { selectPeers, useHMSStore } from '@100mslive/react-sdk'
import Peer from './Peer';

const Conference = () => {
    const peers = useHMSStore(selectPeers);
    return (
        <div>
            <div>
                <div>
                    {peers.map((peer) => (
                        <Peer key={peer.id} peer={peer}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Conference;