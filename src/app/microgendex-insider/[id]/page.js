"use client";
import styles from "../microgendxInsider.module.css";
import jail from "../../../assets/images/microgenInsider/jail.png";
import withAuth from "@/utils/auth";
import BreadCrum from "@/components/breadCrum/BreadCrum";
import SidebarInsider from "@/components/microgendxInsiderComponent/sidebar/SidebarInsider";
import comment1 from "../../../assets/images/singleproductsimages/comment1.png";
import comment2 from "../../../assets/images/singleproductsimages/comment2.jpg";
import comment3 from "../../../assets/images/singleproductsimages/comment3.png";
import BlogComments from "@/components/blogComments/BlogComments";
import like1 from "../../../assets/images/singleproductsimages/like1.png";
import like3 from "../../../assets/images/singleproductsimages/like3.jpeg";
import like4 from "../../../assets/images/singleproductsimages/like4.png";
import like5 from "../../../assets/images/singleproductsimages/like5.png";
import like6 from "../../../assets/images/singleproductsimages/like6.png";
import like7 from "../../../assets/images/singleproductsimages/like7.jpg";
import like8 from "../../../assets/images/singleproductsimages/like8.jpg";
import like9 from "../../../assets/images/singleproductsimages/like9.jpg";
import like10 from "../../../assets/images/singleproductsimages/like10.png";
import { useState } from "react";
import ReplaySection from "@/components/replaySection/ReplaySection";
import Image from "next/image";
const page = ({ params }) => {
  let { id } = params;
  const withoutdash = id.split("-").join(" ");
  const [comments, setComments] = useState([
    {
      userIcon: comment1,
      usertitle: "Darci Simon",
      dates: "June 10,2022 at 4:52pm",
      para: "Thank you",
    },
    {
      userIcon: comment2,
      usertitle: "michaelmaitland ",
      dates: "June 10, 2022 at 5:47 pm",
      para: "Great to have a company that turns things around very quickly to address current health needs from our customers.",
    },
    {
      userIcon: comment3,
      usertitle: "larskeeley",
      dates: "June 16, 2022 at 11:26 am",
      para: "Team  We have a lot going on but nothing will help you more than developing your own ID support in your territory! Don’t believe me…just ask Luis Lopez who is on the cusp on bringing on two whoppers in new accounts. IDs know Candida Auris is a problem and they love our price point and see the value of our NGS as a pre-screening solution!   As you pursue new business/providers a local ID Ambassador will help smooth acceptance and adoption!      Good hunting!",
    },
  ]);
  const [likes, setLikes] = useState([
    {
      img: like1,
    },
    {
      img: like6,
    },
    {
      img: like3,
    },
    {
      img: like4,
    },
    {
      img: like5,
    },
    {
      img: like9,
    },
    {
      img: like6,
    },
    {
      img: like9,
    },
    {
      img: like7,
    },
    {
      img: like8,
    },
    {
      img: like10,
    },
  ]);
  return (
    <>
      <BreadCrum
        breadHeading={withoutdash}
        pagess={[
          {
            page: "Home",
            link: "/",
          },
          {
            page: "Category",
            link: "/category/compliance",
          },
          {
            page: withoutdash,
            link: "/",
          },
        ]}
      />
      <section className={styles.insiderSubPageWrapper}>
        <div className="container-xxl">
          <div className="row">
            <div className="col-lg-9 col-md-8">
              <aside className="pe-lg-3 pe-0">
                <div className={styles.image_wrapper}>
                  <div className={styles.image_}>
                    <img src={jail.src} alt="image" className="img-fluid" />
                  </div>
                </div>
                <div className={`${styles.second_row_blog} pt-5`}>
                  <p>
                    A Florida owner of multiple diagnostic testing laboratories
                    was sentenced today in the Southern District of Florida to
                    82 months in prison for a scheme to defraud the United
                    States and to pay and receive kickbacks through exploiting
                    regulatory waivers put in place to ensure access to health
                    care during the COVID-19 pandemic.
                  </p>
                  <p>
                    According to court documents, Leonel Palatnik, 42, of
                    Aventura, as a co-owner of Panda Conservation Group LLC
                    (Panda), conspired with other co-owners of the company and
                    with Michael Stein, the owner of 1523 Holdings LLC, to pay
                    illegal kickbacks to Stein in exchange for his work
                    arranging for telemedicine providers to authorize genetic
                    testing orders for Panda’s laboratories. 1523 Holdings and
                    Panda then exploited temporary amendments to telehealth
                    restrictions enacted during the pandemic, which were
                    intended to expand access to care for Medicare recipients by
                    making it easier for beneficiaries to receive needed medical
                    care from home. Palatnik and his co-conspirators took
                    advantage of these waivers by using telehealth providers to
                    authorize thousands of medically unnecessary cancer and
                    cardiovascular genetic testing orders. In exchange, Panda
                    gave these providers access to beneficiary information and
                    the opportunity to bill for purported telehealth
                    consultations with Medicare recipients, which often did not
                    take place. On Aug. 31, Palatnik pleaded guilty to one count
                    of conspiracy to defraud the United States and offer
                    kickbacks and one count of paying a kickback.
                  </p>
                </div>
              </aside>
              <div className="row">
                <div className="col pt-2">
                  <div className="like_sections">
                    <button className="likebtn"> </button>
                    <span className="likes_number">+{likes.length}</span>
                  </div>
                  <div
                    className={`pt-3 d-flex flex-wrap   ${styles.links_box}`}
                  >
                    {likes.map((e, i) => {
                      return (
                        <div className={styles.link_item} key={i}>
                          <Image src={e.img} alt={i} className="img-fluid" />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className={styles.comment_section}>
                    <h3>3 Comments</h3>
                    {comments.map((e, idx) => {
                      return (
                        <div key={idx}>
                          <BlogComments
                            id={idx}
                            idx={idx}
                            userIcon={e.userIcon}
                            usertitle={e.usertitle}
                            dates={e.dates}
                            para={e.para}
                            isLiked
                            inddex={idx}
                          />
                        </div>
                      );
                    })}
                  </div>
                  <div className="comment_wrapper">
                    <ReplaySection />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">
              <SidebarInsider />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default withAuth(page);
