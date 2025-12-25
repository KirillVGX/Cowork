import { useEffect, useRef, useState } from 'react';

export function useInView({ rootMargin = '0px', once = true } = {}) {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);

                    if (once) {
                        observer.unobserve(node);
                    }
                } else if (!once) {
                    setIsVisible(false);
                }
            },
            { rootMargin }
        );

        observer.observe(node);

        return () => observer.disconnect();
    }, [rootMargin, once]);

    return { ref, isVisible };
}
