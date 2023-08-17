"use client";
import GeneralAbsPosts from "@/components/generalAbsPosts/GeneralAbsPosts";
import { useState } from "react";
import styless from "../style.module.css";
import BreadCrum from "@/components/breadCrum/BreadCrum";
import withAuth from "@/utils/auth";
const page = ({ params }) => {
  let { id } = params;
  console.log("Params", id);
  const [trainingData, setTrainingData] = useState([
    {
      trainingHeading: "Sulfonamides",
    },
    {
      trainingHeading: "Tetracyclines",
    },
    {
      trainingHeading: "Aminoglycosides",
    },
    {
      trainingHeading: "Amphenicol",
    },
    {
      trainingHeading: "Beta Lactams",
    },
    {
      trainingHeading: "Cephalosporins",
    },
    {
      trainingHeading: "Glycopeptides",
    },
    {
      trainingHeading: "Macrolides",
    },
    {
      trainingHeading: "Oxazolidinones",
    },
    {
      trainingHeading: "Penicillins",
    },
    {
      trainingHeading: "Streptogramins",
    },
  ]);
  return (
    <>
        <BreadCrum
        breadHeading={id}
        pagess={[
          {
            page: "Home",
            link: "/",
          },
          {
            page: "Generning Tranning",
            link: "/",
          },
          {
            page: "Home",
            link: { id },
          },
        ]}
      />
      <section className={styless.training_wrapper_}>
        <div className="container-xxl">
          <div className="row">
            {trainingData.map((e, idx) => {
              return (
                <div className=" col-lg-4 col-md-6 col-sm-6" key={idx}>
                  <GeneralAbsPosts
                    key={idx}
                    trainingHeading={e.trainingHeading}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
export default withAuth(page);
