"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./mdx-podcast.module.css";
import podcast from "../../assets/images/podcasts/MDX-Podcast-Icon-Horizontal-2020.png";
import podcast01 from "../../assets/images/podcasts/podcasr01.png";
import podcast02 from "../../assets/images/podcasts/podcast02.png";
import podcast03 from "../../assets/images/podcasts/podcast03.png";
import BreadCrum from "@/components/breadCrum/BreadCrum";
import withAuth from "@/utils/auth";

const Mdx_podcasts = () => {
  const [search, setSearch] = useState("");
  const [playback, setPLayBack] = useState(1);
  const [pause, setPause] = useState(true);
  var [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [result, setResult] = useState(false);

  function handleTimeUpdate(event) {
    setCurrentTime(event.target.currentTime);
  }

  function formatTime(timeInSeconds) {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  }
  const handleReverse = () => {
    const x = document.getElementById("myAudio");
    x.currentTime -= 10;
  };

  const handleForward = () => {
    const x = document.getElementById("myAudio");
    x.currentTime += 10;
  };
  const playAudio = (event) => {
    const x = document.getElementById("myAudio");
    setDuration(x.duration);
    console.log("Duration :", x.duration);
    console.log("currentTime :", x.currentTime);
    setPause(!pause);
    x.play();
  };

  const pauseAudio = (event) => {
    const x = document.getElementById("myAudio");
    setDuration(x.duration);
    setPause(!pause);
    x.pause();
  };

  const handlePlayBack = () => {
    const x = document.getElementById("myAudio");
    if (playback >= 2.5) {
      setPLayBack(1);
      x.playbackRate = 1;
    } else {
      setPLayBack(playback + 0.5);
      x.playbackRate = playback;
    }
  };
  const handleSearch = (event) => {
    console.log(" searching ", event.target.value);
    const x = event.target.value.toLowerCase();
    setSearch(x);
    const element = document.getElementById("list");
    const items = element.getElementsByTagName("p");
    for (let i = 0; i < items.length; i++) {
      const text = items[i].innerText.toLowerCase();
      if (text.includes(search)) {
        items[i].style.display = "block";
        console.log("hey", text);
        setResult(true);
      } else {
        items[i].style.display = "none";
      }
    }
  };
  return (
    <>
      <BreadCrum
        breadHeading="MDX Podcasts"
        pagess={[
          {
            page: "Home",
            link: "/",
          },
          {
            page: "MDX Podcasts",
            link: "/",
          },
        ]}
      />
      <div className="container-xxl">
        <section className={styles.section_area}>
          <div className={styles.podcast_img}>
            <Image alt="logo" className="img-fluid" src={podcast} />
          </div>
          <hr />
          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className={styles.main_card}>
                <div className={styles.card_title}>Rick Talk Podcast</div>
                <div className={styles.card}>
                  <Image
                    alt="logo"
                    src={podcast01}
                    className={styles.podcast_img01}
                  />
                  <div className={styles.card_heading}>
                    How to Sell MicroGenDX in the Hospital Setting – with Rick
                    Martin and Robert Fichetti
                  </div>
                  <div className={styles.timing_controls}>
                    <div className={styles.speed} onClick={handlePlayBack}>
                      {playback}x
                    </div>
                    <div className={styles.reverse} onClick={handleReverse}>
                      <i className="fa-solid fa-clock-rotate-left"></i>
                    </div>
                    {pause ? (
                      <div
                        className={styles.pause}
                        onClick={() => playAudio(myAudio)}
                      >
                        <i className="fa-solid fa-play"></i>
                      </div>
                    ) : (
                      <div className={styles.pause} onClick={pauseAudio}>
                        <i className="fa-solid fa-pause"></i>{" "}
                      </div>
                    )}

                    <div className={styles.forward} onClick={handleForward}>
                      <i className="fa-solid fa-rotate-right"></i>
                    </div>
                    <div className={styles.download}>
                      <i className="fa-solid fa-download"></i>
                    </div>
                  </div>
                  <audio
                    id="myAudio"
                    src="http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3"
                    onTimeUpdate={handleTimeUpdate}
                    // onLoadedMetadata={handleLoadedMetadata}
                  >
                    {" "}
                  </audio>
                  <div className={styles.timings}>
                    <div>{formatTime(currentTime)}</div>
                    <div>{formatTime(duration)}</div>
                  </div>
                  <progress
                    className={styles.progress}
                    max={duration}
                    value={currentTime}
                  ></progress>
                  <div
                    className={`accordion accordion-flush ${styles.accord}`}
                    id="accordionFlushExample"
                  >
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="flush-headingOne">
                        <button
                          className={`accordion-button collapsed ${styles.accordion_btn} `}
                          type="button"
                        >
                          <div className={styles.for_back_control}>
                            <div>
                              <i className="fa-solid fa-backward-step"></i>
                            </div>
                            <div>
                              <i
                                className="fa-solid fa-bars"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseOne01"
                                aria-expanded="false"
                                aria-controls="flush-collapseOne01"
                              ></i>
                            </div>
                            <div>
                              <i className="fa-solid fa-forward-step"></i>
                            </div>
                          </div>
                        </button>
                      </h2>
                      <div
                        id="flush-collapseOne01"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingOne"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className={styles.search_area}>
                          <span className={styles.search_icon}>
                            {" "}
                            <i className="fa-solid fa-magnifying-glass"></i>{" "}
                          </span>
                          <input
                            className={`w-100 ${styles.search_input}`}
                            onChange={handleSearch}
                            type="text"
                            placeholder="Search Episodes"
                          />
                        </div>
                        <div className={styles.accordion_body} id="list">
                          <p className={`${styles.accordion_para}`}>
                            How to Sell MicroGenDX in the Hospital Setting –
                            with Rick Martin and Robert Fichetti
                            <br />
                            <span className={styles.accordion_date}>
                              JUNE 12, 2018
                            </span>
                          </p>
                          <div className={styles.accordion_body}>
                            <p className={styles.accordion_para}>
                              Saturation Selling and the Importance of Building
                              Relationships with your MAs – with Rick Martin
                              <br />
                              <span className={styles.accordion_date}>
                                MAY 30, 2018
                              </span>
                            </p>
                          </div>
                          {result ? <span> No Record Found</span> : ""}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className={styles.main_card}>
                <div className={styles.card_title}>Rick Talk Podcast</div>
                <div className={styles.card}>
                  <Image
                    alt="logo"
                    src={podcast03}
                    className={styles.podcast_img01}
                  />
                  <div className={styles.card_heading}>
                    MDX Round table session 4-4 motivations and rewards
                  </div>
                  <div className={styles.timing_controls}>
                    <div className={styles.speed} onClick={handlePlayBack}>
                      {playback}x
                    </div>
                    <div className={styles.reverse} onClick={handleReverse}>
                      <i className="fa-solid fa-clock-rotate-left"></i>
                    </div>
                    {pause ? (
                      <div className={styles.pause} onClick={playAudio}>
                        <i className="fa-solid fa-play"></i>
                      </div>
                    ) : (
                      <div className={styles.pause} onClick={pauseAudio}>
                        <i className="fa-solid fa-pause"></i>{" "}
                      </div>
                    )}
                    <div className={styles.forward} onClick={handleForward}>
                      <i className="fa-solid fa-rotate-right"></i>
                    </div>
                    <div className={styles.download}>
                      <i className="fa-solid fa-download"></i>
                    </div>
                  </div>
                  <audio
                    id="myAudio"
                    src="http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3"
                    onTimeUpdate={handleTimeUpdate}
                    // onLoadedMetadata={handleLoadedMetadata}
                  >
                    {" "}
                  </audio>
                  <div className={styles.timings}>
                    <div>{formatTime(currentTime)}</div>
                    <div>{formatTime(duration)}</div>
                  </div>
                  <progress
                    className={styles.progress}
                    max={duration}
                    value={currentTime}
                  ></progress>
                  <div
                    className={`accordion accordion-flush ${styles.accord}`}
                    id="accordionFlushExample"
                  >
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="flush-headingOne">
                        <button
                          className={`accordion-button collapsed ${styles.accordion_btn} `}
                          type="button"
                        >
                          <div className={styles.for_back_control}>
                            <div>
                              <i className="fa-solid fa-backward-step"></i>
                            </div>
                            <div>
                              <i
                                className="fa-solid fa-bars"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseOne02"
                                aria-expanded="false"
                                aria-controls="flush-collapseOne02"
                              ></i>
                            </div>
                            <div>
                              <i className="fa-solid fa-forward-step"></i>
                            </div>
                          </div>
                        </button>
                      </h2>
                      <div
                        id="flush-collapseOne02"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingOne"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          Placeholder content for this accordion, which is
                          intended to demonstrate the{" "}
                          <code>.accordion-flush</code> class. This is the first
                          item's accordion body.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className={styles.main_card}>
                <div className={styles.card_title}>
                  Using Sales Material Effectively Podcast with Rick Martin
                </div>
                <div className={styles.card}>
                  <Image
                    alt="logo"
                    src={podcast03}
                    className={styles.podcast_img01}
                  />
                  <div className={styles.card_heading}>
                    0154 Be Wary of Unscrupulous PCR Labs PODCAST
                  </div>
                  <div className={styles.timing_controls}>
                    <div className={styles.speed} onClick={handlePlayBack}>
                      {playback}x
                    </div>
                    <div className={styles.reverse} onClick={handleReverse}>
                      <i className="fa-solid fa-clock-rotate-left"></i>
                    </div>
                    {pause ? (
                      <div className={styles.pause} onClick={playAudio}>
                        <i className="fa-solid fa-play"></i>
                      </div>
                    ) : (
                      <div className={styles.pause} onClick={pauseAudio}>
                        <i className="fa-solid fa-pause"></i>{" "}
                      </div>
                    )}
                    <div className={styles.forward} onClick={handleForward}>
                      <i className="fa-solid fa-rotate-right"></i>
                    </div>
                    <div className={styles.download}>
                      <i className="fa-solid fa-download"></i>
                    </div>
                  </div>
                  <audio
                    id="myAudio"
                    src="http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3"
                    onTimeUpdate={handleTimeUpdate}
                    // onLoadedMetadata={handleLoadedMetadata}
                  >
                    {" "}
                  </audio>
                  <div className={styles.timings}>
                    <div>{formatTime(currentTime)}</div>
                    <div>{formatTime(duration)}</div>
                  </div>
                  <progress
                    className={styles.progress}
                    max={duration}
                    value={currentTime}
                  ></progress>
                  <div
                    className={`accordion accordion-flush ${styles.accord}`}
                    id="accordionFlushExample"
                  >
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="flush-headingOne">
                        <button
                          className={`accordion-button collapsed ${styles.accordion_btn} `}
                          type="button"
                        >
                          <div className={styles.for_back_control}>
                            <div>
                              <i className="fa-solid fa-backward-step"></i>
                            </div>
                            <div>
                              <i
                                className="fa-solid fa-bars"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseOne03"
                                aria-expanded="false"
                                aria-controls="flush-collapseOne03"
                              ></i>
                            </div>
                            <div>
                              <i className="fa-solid fa-forward-step"></i>
                            </div>
                          </div>
                        </button>
                      </h2>
                      <div
                        id="flush-collapseOne03"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingOne"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          Placeholder content for this accordion, which is
                          intended to demonstrate the{" "}
                          <code>.accordion-flush</code> class. This is the first
                          item's accordion body.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className={styles.main_card}>
                <div className={styles.card_title}>
                  Advisory Board Presentations Podcast
                </div>
                <div className={styles.card}>
                  <Image
                    alt="logo"
                    src={podcast03}
                    className={styles.podcast_img01}
                  />
                  <div className={styles.card_heading}>
                    0154 Be Wary of Unscrupulous PCR Labs PODCAST
                  </div>
                  <div className={styles.timing_controls}>
                    <div className={styles.speed} onClick={handlePlayBack}>
                      {playback}x
                    </div>
                    <div className={styles.reverse} onClick={handleReverse}>
                      <i className="fa-solid fa-clock-rotate-left"></i>
                    </div>
                    {pause ? (
                      <div className={styles.pause} onClick={playAudio}>
                        <i className="fa-solid fa-play"></i>
                      </div>
                    ) : (
                      <div className={styles.pause} onClick={pauseAudio}>
                        <i className="fa-solid fa-pause"></i>{" "}
                      </div>
                    )}

                    <div className={styles.forward} onClick={handleForward}>
                      <i className="fa-solid fa-rotate-right"></i>
                    </div>
                    <div className={styles.download}>
                      <i className="fa-solid fa-download"></i>
                    </div>
                  </div>
                  <audio
                    id="myAudio"
                    src="http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3"
                    onTimeUpdate={handleTimeUpdate}
                    // onLoadedMetadata={handleLoadedMetadata}
                  >
                    {" "}
                  </audio>
                  <div className={styles.timings}>
                    <div>{formatTime(currentTime)}</div>
                    <div>{formatTime(duration)}</div>
                  </div>
                  <progress
                    className={styles.progress}
                    max={duration}
                    value={currentTime}
                  ></progress>
                  <div
                    className={`accordion accordion-flush ${styles.accord}`}
                    id="accordionFlushExample"
                  >
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="flush-headingOne">
                        <button
                          className={`accordion-button collapsed ${styles.accordion_btn} `}
                          type="button"
                        >
                          <div className={styles.for_back_control}>
                            <div>
                              <i className="fa-solid fa-backward-step"></i>
                            </div>
                            <div>
                              <i
                                className="fa-solid fa-bars"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseOne04"
                                aria-expanded="false"
                                aria-controls="flush-collapseOne04"
                              ></i>
                            </div>
                            <div>
                              <i className="fa-solid fa-forward-step"></i>
                            </div>
                          </div>
                        </button>
                      </h2>
                      <div
                        id="flush-collapseOne04"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingOne"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          Placeholder content for this accordion, which is
                          intended to demonstrate the{" "}
                          <code>.accordion-flush</code> class. This is the first
                          item's accordion body.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className={styles.main_card}>
                <div className={styles.card_title}>
                  The Preceptorship Podcast
                </div>
                <div className={styles.card}>
                  <Image
                    alt="logo"
                    src={podcast03}
                    className={styles.podcast_img01}
                  />
                  <div className={styles.card_heading}>
                    0154 Be Wary of Unscrupulous PCR Labs PODCAST
                  </div>
                  <div className={styles.timing_controls}>
                    <div className={styles.speed} onClick={handlePlayBack}>
                      {playback}x
                    </div>
                    <div className={styles.reverse} onClick={handleReverse}>
                      <i className="fa-solid fa-clock-rotate-left"></i>
                    </div>
                    {pause ? (
                      <div className={styles.pause} onClick={playAudio}>
                        <i className="fa-solid fa-play"></i>
                      </div>
                    ) : (
                      <div className={styles.pause} onClick={pauseAudio}>
                        <i className="fa-solid fa-pause"></i>{" "}
                      </div>
                    )}

                    <div className={styles.forward} onClick={handleForward}>
                      <i className="fa-solid fa-rotate-right"></i>
                    </div>
                    <div className={styles.download}>
                      <i className="fa-solid fa-download"></i>
                    </div>
                  </div>
                  <audio
                    id="myAudio"
                    src="http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3"
                    onTimeUpdate={handleTimeUpdate}
                    // onLoadedMetadata={handleLoadedMetadata}
                  >
                    {" "}
                  </audio>
                  <div className={styles.timings}>
                    <div>{formatTime(currentTime)}</div>
                    <div>{formatTime(duration)}</div>
                  </div>
                  <progress
                    className={styles.progress}
                    max={duration}
                    value={currentTime}
                  ></progress>
                  <div
                    className={`accordion accordion-flush ${styles.accord}`}
                    id="accordionFlushExample"
                  >
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="flush-headingOne">
                        <button
                          className={`accordion-button collapsed ${styles.accordion_btn} `}
                          type="button"
                        >
                          <div className={styles.for_back_control}>
                            <div>
                              <i className="fa-solid fa-backward-step"></i>
                            </div>
                            <div>
                              <i
                                className="fa-solid fa-bars"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseOne05"
                                aria-expanded="false"
                                aria-controls="flush-collapseOne05"
                              ></i>
                            </div>
                            <div>
                              <i className="fa-solid fa-forward-step"></i>
                            </div>
                          </div>
                        </button>
                      </h2>
                      <div
                        id="flush-collapseOne05"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingOne"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          Placeholder content for this accordion, which is
                          intended to demonstrate the{" "}
                          <code>.accordion-flush</code> class. This is the first
                          item's accordion body.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className={styles.main_card}>
                <div className={styles.card_title}>
                  The Listen and Learn Podcast
                </div>
                <div className={styles.card}>
                  <Image
                    alt="logo"
                    src={podcast03}
                    className={styles.podcast_img01}
                  />
                  <div className={styles.card_heading}>
                    0154 Be Wary of Unscrupulous PCR Labs PODCAST
                  </div>
                  <div className={styles.timing_controls}>
                    <div className={styles.speed} onClick={handlePlayBack}>
                      {playback}x
                    </div>
                    <div className={styles.reverse} onClick={handleReverse}>
                      <i className="fa-solid fa-clock-rotate-left"></i>
                    </div>
                    {pause ? (
                      <div className={styles.pause} onClick={playAudio}>
                        <i className="fa-solid fa-play"></i>
                      </div>
                    ) : (
                      <div className={styles.pause} onClick={pauseAudio}>
                        <i className="fa-solid fa-pause"></i>{" "}
                      </div>
                    )}

                    <div className={styles.forward} onClick={handleForward}>
                      <i className="fa-solid fa-rotate-right"></i>
                    </div>
                    <div className={styles.download}>
                      <i className="fa-solid fa-download"></i>
                    </div>
                  </div>
                  <audio
                    id="myAudio"
                    src="http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3"
                    onTimeUpdate={handleTimeUpdate}
                    // onLoadedMetadata={handleLoadedMetadata}
                  >
                    {" "}
                  </audio>
                  <div className={styles.timings}>
                    <div>{formatTime(currentTime)}</div>
                    <div>{formatTime(duration)}</div>
                  </div>
                  <progress
                    className={styles.progress}
                    max={duration}
                    value={currentTime}
                  ></progress>
                  <div
                    className={`accordion accordion-flush ${styles.accord}`}
                    id="accordionFlushExample"
                  >
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="flush-headingOne">
                        <button
                          className={`accordion-button collapsed ${styles.accordion_btn} `}
                          type="button"
                        >
                          <div className={styles.for_back_control}>
                            <div>
                              <i className="fa-solid fa-backward-step"></i>
                            </div>
                            <div>
                              <i
                                className="fa-solid fa-bars"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseOne06"
                                aria-expanded="false"
                                aria-controls="flush-collapseOne06"
                              ></i>
                            </div>
                            <div>
                              <i className="fa-solid fa-forward-step"></i>
                            </div>
                          </div>
                        </button>
                      </h2>
                      <div
                        id="flush-collapseOne06"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingOne"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          Placeholder content for this accordion, which is
                          intended to demonstrate the{" "}
                          <code>.accordion-flush</code> class. This is the first
                          item's accordion body.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default withAuth(Mdx_podcasts);
