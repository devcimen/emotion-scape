// Animation of blobs that move around the screen
// the blobs are showing the selected emotions
// different emotions have different colors and intensity

import React, { useRef, useEffect } from "react";
import p5 from "p5";

const EmotionAnimation = ({ colors = [], intensity = 1 }) => {
    
    // Ref p5 sketch
    const sketchRef = useRef();

    useEffect(() => {
        let myP5;

        const sketch = (p) => {
            let t = 0;
            const blobs = [];

            // p5 setup
            p.setup = () => {
                p.createCanvas(window.innerWidth, window.innerHeight);
                p.noStroke();
                initializeBlobs();
            };

            // p5 draw
            p.draw = () => {
                p.clear();
                p.drawingContext.filter = "blur(75px)";

                drawMovingBlobs();
                t += 0.01; // time increment
            };

            // p5 windowResized
            p.windowResized = () => {
                p.resizeCanvas(window.innerWidth, window.innerHeight);
                initializeBlobs();
            };

            // initialize blobs
            const initializeBlobs = () => {
                blobs.length = 0;  // reset

                // create blobs
                for (let i = 0; i < 5 + intensity * 5; i++) {
                    const color = colors.length > 0
                        ? colors[Math.floor(p.random(colors.length))]
                        : "#000";

                    blobs.push({
                        x: p.random(p.width),
                        y: p.random(p.height),
                        dx: p.random(-1.5, 1.5),
                        dy: p.random(-1.5, 1.5),
                        size: p.random(50, 150) * intensity,
                        color,
                        noiseOffset: p.random(1000),
                    });
                }
            };

            // draw moving blobs
            const drawMovingBlobs = () => {
                blobs.forEach((blob) => {
                    p.fill(blob.color);
                    p.beginShape();

                    // crete blob shape
                    // noiseOffset for random shape
                    for (let angle = 0; angle < p.TWO_PI; angle += 0.1) {
                        const xOffset = p.noise(blob.noiseOffset + p.cos(angle + t));
                        const yOffset = p.noise(blob.noiseOffset + p.sin(angle + t));
                        const r = blob.size * (0.5 + xOffset * 0.5);
                        const x = blob.x + r * p.cos(angle);
                        const y = blob.y + r * p.sin(angle);
                        p.curveVertex(x, y);
                    }
                    p.endShape(p.CLOSE);

                    // move blob
                    blob.x += blob.dx;
                    blob.y += blob.dy;

                    // check collision with walls
                    // reverse direction if collision
                    if (blob.x <= 0 || blob.x >= p.width) {
                        blob.dx *= -1;
                        blob.x = p.constrain(blob.x, 0, p.width);
                    }
                    if (blob.y <= 0 || blob.y >= p.height) {
                        blob.dy *= -1;
                        blob.y = p.constrain(blob.y, 0, p.height);
                    }
                });
            };
        };

        // create p5 instance
        if (sketchRef.current) {
            myP5 = new p5(sketch, sketchRef.current);
        }

        return () => myP5?.remove();
    }, [colors, intensity]);

    return <div ref={sketchRef} className="absolute top-0 left-0 w-full h-full -z-10"></div>;
};

export default EmotionAnimation;