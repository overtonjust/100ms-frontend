import React from 'react';
import { useAVToggle } from '@100mslive/react-sdk';
import {
    selectIsConnectedToRoom,
    useHMSActions,
    useHMSStore,
    selectPeers,
} from '@100mslive/react-sdk'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faMicrophoneSlash,
    faMicrophone,
    faVideo,
    faVideoSlash,
    faUserPlus,
    faArrowUpRightFromSquare,
    faMessage,
    faFaceSmile,
    faGear,
    faEllipsis
} from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    const peers = useHMSStore(selectPeers);
    const userCount = peers.length;

    const isConnected = useHMSStore(selectIsConnectedToRoom);
    const hmsActions = useHMSActions();

    const {
        isLocalAudioEnabled,
        isLocalVideoEnabled,
        toggleAudio,
        toggleVideo
    } = useAVToggle();

    return (
        <>
            <div>
                <div onClick={toggleAudio}>
                    {isLocalAudioEnabled ? (
                        <>
                            <FontAwesomeIcon icon={faMicrophoneSlash} size="lg"/>
                            <span>Mute</span>
                        </>
                    ) : (
                        <>
                            <FontAwesomeIcon icon={faMicrophone} size="lg"/>
                            <span>Unmute</span>
                        </>
                    )}
                </div>
                <div onClick={toggleVideo}>
                    {isLocalVideoEnabled ? (
                        <>
                            <FontAwesomeIcon icon={faVideoSlash} size="lg"/>
                            <span>Stop Video</span>
                        </>
                    ) : 
                        <>
                            <FontAwesomeIcon icon={faVideo} size="lg"/>
                            <span>Start Video</span>
                        </>
                    }
                </div>

            </div>
            <div>
                <div>
                    <div>
                        <FontAwesomeIcon icon={faUserPlus} size='lg'/><>{userCount}</>
                    </div>
                    <span>Participants</span>
                </div>
                <div>
                    <div>
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} size='lg' color=""/>
                    </div>
                    <span>Share Screen</span>
                </div>
                <div>
                    <div>
                        <FontAwesomeIcon icon={faMessage} size='lg'/>
                    </div>
                    <span>Chat</span>
                </div>
                <div>
                    <div>
                        <FontAwesomeIcon icon={faFaceSmile} size='lg'/>
                    </div>
                    <span>Reactions</span>
                </div>
                <div>
                    <div>
                        <FontAwesomeIcon icon={faGear} size='lg'/>
                    </div>
                    <span>Settings</span>
                </div>
                <div>
                    <div>
                        <FontAwesomeIcon icon={faEllipsis} size='lg'/>
                    </div>
                    <span>More</span>
                </div>
            </div>
            <div>
                <div>
                    {isConnected && (
                        <button
                        id='leave-btn'
                        class='btn-danger'
                        onClick={() => hmsActions.leave()}
                        >
                            Leave
                        </button>
                    )}
                </div>
            </div>
        </>
    );
};

export default Footer;