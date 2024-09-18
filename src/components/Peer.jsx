import React from 'react';
import { useVideo } from '@100mslive/react-sdk';

const Peer = (peer) => {
    console.log(peer)
    const { videoRef } = useVideo({
        trackId: peer.videoTrack
    });

    return (
        <div className='peer-container'>
            <video 
            ref={videoRef}
            autoPlay
            className={`peer-video ${peer.isLocal ? "local" : ""}`}
            muted
            playsInline
            />
            <div className='peer-name'>
                {peer.name} {peer.isLocal ? "(You)": ""}
            </div>
        </div>
    );
};

export default Peer;