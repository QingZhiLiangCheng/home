import HeaderSection from "@/app/components/HeaderSection";
import HomeSection from "@/app/components/HomeSection";
import FooterSection from "@/app/components/FooterSection";
import LibrarySection from "@/app/components/LibrarySection";



export default function Home() {
    return (
        <main className="main">
            <HeaderSection/>
            <HomeSection/>
            <LibrarySection/>
            <FooterSection/>
        </main>
    );
}
