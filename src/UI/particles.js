import React, { Component } from 'react';
import Particles from 'react-particles-js';

var style = {
    width: "100vw",
    height: "100vh",
};


class ParticlesBackground extends Component {

    render() {
        return (
            <div style={style}>
            <Particles
              params={{
                "particles": {
                    "number": {
                        "value": 200,
                        "density": {
                            "enable": false
                        }
                    },
                    "size": {
                        "value": 10,
                        "random": true,
                        "anim": {
                            "speed": 4,
                            "size_min": 2
                        }
                    },
                    "line_linked": {
                        "enable": false,
                    },
                    "move": {
                        "random": true,
                        "speed": 2,
                        "direction": "top",
                        "out_mode": "out"
                    }
                },
                "interactivity": {
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "bubble"
                        },
                        "onclick": {
                            "enable": true,
                            "mode": "repulse"
                        }
                    },
                    "modes": {
                        "bubble": {
                            "distance": 150,
                            "duration": 1.5,
                            "size": 0,
                            "opacity": 0
                        },
                        "repulse": {
                            "distance": 400,
                            "duration": 4
                        }
                    }
                }
            }} />
            </div>
            )
    }
}

export default ParticlesBackground;
