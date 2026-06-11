import BannerSection from "@/components/home/BannerSection";
import CategorySection from "@/components/home/CategorySection";
import LatestProducts from "@/components/home/LatestProducts";
import ServiceSection from "@/components/home/ServiceSection";
import UpdateSection from "@/components/home/UpdateSection";

export default function Home() {
  return (
    <div>
      <BannerSection/>
      <ServiceSection/>
      <LatestProducts/>
      <CategorySection/>
      <UpdateSection/>
    </div>
  );
}
