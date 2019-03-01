import React, { Component } from "react";
import VideoCover from 'react-video-cover';

class Videobacker extends Component {
    render() {
        const videoOptions = {
            src: 'http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4',
            ref: videoRef => {
                this.videoRef = videoRef;
            },
            onClick: () => {
                if (this.videoRef && this.videoRef.paused) {
                    this.videoRef.play();
                } else if (this.videoRef) {
                    this.videoRef.pause();
                }
            },
            title: 'click to play/pause',
        };
        return (
                <div style={{
                    objectFit: 'cover',
                    width: '100%',
                    height: '100%'
                }}>
                    <VideoCover
                        videoOptions={videoOptions}>
                    </VideoCover>
                </div>
        );
    }
}

export default Videobacker;