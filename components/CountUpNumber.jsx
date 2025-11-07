import { useEffect, useRef, useState } from "react";

export default function CountUpNumber({ target, duration = 2000, decimals = 0 }) {
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                }
            },
            { threshold: 0.4 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [hasAnimated]);

    useEffect(() => {
        if (!hasAnimated) return;

        let start = 0;
        const end = parseFloat(target);
        const frameRate = 16; // ~60fps
        const totalFrames = Math.round(duration / frameRate);
        const increment = end / totalFrames;

        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(start);
            }
        }, frameRate);

        return () => clearInterval(timer);
    }, [hasAnimated, target, duration]);

    return (
        <span ref={ref}>
            {count.toFixed(decimals)}
        </span>
    );
}
