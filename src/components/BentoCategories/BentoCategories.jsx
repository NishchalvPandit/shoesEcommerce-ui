import { Link } from "react-router-dom";
import MaterialSymbol from "../MaterialSymbol/MaterialSymbol";
import { getShopCollectionUrl } from "../../data/shopCollections";

import IMG_BASKETBALL from "../../assets/basketball.png";
import IMG_RUNNING from "../../assets/running.png";
import IMG_CASUAL from "../../assets/casual.png";
import IMG_LIFESTYLE from "../../assets/lifestyle.png";

function BentoCategories() {
  return (
    <section
      className="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 lg:px-16"
      aria-label="Shop by category"
    >
      <div className="grid h-auto grid-cols-1 gap-6 md:h-[800px] md:grid-cols-4 md:grid-rows-2 md:gap-6">
        <Link
          to={getShopCollectionUrl("basketball")}
          className="group relative min-h-[280px] overflow-hidden rounded-xl md:col-span-2 md:row-span-2"
        >
          <img
            src={IMG_BASKETBALL}
            alt=""
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8">
            <h4 className="mb-2 font-anton text-5xl font-bold uppercase text-white md:text-[48px]">
              Basketball
            </h4>
            <span className="inline-flex items-center gap-2 font-sora text-sm font-semibold uppercase tracking-[0.05em] text-accent-blue transition-all group-hover:gap-4">
              Shop Performance{" "}
              <MaterialSymbol name="arrow_forward" className="text-lg" />
            </span>
          </div>
        </Link>

        <Link
          to={getShopCollectionUrl("running")}
          className="group relative min-h-[220px] overflow-hidden rounded-xl md:col-span-2 md:row-start-1 md:col-start-3"
        >
          <img
            src={IMG_RUNNING}
            alt=""
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8">
            <h4 className="font-anton text-[32px] font-bold uppercase leading-tight text-white">
              Running
            </h4>
          </div>
        </Link>

        <Link
          to={getShopCollectionUrl("casual")}
          className="group relative min-h-[220px] overflow-hidden rounded-xl md:col-start-3 md:row-start-2"
        >
          <img
            src={IMG_CASUAL}
            alt=""
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8">
            <h4 className="font-anton text-2xl font-bold uppercase text-white md:text-[24px]">
              Casual
            </h4>
          </div>
        </Link>

        <Link
          to={getShopCollectionUrl("lifestyle")}
          className="group relative min-h-[220px] overflow-hidden rounded-xl md:col-start-4 md:row-start-2"
        >
          <img
            src={IMG_LIFESTYLE}
            alt=""
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8">
            <h4 className="font-anton text-2xl font-bold uppercase text-white md:text-[24px]">
              Lifestyle
            </h4>
          </div>
        </Link>
      </div>
    </section>
  );
}

export default BentoCategories;
