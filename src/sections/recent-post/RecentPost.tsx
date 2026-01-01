import Button from '@/components/button/Button';
import styles from './recentPost.module.css';
import { useNavigationStore } from '@/store/navigation.store';
import { useRouter } from 'next/navigation';

export default function RecentPost() {
    const router = useRouter();
    const { navigate } = useNavigationStore();

    return (
        <section className={styles.recentPostSection}>
            <div>
                <h6 className={styles.subtitle}>Recent Post</h6>
                <h1 className={styles.title}>
                    7 Team Collab Tools for Remote Teams
                </h1>
            </div>

            <div className={styles.infoBlock}>
                <div className={styles.info}>
                    <span className={styles.category}>Trending</span>
                    <h3 className={styles.minutes}>7 Min Read</h3>
                </div>

                <Button
                    text="Read The Articles"
                    color="red"
                    size="large"
                    type="button"
                    onClick={() => navigate(router, '/blog/7-team-collaboration-tools-for-remote-teams-8')}
                />
            </div>
        </section>
    );
}
