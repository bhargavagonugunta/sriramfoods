import LegacyPage from "./legacy/LegacyPage";
import CategoriesPage from "./categories/CategoriesPage";
import ShopPage from "./shop/ShopPage";
import OrderItems from "./order-items/OrderItems.tsx";
import GiftBox from "./giftbox/GiftBox.tsx";
import ExperienceSairam from "./experience/experience-comp/ExperiencePage.tsx";
import SquareCard from "./square-card/square-card-comp/SquareCardComp.tsx";
import CarouselMap from "./carousel/CarouselMap.tsx";

export default function Home() {
  return (
    <div>
      <CarouselMap />
      <ExperienceSairam />
      <div className={`p-5`}>
        <SquareCard />
      </div>
      <GiftBox />
      <LegacyPage />
      <CategoriesPage />
      <ShopPage />
      <OrderItems />
    </div>
  );
}
