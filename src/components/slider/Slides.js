import { useCallback, useEffect, useState } from "react";
// import styled from "styled-components";
import "./style.css";
import { useInterval } from "./useInterval";
import { useToggle } from "./useToggle";
import { useCount } from "./useCount";
import {
  PreviousIcon,
  NextIcon,
  CloseIcon,
  FullScreenIcon,
  CloseFullScreenIcon,
} from "./Icons";
import { Tooltip } from "./Tooltip";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { togglePopUp } from "@/redux/slices/togglePopup";
import Popup from "./popup/Popup";

// const Slide = styled.div`
//   background: #0b2943;
//   border: 1px solid #5f7e97;
//   border-radius: 0.25rem;
//   color: white;
//   padding: 1rem 1rem 2rem;
//   text-align: center;
//   margin-bottom: 1rem;
//   position: relative;
// `;

// const SlideContent = styled.div`
//   max-width: 600px;
//   margin: 0 auto;
// `;

// const SlideTitle = styled.p`
//   font-size: 2rem;
//   font-weight: bold;
//   margin-top: 0;
//   margin-bottom: 0.25em;
//   line-height: 1.25;
// `;

// const SlideText = styled.p`
//   font-size: 1rem;
//   line-height: 1.5;
// `;

// const SlideNumber = styled.div`
//   position: absolute;
//   font-size: 0.85rem;
//   bottom: 0.75rem;
//   right: 0.75rem;
// `;

// const SlideActionButton = styled.button`
//   height: 40px;
//   width: 40px;
//   font-size: 1.25rem;
//   display: inline-flex;
//   justify-content: center;
//   align-items: center;
//   background: #0b2943;
//   color: white;
//   transition: ease-in 0.2s;
//   border: none;
//   border-radius: 50%;
//   flex-shrink: 0;
//   &:hover {
//     box-shadow: 0 0 0 1px #5f7e97;
//     cursor: pointer;
//     color: #a799ff;
//   }
//   svg {
//     width: 1em;
//     height: 1em;
//   }
//   &:disabled {
//     box-shadow: 0 0 0 0 #5f7e97;
//     color: rgba(255, 255, 255, 0.15);
//     background: #0b2943;
//     cursor: not-allowed;
//   }
// `;

// const SlideActionWrapper = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex-wrap: wrap;
//   margin-top: 1rem;
//   ${SlideActionButton} {
//     margin: 0 0.5rem;
//   }
// `;

// const FullScreen = styled.div`
//   z-index: 999;
//   position: fixed;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   background: #011627;
//   padding: 1rem;
// `;

const ConditionalWrapper = ({ condition, wrapper, children }) =>
  condition ? wrapper(children) : children;

export default function Slides({ slides, autoPlayTime = 1000 }) {
  const [activeIndex, increment, decrement, reset] = useCount();
  const [slide, setActiveSlide] = useState(null);
  const [expanded, setExpanded] = useToggle();
  const [autoPlay, setAutoPlay] = useToggle();
  const [fullScreen, setFullScreen] = useToggle();

  useEffect(() => {
    const { title, text, image } = slides[activeIndex];
    setActiveSlide({ title, text, image });
    if (activeIndex + 1 === slides.length && autoPlay) {
      setAutoPlay();
    }
  }, [activeIndex, slides, setAutoPlay, autoPlay]);

  useInterval(
    () => {
      increment();
    },
    autoPlay ? autoPlayTime : null
  );

  const keyControls = useCallback(
    (event) => {
      if (event.key === "Escape" && fullScreen) {
        setFullScreen(false);
      }
    },
    [fullScreen, setFullScreen]
  );

  useEffect(() => {
    document.addEventListener("keyup", keyControls, false);

    return () => {
      document.removeEventListener("keyup", keyControls, false);
    };
  }, [keyControls]);
  const shareData = useSelector((state) => state.togPop.popupToggle);
  const dispatch = useDispatch();
  const [share, setShare] = useState(true);
  const _handleShare = () => {
    dispatch(togglePopUp());
  };
  return (
    <>
      {shareData ? <Popup /> : ""}
      <ConditionalWrapper
        condition={fullScreen}
        wrapper={(children) => <div className="FullScreen">{children}</div>}
      >
        {expanded ? (
          <div>
            {slides &&
              slides.length > 0 &&
              slides.map(({ title }, idx) => {
                return (
                  <div className="Slide" key={idx}>
                    <div className="SlideContent">
                      <Image src={title} alt="" />
                    </div>
                    <div className="SlideNumber">
                      {idx + 1} of {slides.length}
                    </div>
                  </div>
                );
              })}
          </div>
        ) : (
          <div>
            {slide && (
              <div className="Slide">
                <div className="SlideContent">
                  {/* <h4 className="SlideTitle">{slide.title}</h4> */}
                  <Image src={slide.title} alt="" />
                </div>
                <div className="SlideNumber">
                  {activeIndex + 1} of {slides.length}
                </div>
              </div>
            )}
          </div>
        )}

        <div className="SlideActionWrapper">
          {expanded ? (
            <Tooltip placement="bottom">
              <button onClick={setExpanded} className="SlideActionButton">
                <CloseIcon />
              </button>
            </Tooltip>
          ) : (
            <>
              <Tooltip>
                <button className="SlideActionButton" onClick={_handleShare}>
                  <i className="fa-sharp fa-solid fa-share-nodes"></i>
                </button>
              </Tooltip>
              <Tooltip placement="bottom">
                <button
                  className="SlideActionButton"
                  onClick={decrement}
                  disabled={activeIndex === 0}
                >
                  <PreviousIcon />
                </button>
              </Tooltip>
              <Tooltip placement="bottom">
                <button
                  className="SlideActionButton"
                  onClick={increment}
                  disabled={activeIndex + 1 === slides.length}
                >
                  <NextIcon />
                </button>
              </Tooltip>
              {/* <Tooltip  placement="bottom">
              <button 
              className="SlideActionButton"
                onClick={setAutoPlay}
                disabled={activeIndex + 1 === slides.length}
              >
                {autoPlay ? <StopIcon /> : <PlayIcon />}
              </button>
            </Tooltip> */}
              {/* <Tooltip  placement="bottom">
              <button className="SlideActionButton" onClick={reset}>
                <BackToStartIcon />
              </button>
            </Tooltip>
            <Tooltip  placement="bottom">
              <button className="SlideActionButton" onClick={setExpanded}>
                <ExpandIcon />
              </button>
            </Tooltip> */}
            </>
          )}
          {fullScreen ? (
            <Tooltip placement="bottom">
              <button className="SlideActionButton" onClick={setFullScreen}>
                <CloseFullScreenIcon />
              </button>
            </Tooltip>
          ) : (
            <Tooltip placement="bottom">
              <button className="SlideActionButton" onClick={setFullScreen}>
                <FullScreenIcon />
              </button>
            </Tooltip>
          )}
        </div>
      </ConditionalWrapper>
    </>
  );
}
