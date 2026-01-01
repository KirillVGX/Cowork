'use client';

import { useNavigationStore } from '@/store/navigation.store';
import { useRouter } from 'next/navigation';
import Button from '../button/Button';

export default function ViewAllButton() {
    const router = useRouter();
    const { navigate } = useNavigationStore();

    return (
        <Button
            text="View All"
            color="blue"
            style={{ marginTop: '16px' }}
            type="button"
            onClick={() => navigate(router, '/blog#catalog')}
        />
    );
}
