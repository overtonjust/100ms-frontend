import React from 'react';
import { useVideo } from '@100mslive/react-sdk';

const Peer = (peer) => {
    console.log(peer)
    
    const { videoRef } = useVideo({
        trackId: peer.videoTrack
    });

    console.log(videoRef)

    return (
        <div className='peer-container'>
            <video 
            ref={videoRef}
            autoPlay={true}
            className={`peer-video ${peer.isLocal ? "local" : ""}`}
            muted={peer.isLocal}
            playsInline
            />
            <div className='peer-name'>
                {peer.name} {peer.isLocal ? "(You)": ""}
            </div>
        </div>
    );
};

export default Peer;