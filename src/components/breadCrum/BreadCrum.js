import React from "react";
import "./BreadCrum.css";
const BreadCrum = (props) => {
  const { breadHeading, pagess } = props;

  return (
    <section className="breadcrum_wrapper">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-12 text-center">
            <div className="bread_details text-center">
              <h4 className="heading">{breadHeading}</h4>
              <nav aria-label="breadcrumb" className="breadcrumsss-class">
                <ol className="breadcrumb m-0 justify-content-center">
                  {pagess?.map((el, index) => {
                    return (
                      <React.Fragment key={index}>
                        {pagess.length === 1 ? (
                          <li className="breadcrumb-item">{el.page}</li>
                        ) : pagess.length - 1 !== index ? (
                          <a className="breadcrumb-item" href={el.link}>
                            {el.page}
                          </a>
                        ) : (
                          <li className="breadcrumb-item">{el.page}</li>
                        )}
                      </React.Fragment>
                    );
                  })}
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreadCrum;
