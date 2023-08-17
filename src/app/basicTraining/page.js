"use client";

import React from "react";
import style from "./basicTraining.module.css";
const page = () => {
  return (
    <>
      <section className={style.basicTraning}>
        <div className="container">
          <div className={`row ${style.first_row}`}>
            <div className="col-lg-6  col-md-6 col-sm-12 text-center">
              <div className={style.microgen_overiew}>
                <h2>MicroGenDx Overview</h2>
                <div className={style.video_box}></div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 text-center">
              <div className={style.microgen_overiew}>
                <h2>Understanding Lab Results</h2>
                <div className={style.video_box}></div>
              </div>
            </div>
          </div>
          <div className={`row ${style.second_row}`}>
            <div className="col-lg-12 text-center">
              <div className={style.identify_}>
                <h2 className={style.problem_diagnostics}>
                  Identifying the Problems of Current Diagnostics
                </h2>
              </div>
            </div>
          </div>
          <div className={`row ${style.third_row}`}>
            <div className="col-lg-12">
              <div className={style.lists}>
                <h4>
                  Understanding the Problems & limitations with Culturing
                  Methods & PCR
                </h4>
                <ul>
                  <li>
                    Culture Method – take sample of blood, urine etc & send into
                    culture lab to grow organisms to try and identify
                    problem(pathogenic) organisms
                  </li>
                  <li>
                    Over 70% of infections are now caused by Biofilms. Biofilms
                    can not be grown in culture labs.
                  </li>
                  <li className={style.bio}>
                    Biofilms are a main contributor for Chronic Infections.
                    <ul>
                      <li>
                        Without the correct data from diagnostics an incorrect
                        treatment plan can allow an infection to remain for
                        months, years and decades.
                      </li>
                    </ul>
                  </li>
                  <li>
                    {" "}
                    Culture samples must arrive to lab within 2 hours & at room
                    temperature for optimal growing conditions. These specimen
                    management requirements are dictated by IDSA (Infectious
                    Disease Society of America) and ASM(American Society of
                    Microbiology).
                  </li>
                  <li>
                    A Positive traditional Culture Report be the result of a lab
                    cross contaminations
                  </li>
                  <li>
                    Growth Reports” or no results leave physicians with
                    guesswork to determine best treatment. This results in the
                    overuse of antibiotics and leads to antibiotics resistance.
                  </li>
                  <li>Many labs deliver no growth reports 35% of the time.</li>
                  <li>
                    In Urology 40-60% of reports can be negative or No Growth.
                  </li>
                  <li>
                    Research shows that traditional cultures have a 15% chance
                    of identifying the dominant species.
                  </li>
                  <li>Traditional Cultures are wrong 75-85% of the time.</li>
                  <li>
                    Traditional Cultures can only grow 1% of all known
                    microorganisms.
                  </li>
                  <li>
                    Know which kind of Microbes grow in the dish, agar/plate
                    Anaerobic bacteria are next to impossible for Traditional
                    Cultures to identify. Fungi can take a month to grow in a
                    lab and notify the physician of the fungal species.
                  </li>
                  <li>
                    Understand SIR / Sensitivity Reports - watch video below
                  </li>
                  <li>
                    $$$ There is significant cost when physicians must run 3
                    separate culture test aerobic, anaerobic and fungus.
                  </li>
                  <li>
                    PCR technology is limited to a panel of species (1-15).
                  </li>
                </ul>
                <p className={style.para}>
                  Please Note: Next Generation DNA Sequencing has no limitation
                  or panel size
                </p>
              </div>
            </div>
          </div>
          <div className={`row ${style.forth_row}`}>
            <div className="col-lg-12 text-center">
              <div className={style.identify_}>
                <h2 className={style.problem_diagnostics}>
                  Identifying the Problems of Current Diagnostics
                </h2>
              </div>
            </div>
          </div>
          <div className={`row ${style.fifth_row}`}>
            <div className="col-lg-12">
              <div className={style.lists}>
                <h4>
                  The Basics of What MDX Offers Physicians NEXT GENERATION DNA
                  SEQUENCING The Advantages
                </h4>
                <ul className={style.advantage_}>
                  <li>
                    Our samples do not need to follow Culture guidelines as Time
                    and Temperature do not easily effect samples for our testing
                    process
                  </li>
                  <li>
                    We do not grow anything. We Extract Microbial DNA from each
                    sample.
                  </li>
                  <li className={style.bio}>
                    We do not deliver a SIR / Sensitivity report
                    <ul>
                      <li>
                        Understand why this is a sticking point with Physicians.
                        They are trained to make decisions based on the SIR
                        report
                      </li>
                      <li>Watch the video below</li>
                    </ul>
                  </li>
                  <li>
                    We extract the Microbial DNA and compare the detected DNA to
                    a Library 25,000 known microbial sequence codes
                  </li>
                  <li>
                    Microgen DX uses Level I PCR & qPCR / Level II DNA Next
                    Generation DNA Sequencing
                  </li>
                  <li>
                    We deliver our Level I PCR results with Bacterial Load
                    within 24 hours of receiving the sample
                  </li>
                  <li className={style.bio}>
                    Understand Bacterial load: low – med – High
                    <ul>
                      <li>
                        The quantitative load of a swab will be given in a range
                        of Low Med High <br />
                        Tissue and bone will be given in quantitative bacterial
                        load numerically i.e., 10/5 or 10/6 10/3Low 10/5Med 10/7
                        + High
                      </li>
                    </ul>
                  </li>
                  <li>
                    Please Note: Microbes might be detected in Level I but may
                    not be shown in level II if they represent less than 2% of
                    the overall microbial load
                  </li>
                  <li>
                    More Accurate Microbial Diagnostics results in more accurate
                    Antibiotic selection
                  </li>
                  <li>
                    Within 3-5 days we deliver the full Next Generation DNA
                    Sequence Results using the DNA in the Sample with a library
                    of 25,000 known Microbes’ DNA
                  </li>
                  <li>
                    Level II report lists out all detected microbes by its
                    percentages of DNA found in the sample
                  </li>
                  <li className={style.bio}>
                    Our technology has been measured for precision and more than
                    6 years has been 100% accurate. (CLIA & CAP inspections)
                    <ul>
                      <li>
                        We detect antibiotic resistant genes with more being
                        added to the panel.
                      </li>
                    </ul>
                  </li>
                  <li className={style.bio}>
                    We also deliver the Antibiotic Recommendation Sheet for
                    species identified
                    <ul>
                      <li>Watch the Understanding you Results Video</li>
                      <li>
                        We also have explainer sheets of level 1 & II reports
                      </li>
                    </ul>
                  </li>
                  <li>
                    If a topical treatment is desired for wound, sinus and
                    bladder Microgen DX works closely with Compounding
                    pharmacies to make those customized solutions
                  </li>
                  <li>
                    We test for all types of microbes & Resistant Genes with 1
                    test at 1 price
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={`row ${style.sixth_row}`}>
            <div className="col-lg-4 col-md-5 col-sm-12">
              <div className={style.video}></div>
            </div>
            <div className="col-lg-8 col-md-7 col-sm-12">
              <div className={style.basicLinkis}>
                <a href="#">Learn more about BIOFILMS</a>
                <a href="#">Review Lab Report Breakdown</a>
              </div>
            </div>
          </div>
        </div>
        <div className={style.complete}>
          <h4>Congratulations, you've made it though Basic Training!</h4>
          <div className="mb-2">
            <a href="#">
              Click Here for Part 2 - Learn the Science of MicroGenDx
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
