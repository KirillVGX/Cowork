import { create } from 'zustand';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

type NavigationStore = {
    redirectToast: boolean;
    navigate: (router: AppRouterInstance, href: string) => void;
};

export const useNavigationStore = create<NavigationStore>((set) => ({
    redirectToast: false,

    navigate: (router, href) => {
        set({ redirectToast: true });

        setTimeout(() => {
            set({ redirectToast: false });
            router.push(href);
        }, 800);
    },
}));
