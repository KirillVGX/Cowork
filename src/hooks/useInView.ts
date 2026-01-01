import { useEffect, useRef, useState } from 'react';

interface UseInViewOptions {
    rootMargin?: string;
    once?: boolean;
}

// const { ref, isVisible } = useInView<HTMLDivElement>();

export function useInView<T extends HTMLElement = HTMLElement>(
    { rootMargin = '0px', once = true }: UseInViewOptions = {}
) {
    const ref = useRef<T | null>(null);
    const [isVisible, setIsVisible] = useState<boolean>(false);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;

        const observer = new IntersectionObserver(
            ([entry]: IntersectionObserverEntry[]) => {
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
