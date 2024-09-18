import React from 'react';
import { useVideo } from '@100mslive/react-sdk';

const Peer = (peer) => {
    const { videoRef } = useVideo({
        trackId: peer.videoTrack
    });

    return (
        <div>
            <video 
            ref={videoRef}
            autoPlay
            height={'300px'}
            width={'300px'}
            muted
            playsInline
            />
            <div>
                {peer.name} {peer.isLocal ? "(You)": ""}
            </div>
        </div>
    );
};

export default Peer;