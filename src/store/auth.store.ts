import { create } from 'zustand';
import { Session } from 'next-auth';

type AuthStatus = 'loading' | 'authenticated' | 'unauthenticated';

type AuthStore = {
    status: AuthStatus;
    isAuth: boolean;
    session: Session | null;
    setAuthState: (status: AuthStatus, session: Session | null) => void;
};

export const useAuthStore = create<AuthStore>((set) => ({
    status: 'loading',
    isAuth: false,
    session: null,

    setAuthState: (status, session) =>
        set({
            status,
            session,
            isAuth: status === 'authenticated',
        }),
}));
