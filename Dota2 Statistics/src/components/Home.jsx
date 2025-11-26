import CategoryList from "../home/CategoryList"
import HeroSection from "../home/HeroSection"

export default function Home()
{
    return (
        <div className="bg-background">
            <HeroSection />
            <CategoryList />
            <p className="pb-5 text-center font-heading text-primaryText">
                This website is powered by <a className="text-primaryBtn" href="#">OpenDota Api.</a>
            </p>
        </div>
    )
}