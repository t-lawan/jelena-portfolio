import styled from '@emotion/styled/macro';
import React from 'react';
import ReactPlayer from 'react-player'

const VideoPlayerWrapper = styled.div`
    width:100%;
`
// Render a YouTube video player
export const  VideoPlayer = ({url}) => {
    return (
        <VideoPlayerWrapper>
        <ReactPlayer width={'100%'} url='https://www.youtube.com/watch?v=LXb3EKWsInQ' />

        </VideoPlayerWrapper>
    );
}

