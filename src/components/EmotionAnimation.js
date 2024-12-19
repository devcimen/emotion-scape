import React, { useRef, useEffect } from "react";
import p5 from "p5";

const EmotionAnimation = ({ colors = [], intensity = 1 }) => {
    const sketchRef = useRef();

    useEffect(() => {
        let myP5;

        const sketch = (p) => {
            let t = 0; // Zeitvariable für die Bewegung
            const blobs = [];

            p.setup = () => {
                p.createCanvas(window.innerWidth, window.innerHeight);
                p.noStroke();
                initializeBlobs();
            };

            p.draw = () => {
                p.clear();

                drawMovingBlobs();
                t += 0.01; // Zeit voranschreiten lassen
            };

            p.windowResized = () => {
                p.resizeCanvas(window.innerWidth, window.innerHeight);
                initializeBlobs();
            };

            // Initialisierung der Blobs
            const initializeBlobs = () => {
                blobs.length = 0; // Reset
                for (let i = 0; i < 5 + intensity * 5; i++) {
                    const color = Array.isArray(colors) && colors.length > 0
                        ? colors[Math.floor(p.random(colors.length))]
                        : ""; 

                    blobs.push({
                        x: p.random(p.width),
                        y: p.random(p.height),
                        size: p.random(10, 100) * intensity,
                        color,
                        noiseOffset: p.random(1000),
                    });
                }
            };


            // Bewegliche Blobs zeichnen
            const drawMovingBlobs = () => {
                p.drawingContext.filter = "blur(100px)";
                blobs.forEach((blob) => {
                    p.fill(blob.color || "");
                    p.beginShape();
                    for (let angle = 0; angle < p.TWO_PI; angle += 0.1) {
                        const xOffset = p.noise(blob.noiseOffset + p.cos(angle + t));
                        const yOffset = p.noise(blob.noiseOffset + p.sin(angle + t));
                        const r = blob.size * (0.1 + xOffset * 5);
                        const x = blob.x + r * p.cos(angle);
                        const y = blob.y + r * p.sin(angle);
                        p.curveVertex(x, y);
                    }
                    p.endShape(p.CLOSE);

                    // Bewegung der Blobs
                    blob.x += p.sin(t + blob.noiseOffset) * 5;
                    blob.y += p.cos(t + blob.noiseOffset) * 5;

                    // Bildschirmgrenzen prüfen
                    if (blob.x > p.width) blob.x = 0;
                    if (blob.y > p.height) blob.y = 0;
                });
            };

        };

        if (sketchRef.current) {
            myP5 = new p5(sketch, sketchRef.current);
        }

        return () => myP5?.remove();
    }, [colors, intensity]);

    return <div ref={sketchRef} className="absolute top-0 left-0 w-full h-full -z-10"></div>;
};

export default EmotionAnimation;
