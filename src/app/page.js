"use client"; // this is a client component 👈🏽
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import BreadCrum from "@/components/breadCrum/BreadCrum";
import { useEffect, useState } from "react";
import mdx from "../assets/images/singleproductsimages/mdxhomepagepost.jpg";
import HomePagePosts from "@/components/homePagePosts/HomePagePosts";
import micro from "../assets/images/singleproductsimages/microgenmicro.png";
import newAccount from "../assets/images/singleproductsimages/newaccount.png";
import localtion from "../assets/images/singleproductsimages/map.png";
import newSalep from "../assets/images/singleproductsimages/newsalepiece.png";
import mba from "../assets/images/singleproductsimages/mba.png";
import hammer from "../assets/images/singleproductsimages/rulehamer.png";
import HomePageInsiderBtn from "@/components/homePageInsiderButton/HomePageInsiderBtn";
// import VideoPlayer from "react-video-player-extended";
import HomeAnnouncementList from "@/components/homePageAnnouncementList/HomeAnnouncementList";
import ann1 from "../assets/images/singleproductsimages/ann1.png";
import ann2 from "../assets/images/singleproductsimages/ann2.png";
import ann3 from "../assets/images/singleproductsimages/ann3.png";
import ann4 from "../assets/images/singleproductsimages/ann4.png";
import ann5 from "../assets/images/singleproductsimages/ann5.png";
import Pagination from "@/components/pagination/Pagination";
import withAuth from "@/utils/auth";
import axios from "axios";
import Spinner from "@/components/spinner/Spinner";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [postData, setPostData] = useState([]);
  const [user, setUser] = useState([]);
  const [annList, setAnnList] = useState([
    {
      image: ann1,
      annTitle: "Candida auris Sales Piece",
      date: "June 10, 2022",
      Link: "https://repconnect.blaksheepdev.com/candida-auris-sales-piece/",
    },
    {
      image: ann2,
      annTitle: "Do Not Use Anything with Old Branding",
      date: "June 9, 2022",
      Link: "https://repconnect.blaksheepdev.com/do-not-use-anything-with-old-branding/",
    },
    {
      image: ann3,
      annTitle: "REMINDER: New Website Sign-Up Procedure",
      date: "June 9, 2022",
      Link: "https://repconnect.blaksheepdev.com/reminder-new-account-sign-up-procedure/",
    },
    {
      image: ann4,
      annTitle: "Candida Auris: An Inroads into Hospitals",
      date: "June 6, 2022",
      Link: "https://repconnect.blaksheepdev.com/candida-auris-an-inroads-into-hospitals/",
    },
    {
      image: ann5,
      annTitle: "Osteodiscitis: Intro to a New ID Opportunity",
      date: "June 3, 2022",
      Link: "https://repconnect.blaksheepdev.com/osteodiscitis-intro-to-a-new-id-opportunity/",
    },
  ]);
  const [insiderButton, setInsiderButton] = useState([
    {
      title: "Customer Survey",
      link: "https://airtable.com/shrQBdi4M4bj5Ch2U ",
    },
    {
      title: "Physician Consulting Agreement",
      link: "https://airtable.com/shr35R1fL083YmR54",
    },
    {
      title: "Conference Leads Follow-Up",
      link: "https://microgendx.quickbase.com/db/bp26g4yrf?a=nwr",
    },
  ]);
  const [searh, setSearch] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.7);

  const handlePlay = () => {
    setIsPlaying(true);
  };
  const handlePause = () => {
    setIsPlaying(false);
  };
  const handleVolume = (value) => {
    // this.setState({ volume: value })
    setVolume(value);
  };

  useEffect(() => {
    setLoading(true);
    const userToken = JSON.parse(localStorage.getItem("token"));
    const header = {
      "x-auth-token": userToken,
      "Content-Type": "application/json",
    };
    axios
      .get(`${process.env.NEXT_PUBLIC_URL}api/post`)
      .then((resp) => {
        setPostData(resp.data.data.post);
        setLoading(false);
        console.log(resp.data.data.post);
      })
      .catch((err) => console.log(err));

    axios
      .get(`${process.env.NEXT_PUBLIC_URL}api/user/me`, {
        headers: header,
      })
      .then((resp) => {
        setUser(resp.data.data.me);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <BreadCrum
        breadHeading="MicroGenDX Rep Connect"
        pagess={[
          {
            page: "Home",
            link: "/",
          },
        ]}
      />

      {loading ? (
        <Spinner />
      ) : (
        <>
          <section className={styles.home_page}>
            <div className="container-xxl">
              <div className="row">
                <div className="col-lg-12 p-0">
                  <div className={styles.welcome_note}>
                    <p>Welcome Back</p>
                    <h2>{user.username}</h2>
                  </div>
                </div>
              </div>
              <div className="row align-items-center my-3 border-bottom py-3">
                <div className="col-lg-6 col-md-6 col-sm-12 p-0">
                  <div className={styles.search_home}>
                    <form>
                      <input
                        type="text"
                        className="form-control "
                        id="exampleFormControlInput1"
                        placeholder="Enter Your Search"
                        value={searh}
                        onChange={(e) => setSearch(e.target.value)}
                      />

                      <i className="fa-solid fa-magnifying-glass gleass"></i>
                      <span className={styles.cancelIcon}>
                        <i className="fa-sharp fa-solid fa-xmark markxx"></i>
                      </span>
                    </form>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 p-0 text-end">
                  <div className={styles.social_media_icon}>
                    <Link
                      href="https://www.youtube.com/channel/UC4Io_VYg7aC3kJ_Veec9qFw"
                      target="blank"
                    >
                      <i className="fa-brands fa-youtube"></i>
                    </Link>
                    <Link
                      href="https://www.facebook.com/microgendx"
                      target="blank "
                    >
                      <i className="fa-brands fa-facebook-f"></i>
                    </Link>
                    <Link
                      href="https://www.instagram.com/microgendx/"
                      target="blank"
                    >
                      <i className="fa-brands fa-instagram"></i>
                    </Link>
                    <Link
                      href="https://microgendx.com/microgendx-blog/"
                      target="blank"
                    >
                      <i className="fa-brands fa-wordpress"></i>
                    </Link>
                    <Link href="https://twitter.com/microgendx" target="blank">
                      <i className="fa-brands fa-twitter"></i>
                    </Link>
                    <Link
                      href="https://www.linkedin.com/company/microgendx/"
                      target="blank"
                    >
                      <i className="fa-brands fa-linkedin-in"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className={styles.bottomPosts}>
            <div className="container-xxl">
              <div className="row ">
                <div className="col-lg-8 col-md-12 col-sm-12">
                  <div className={styles.homeLeftSide}>
                    <Image
                      src={mdx}
                      alt="image"
                      className="img-fluid banner_img"
                    />
                  </div>
                  <div>
                    {postData?.map((e, idx) => {
                      return <HomePagePosts key={idx} item={e} />;
                    })}
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12">
                  <div className={styles.homeRightSide}>
                    <h3>MicroGenDX Insider</h3>
                    <div className={styles.post_image_right_side}>
                      <a href="#" className={styles.image_Wrapper_top}>
                        <Image src={hammer} alt="image" className="img-fluid" />
                      </a>
                      <h3>
                        <a href="https://repconnect.blaksheepdev.com/lab-company-owners-indicted-for-false-billing-of-medically-unnecessary-tests/">
                          Lab Company Owners Indicted for False Billing of
                          Medically Unnecessary Tests
                        </a>
                      </h3>
                      <h4>
                        Case: &nbsp; A north Texas federal grand jury indicted
                        10 people …
                      </h4>
                    </div>
                    <div className={styles.buttonDiv}>
                      {insiderButton.map((e, idx) => {
                        return (
                          <HomePageInsiderBtn
                            key={idx}
                            title={e.title}
                            link={e.link}
                          />
                        );
                      })}
                    </div>
                    <div className={styles.media_video}>
                      <h3>
                        MicroGenDX Minute – Ep.5: Why is MicroGenDX Vital to the
                        Clearing of Chronic UTIs??
                      </h3>
                      <div className="video_section"></div>
                    </div>
                    <div className={styles.question_section}>
                      <a href="#">
                        <span>
                          <i className="fa-solid fa-bullhorn"></i>
                        </span>
                        Suggest a Topic/Question
                      </a>
                    </div>
                    <div className={styles.announcemnets}>
                      <h3>Recent Announcements</h3>
                      <div className={styles.announcement_list}>
                        <ul>
                          {annList.map((e, idx) => {
                            return (
                              <HomeAnnouncementList
                                key={idx}
                                image={e.image}
                                annTitle={e.annTitle}
                                date={e.date}
                                Link={e.Link}
                              />
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center my-4">
                <div className="col-lg-6">
                  <Pagination />
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default withAuth(Home);
