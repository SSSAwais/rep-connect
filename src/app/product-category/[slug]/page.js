"use client";
import AsideWidget from "@/components/asidewidget/AsideWidget";
import BreadCrum from "@/components/breadCrum/BreadCrum";
import CategoryProducts from "@/components/categoryproducts/CategoryProducts";
import style from "./slug.module.css";
import withAuth from "@/utils/auth";
import ProductPagination from "@/components/productPagination/ProductPagination";
import { useEffect } from "react";
import { productCategoryWise } from "@/redux/slices/productCategoryWise";
import { useDispatch, useSelector } from "react-redux";
const Page = ({ params }) => {
  const { slug } = params;
  const renamed = slug.split("-").join(" ");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productCategoryWise(slug));
  }, []);

  return (
    <>
      <BreadCrum
        breadHeading={renamed}
        pagess={[
          {
            page: "Home",
            link: "/",
          },
          {
            page: renamed,
            link: "/",
          },
        ]}
      />
      <section className={style.productCatagoryPage}>
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 p-0">
              <div
                className={`${style.main_category_wrapper} d-flex justify-content-between`}
              >
                <CategoryProducts />
                {/* <AsideWidget /> */}
              </div>
            </div>
          </div>
        </div>
        <ProductPagination />
      </section>
    </>
  );
};

export default withAuth(Page);
