import type { NextPage } from "next";
import Link from "next/link";
import ProductBase from "./components/product";
import ChairImage from "./Images/chair2.png";
import tableImage1 from "./Images/table1.png";
import tableImage2 from "./Images/table2.png";
import sofaImage from "./Images/sofa1.png";
import bedImage from "./Images/bed1.png";
import bedSofaImage from "./Images/sofa-bed.png";
import FloatingBtn from "./components/floatingBtn";

const MarketCart: NextPage = () => {
  return (
    <div className="dark grid min-h-screen gap-10 bg-slate-300 py-20 px-10 lg:grid-cols-2 xl:grid-cols-3 xl:place-content-center ">
      <div className="flex justify-between">
        <div className="text-3xl font-bold">Homepage</div>
        <Link href={"marketCart/personalCart"}>
          <div className="mt-3 cursor-pointer text-sm font-bold text-black/60">
            Personel Page
          </div>
        </Link>
      </div>
      <ProductBase
        page={"Main Product"}
        grade={4.5}
        name={"Swing Chair"}
        cate={"chair"}
        price={350}
        Images={ChairImage}
      />
      <ProductBase
        page={"Main Product"}
        grade={4.7}
        name={"Wooden Table"}
        cate={"table"}
        price={200}
        Images={tableImage1}
      />
      <ProductBase
        page={"Main Product"}
        grade={4.8}
        name={"Marble table"}
        cate={"table"}
        price={145}
        Images={tableImage2}
      />
      <ProductBase
        page={"Main Product"}
        grade={4.9}
        name={"Two People Sofa"}
        cate={"sofa"}
        price={450}
        Images={sofaImage}
      />
      <ProductBase
        page={"Main Product"}
        grade={4.6}
        name={"Single Bed"}
        cate={"bed"}
        price={680}
        Images={bedImage}
      />
      <ProductBase
        page={"Main Product"}
        grade={4.4}
        name={"Sofa And Bed"}
        cate={"sofa bed"}
        price={790}
        Images={bedSofaImage}
      />
      <FloatingBtn href={"marketCart/personalCart"}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
          />
        </svg>
      </FloatingBtn>
      <span className="h-1 text-xs ">
        PS ... <br />I found those images from google Image. I use them only for
        my studying. I promise not to take any financial gain.{" "}
      </span>
    </div>
  );
};
// more tailwind tip : how to do a personal setting, text-[97851px] , text-[#0000] , bg-[url("/image.svg")]
export default MarketCart;
