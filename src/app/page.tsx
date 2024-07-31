import { ChooseUs } from "@/components/ui/ChooseUs";
import FeaturedCourses from "@/components/ui/FeaturedCourses";
import HeroSection from "@/components/ui/HeroSection";
import { InstructorSection } from "@/components/ui/Instructor";
import Testimonials from "@/components/ui/Testimonials";
import Upcomingwebinar from "@/components/ui/Upcomingwebinar";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased ">
      <HeroSection />
      <FeaturedCourses />
      <ChooseUs />
      <Testimonials />
      <Upcomingwebinar />
      <InstructorSection />
    </main>
  );
}
