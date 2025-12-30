import Image from 'next/image';
import styles from './post.module.css';

interface IProps {
    title: string;
    avatar?: string;
    minutes?: number;
    name?: string;
    role?: string;
    likes?: number;
    comments?: number;
    content?: string;
}

export default function Post({
    title,
    avatar,
    minutes,
    name,
    role,
    likes,
    comments,
    content,
}: IProps) {
    return (
        <section className={styles.postSection}>
            <h1 className={styles.title}>{title}</h1>
            <div className={styles.content}>
                <div className={styles.post}>
                    <div className={styles.head}>
                        <h5 className={styles.quote}>
                            Remote work is becoming more common, with studies
                            showing over 25% of employees now work from home at
                            least part of the time. While remote work offers
                            many advantages like flexibility and increased
                            productivity, it also presents some challenges -
                            especially when it comes to team collaboration and
                            communication.
                        </h5>
                    </div>
                    <div className={styles.description}>
                        <p className={styles.paragraph}>
                            When you have team members spread across different
                            locations, it's crucial to have the right tools to
                            keep everyone coordinated and projects running
                            smoothly. From video conferencing to file sharing,
                            the technology you use can make or break your remote
                            team's ability to work together effectively.
                        </p>
                        <p className={styles.paragraph}>
                            To help you build that vital virtual bridge, here
                            are 7 essential team collaboration tools for remote
                            workers:
                        </p>
                    </div>
                </div>
                <div className={styles.author}>
                    <div className={styles.bio}>
                        <Image
                            src="/avatar.jpg"
                            alt="Jensen Turner"
                            width={56}
                            height={56}
                        />
                        <div className={styles.names}>
                            <h6 className={styles.firstName}>Jensen Turner</h6>
                            <h6 className={styles.role}>Cowork Founder</h6>
                        </div>
                    </div>
                    <div className={styles.stats}>
                        <small>7 min read</small>
                        <div className={styles.activity}>
                            <small className={styles.likes}>👏 287</small>
                            <small className={styles.comments}>💬 90</small>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
