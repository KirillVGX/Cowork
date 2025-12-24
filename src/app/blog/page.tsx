import Catalog from "@/sections/catalog/Catalog";
import CTA from "@/sections/CTA/CTA";
import RecentPost from "@/sections/recent-post/RecentPost";

export default function About() {
    return (
        <>
            <RecentPost />
            <Catalog />
            <CTA />
        </>
    );
}