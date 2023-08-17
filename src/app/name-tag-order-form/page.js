"use client";
import BreadCrum from "@/components/breadCrum/BreadCrum";
import React, { useState } from "react";
import style from "./nametag.module.css";
import withAuth from "@/utils/auth";
const page = () => {
  const [errorResponse, setErrorResponse] = useState(false);
  const [trueResponse, setTrueResponse] = useState(false);
  const [tagOrderField, setTagOrderField] = useState({
    full_name: "",
    title: "",
    email: "",
    qtytagname: "",
    notes: "",
    address: "",
    addressline2: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
  });
  const hanldechange = (event) => {
    setTagOrderField({
      ...tagOrderField,
      [event.target.name]: event.target.value,
    });
  };

  const hanldeSubmit = (e) => {
    e.preventDefault();
    if (
      !tagOrderField.full_name ||
      !tagOrderField.email ||
      !tagOrderField.address ||
      !tagOrderField.addressline2 ||
      !tagOrderField.city ||
      !tagOrderField.state ||
      !tagOrderField.zipcode ||
      !tagOrderField.country
    ) {
      setErrorResponse(true);
    } else {
      console.log(tagOrderField);
      setErrorResponse(false);
      setTrueResponse(true);
    }
  };

  setTimeout(() => {
    setErrorResponse(false);
    setTrueResponse(false);
  }, 1500);
  return (
    <>
      <BreadCrum
        breadHeading={"Name Tag Order Form"}
        pagess={[
          {
            page: "Home",
            link: "/",
          },
          {
            page: "Name Tag Order Form",
            link: "/",
          },
        ]}
      />
      <section className={style.name_tag_order_form}>
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              {errorResponse && (
                <div className={style.error__response}>
                  <p>
                    There was a problem with your submission. Please review the
                    fields below.
                  </p>
                </div>
              )}
              {trueResponse && (
                <div className={style.success__response}>
                  <p> Thank You</p>
                </div>
              )}

              <form
                onSubmit={hanldeSubmit}
                method="POST"
                className={`${style.form_name_tag_order}`}
              >
                <div className={`${style.first_section} row`}>
                  <div
                    className={`col-lg-6 ${style.form_field} ${
                      errorResponse && style.error__field
                    }`}
                  >
                    <label className={`form-label ${style.label__heading}`}>
                      Full name <span>*</span>
                    </label>
                    <input
                      className="form-control"
                      name="full_name"
                      type="text"
                      value={tagOrderField.full_name}
                      onChange={hanldechange}
                      placeholder="Enter name as it will appear on name tag"
                    />
                    {errorResponse && (
                      <div className={style.error__message}>
                        <span>This field is required.</span>
                      </div>
                    )}
                  </div>
                  <div className={`col-lg-6 ${style.form_field}`}>
                    <label className={`form-label ${style.label__heading}`}>
                      Title
                    </label>
                    <input
                      className="form-control"
                      name="title"
                      type="text"
                      placeholder="Enter title as it will appear on name tag"
                      value={tagOrderField.title}
                      onChange={hanldechange}
                    />
                  </div>
                  <div
                    className={`col-lg-6 ${style.form_field}  ${
                      errorResponse && style.error__field
                    }`}
                  >
                    <label className={`form-label ${style.label__heading}`}>
                      Email <span>*</span>
                    </label>
                    <input
                      className="form-control"
                      name="email"
                      type="email"
                      placeholder="Enter Email to send proofs to"
                      value={tagOrderField.email}
                      onChange={hanldechange}
                    />
                    {errorResponse && (
                      <div className={style.error__message}>
                        <span>This field is required.</span>
                      </div>
                    )}
                  </div>
                </div>
                <div className={`${style.second_section} row`}>
                  <div className={`col-12 ${style.form_field}`}>
                    <label className={`form-label ${style.label__heading}`}>
                      Please select QTY of Name Tages
                    </label>
                    <select
                      className="form-select"
                      name="qtytagname"
                      value={tagOrderField.qtytagname}
                      onChange={hanldechange}
                    >
                      <option value="1 name tag">1 Name Tag</option>
                      <option value="1 name tags">2 Name Tags</option>
                    </select>
                  </div>
                  <div className={`col-12 ${style.form_field}`}>
                    <label className={`form-label ${style.label__heading}`}>
                      Additional Notes
                    </label>
                    <textarea
                      className="form-control"
                      name="notes"
                      placeholder="Additional Notes"
                      value={tagOrderField.notes}
                      onChange={hanldechange}
                    />
                  </div>
                </div>
                <div
                  className={`${
                    errorResponse
                      ? style.errorvaidation + " " + style.last_section
                      : style.last_section
                  } row`}
                >
                  <div className={`col-12 ${style.form_field}`}>
                    <h4 className={style.label__heading}>
                      Address you would like name tag(s) shipped to{" "}
                      <span>*</span>
                    </h4>
                  </div>
                  <div className={`col-12 ${style.form_field}`}>
                    <label className="form-label">Street Address</label>
                    <input
                      className="form-control"
                      name="address"
                      type="text"
                      value={tagOrderField.address}
                      onChange={hanldechange}
                      placeholder="2145 Young Road"
                    />
                  </div>
                  <div className={`col-12 ${style.form_field}`}>
                    <label className="form-label">Address Line 2</label>
                    <input
                      className="form-control"
                      name="addressline2"
                      placeholder="2145 Young Road"
                      type="text"
                      value={tagOrderField.addressline2}
                      onChange={hanldechange}
                    />
                  </div>
                  <div className={`col-lg-6 ${style.form_field}`}>
                    <label className="form-label">City</label>
                    <input
                      className="form-control"
                      name="city"
                      placeholder="Priest River"
                      type="text"
                      value={tagOrderField.city}
                      onChange={hanldechange}
                    />
                  </div>
                  <div className={`col-lg-6 ${style.form_field}`}>
                    <label className="form-label">State</label>
                    <input
                      className="form-control"
                      name="state"
                      placeholder="Washington"
                      type="text"
                      value={tagOrderField.state}
                      onChange={hanldechange}
                    />
                  </div>
                  <div className={`col-lg-6 ${style.form_field}`}>
                    <label className="form-label">Zip Code</label>
                    <input
                      className="form-control"
                      name="zipcode"
                      type="text"
                      placeholder="83822"
                      value={tagOrderField.zipcode}
                      onChange={hanldechange}
                    />
                  </div>
                  <div className={`col-lg-6 ${style.form_field}`}>
                    <label className="form-label">Country</label>
                   
                    <select
                      className="form-select"
                      name="country"
                      value={tagOrderField.country}
                      onChange={hanldechange}
                    >
                      <option defaultValue="selected">Select</option>
                      <option value="Afghanistan">Afghanistan</option>
                      <option value="Albania">Albania</option>
                      <option value="Algeria">Algeria</option>
                      <option value="American Samoa">American Samoa</option>
                      <option value="Andorra">Andorra</option>
                      <option value="Angola">Angola</option>
                      <option value="Anguilla">Anguilla</option>
                      <option value="Antarctica">Antarctica</option>
                      <option value="Antigua and Barbuda">
                        Antigua and Barbuda
                      </option>
                      <option value="Argentina">Argentina</option>
                      <option value="Armenia">Armenia</option>
                      <option value="Aruba">Aruba</option>
                      <option value="Australia">Australia</option>
                      <option value="Austria">Austria</option>
                      <option value="Azerbaijan">Azerbaijan</option>
                      <option value="Bahamas">Bahamas</option>
                      <option value="Bahrain">Bahrain</option>
                      <option value="Bangladesh">Bangladesh</option>
                      <option value="Barbados">Barbados</option>
                      <option value="Belarus">Belarus</option>
                      <option value="Belgium">Belgium</option>
                      <option value="Belize">Belize</option>
                      <option value="Benin">Benin</option>
                      <option value="Bermuda">Bermuda</option>
                      <option value="Bhutan">Bhutan</option>
                      <option value="Bolivia">Bolivia</option>
                      <option value="Bonaire, Sint Eustatius and Saba">
                        Bonaire, Sint Eustatius and Saba
                      </option>
                      <option value="Bosnia and Herzegovina">
                        Bosnia and Herzegovina
                      </option>
                      <option value="Botswana">Botswana</option>
                      <option value="Bouvet Island">Bouvet Island</option>
                      <option value="Brazil">Brazil</option>
                      <option value="British Indian Ocean Territory">
                        British Indian Ocean Territory
                      </option>
                      <option value="Brunei Darussalam">
                        Brunei Darussalam
                      </option>
                      <option value="Bulgaria">Bulgaria</option>
                      <option value="Burkina Faso">Burkina Faso</option>
                      <option value="Burundi">Burundi</option>
                      <option value="Cabo Verde">Cabo Verde</option>
                      <option value="Cambodia">Cambodia</option>
                      <option value="Cameroon">Cameroon</option>
                      <option value="Canada">Canada</option>
                      <option value="Cayman Islands">Cayman Islands</option>
                      <option value="Central African Republic">
                        Central African Republic
                      </option>
                      <option value="Chad">Chad</option>
                      <option value="Chile">Chile</option>
                      <option value="China">China</option>
                      <option value="Christmas Island">Christmas Island</option>
                      <option value="Cocos Islands">Cocos Islands</option>
                      <option value="Colombia">Colombia</option>
                      <option value="Comoros">Comoros</option>
                      <option value="Congo">Congo</option>
                      <option value="Congo, Democratic Republic of the">
                        Congo, Democratic Republic of the
                      </option>
                      <option value="Cook Islands">Cook Islands</option>
                      <option value="Costa Rica">Costa Rica</option>
                      <option value="Croatia">Croatia</option>
                      <option value="Cuba">Cuba</option>
                      <option value="Curaçao">Curaçao</option>
                      <option value="Cyprus">Cyprus</option>
                      <option value="Czechia">Czechia</option>
                      <option value="Côte d'Ivoire">Côte d'Ivoire</option>
                      <option value="Denmark">Denmark</option>
                      <option value="Djibouti">Djibouti</option>
                      <option value="Dominica">Dominica</option>
                      <option value="Dominican Republic">
                        Dominican Republic
                      </option>
                      <option value="Ecuador">Ecuador</option>
                      <option value="Egypt">Egypt</option>
                      <option value="El Salvador">El Salvador</option>
                      <option value="Equatorial Guinea">
                        Equatorial Guinea
                      </option>
                      <option value="Eritrea">Eritrea</option>
                      <option value="Estonia">Estonia</option>
                      <option value="Eswatini">Eswatini</option>
                      <option value="Ethiopia">Ethiopia</option>
                      <option value="Falkland Islands">Falkland Islands</option>
                      <option value="Faroe Islands">Faroe Islands</option>
                      <option value="Fiji">Fiji</option>
                      <option value="Finland">Finland</option>
                      <option value="France">France</option>
                      <option value="French Guiana">French Guiana</option>
                      <option value="French Polynesia">French Polynesia</option>
                      <option value="French Southern Territories">
                        French Southern Territories
                      </option>
                      <option value="Gabon">Gabon</option>
                      <option value="Gambia">Gambia</option>
                      <option value="Georgia">Georgia</option>
                      <option value="Germany">Germany</option>
                      <option value="Ghana">Ghana</option>
                      <option value="Gibraltar">Gibraltar</option>
                      <option value="Greece">Greece</option>
                      <option value="Greenland">Greenland</option>
                      <option value="Grenada">Grenada</option>
                      <option value="Guadeloupe">Guadeloupe</option>
                      <option value="Guam">Guam</option>
                      <option value="Guatemala">Guatemala</option>
                      <option value="Guernsey">Guernsey</option>
                      <option value="Guinea">Guinea</option>
                      <option value="Guinea-Bissau">Guinea-Bissau</option>
                      <option value="Guyana">Guyana</option>
                      <option value="Haiti">Haiti</option>
                      <option value="Heard Island and McDonald Islands">
                        Heard Island and McDonald Islands
                      </option>
                      <option value="Holy See">Holy See</option>
                      <option value="Honduras">Honduras</option>
                      <option value="Hong Kong">Hong Kong</option>
                      <option value="Hungary">Hungary</option>
                      <option value="Iceland">Iceland</option>
                      <option value="India">India</option>
                      <option value="Indonesia">Indonesia</option>
                      <option value="Iran">Iran</option>
                      <option value="Iraq">Iraq</option>
                      <option value="Ireland">Ireland</option>
                      <option value="Isle of Man">Isle of Man</option>
                      <option value="Israel">Israel</option>
                      <option value="Italy">Italy</option>
                      <option value="Jamaica">Jamaica</option>
                      <option value="Japan">Japan</option>
                      <option value="Jersey">Jersey</option>
                      <option value="Jordan">Jordan</option>
                      <option value="Kazakhstan">Kazakhstan</option>
                      <option value="Kenya">Kenya</option>
                      <option value="Kiribati">Kiribati</option>
                      <option value="Korea, Democratic People's Republic of">
                        Korea, Democratic People's Republic of
                      </option>
                      <option value="Korea, Republic of">
                        Korea, Republic of
                      </option>
                      <option value="Kuwait">Kuwait</option>
                      <option value="Kyrgyzstan">Kyrgyzstan</option>
                      <option value="Lao People's Democratic Republic">
                        Lao People's Democratic Republic
                      </option>
                      <option value="Latvia">Latvia</option>
                      <option value="Lebanon">Lebanon</option>
                      <option value="Lesotho">Lesotho</option>
                      <option value="Liberia">Liberia</option>
                      <option value="Libya">Libya</option>
                      <option value="Liechtenstein">Liechtenstein</option>
                      <option value="Lithuania">Lithuania</option>
                      <option value="Luxembourg">Luxembourg</option>
                      <option value="Macao">Macao</option>
                      <option value="Madagascar">Madagascar</option>
                      <option value="Malawi">Malawi</option>
                      <option value="Malaysia">Malaysia</option>
                      <option value="Maldives">Maldives</option>
                      <option value="Mali">Mali</option>
                      <option value="Malta">Malta</option>
                      <option value="Marshall Islands">Marshall Islands</option>
                      <option value="Martinique">Martinique</option>
                      <option value="Mauritania">Mauritania</option>
                      <option value="Mauritius">Mauritius</option>
                      <option value="Mayotte">Mayotte</option>
                      <option value="Mexico">Mexico</option>
                      <option value="Micronesia">Micronesia</option>
                      <option value="Moldova">Moldova</option>
                      <option value="Monaco">Monaco</option>
                      <option value="Mongolia">Mongolia</option>
                      <option value="Montenegro">Montenegro</option>
                      <option value="Montserrat">Montserrat</option>
                      <option value="Morocco">Morocco</option>
                      <option value="Mozambique">Mozambique</option>
                      <option value="Myanmar">Myanmar</option>
                      <option value="Namibia">Namibia</option>
                      <option value="Nauru">Nauru</option>
                      <option value="Nepal">Nepal</option>
                      <option value="Netherlands">Netherlands</option>
                      <option value="New Caledonia">New Caledonia</option>
                      <option value="New Zealand">New Zealand</option>
                      <option value="Nicaragua">Nicaragua</option>
                      <option value="Niger">Niger</option>
                      <option value="Nigeria">Nigeria</option>
                      <option value="Niue">Niue</option>
                      <option value="Norfolk Island">Norfolk Island</option>
                      <option value="North Macedonia">North Macedonia</option>
                      <option value="Northern Mariana Islands">
                        Northern Mariana Islands
                      </option>
                      <option value="Norway">Norway</option>
                      <option value="Oman">Oman</option>
                      <option value="Pakistan">Pakistan</option>
                      <option value="Palau">Palau</option>
                      <option value="Palestine, State of">
                        Palestine, State of
                      </option>
                      <option value="Panama">Panama</option>
                      <option value="Papua New Guinea">Papua New Guinea</option>
                      <option value="Paraguay">Paraguay</option>
                      <option value="Peru">Peru</option>
                      <option value="Philippines">Philippines</option>
                      <option value="Pitcairn">Pitcairn</option>
                      <option value="Poland">Poland</option>
                      <option value="Portugal">Portugal</option>
                      <option value="Puerto Rico">Puerto Rico</option>
                      <option value="Qatar">Qatar</option>
                      <option value="Romania">Romania</option>
                      <option value="Russian Federation">
                        Russian Federation
                      </option>
                      <option value="Rwanda">Rwanda</option>
                      <option value="Réunion">Réunion</option>
                      <option value="Saint Barthélemy">Saint Barthélemy</option>
                      <option value="Saint Helena, Ascension and Tristan da Cunha">
                        Saint Helena, Ascension and Tristan da Cunha
                      </option>
                      <option value="Saint Kitts and Nevis">
                        Saint Kitts and Nevis
                      </option>
                      <option value="Saint Lucia">Saint Lucia</option>
                      <option value="Saint Martin">Saint Martin</option>
                      <option value="Saint Pierre and Miquelon">
                        Saint Pierre and Miquelon
                      </option>
                      <option value="Saint Vincent and the Grenadines">
                        Saint Vincent and the Grenadines
                      </option>
                      <option value="Samoa">Samoa</option>
                      <option value="San Marino">San Marino</option>
                      <option value="Sao Tome and Principe">
                        Sao Tome and Principe
                      </option>
                      <option value="Saudi Arabia">Saudi Arabia</option>
                      <option value="Senegal">Senegal</option>
                      <option value="Serbia">Serbia</option>
                      <option value="Seychelles">Seychelles</option>
                      <option value="Sierra Leone">Sierra Leone</option>
                      <option value="Singapore">Singapore</option>
                      <option value="Sint Maarten">Sint Maarten</option>
                      <option value="Slovakia">Slovakia</option>
                      <option value="Slovenia">Slovenia</option>
                      <option value="Solomon Islands">Solomon Islands</option>
                      <option value="Somalia">Somalia</option>
                      <option value="South Africa">South Africa</option>
                      <option value="South Georgia and the South Sandwich Islands">
                        South Georgia and the South Sandwich Islands
                      </option>
                      <option value="South Sudan">South Sudan</option>
                      <option value="Spain">Spain</option>
                      <option value="Sri Lanka">Sri Lanka</option>
                      <option value="Sudan">Sudan</option>
                      <option value="Suriname">Suriname</option>
                      <option value="Svalbard and Jan Mayen">
                        Svalbard and Jan Mayen
                      </option>
                      <option value="Sweden">Sweden</option>
                      <option value="Switzerland">Switzerland</option>
                      <option value="Syria Arab Republic">
                        Syria Arab Republic
                      </option>
                      <option value="Taiwan">Taiwan</option>
                      <option value="Tajikistan">Tajikistan</option>
                      <option value="Tanzania, the United Republic of">
                        Tanzania, the United Republic of
                      </option>
                      <option value="Thailand">Thailand</option>
                      <option value="Timor-Leste">Timor-Leste</option>
                      <option value="Togo">Togo</option>
                      <option value="Tokelau">Tokelau</option>
                      <option value="Tonga">Tonga</option>
                      <option value="Trinidad and Tobago">
                        Trinidad and Tobago
                      </option>
                      <option value="Tunisia">Tunisia</option>
                      <option value="Turkmenistan">Turkmenistan</option>
                      <option value="Turks and Caicos Islands">
                        Turks and Caicos Islands
                      </option>
                      <option value="Tuvalu">Tuvalu</option>
                      <option value="Türkiye">Türkiye</option>
                      <option value="US Minor Outlying Islands">
                        US Minor Outlying Islands
                      </option>
                      <option value="Uganda">Uganda</option>
                      <option value="Ukraine">Ukraine</option>
                      <option value="United Arab Emirates">
                        United Arab Emirates
                      </option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="United States">United States</option>
                      <option value="Uruguay">Uruguay</option>
                      <option value="Uzbekistan">Uzbekistan</option>
                      <option value="Vanuatu">Vanuatu</option>
                      <option value="Venezuela">Venezuela</option>
                      <option value="Viet Nam">Viet Nam</option>
                      <option value="Virgin Islands, British">
                        Virgin Islands, British
                      </option>
                      <option value="Virgin Islands, U.S.">
                        Virgin Islands, U.S.
                      </option>
                      <option value="Wallis and Futuna">
                        Wallis and Futuna
                      </option>
                      <option value="Western Sahara">Western Sahara</option>
                      <option value="Yemen">Yemen</option>
                      <option value="Zambia">Zambia</option>
                      <option value="Zimbabwe">Zimbabwe</option>
                      <option value="Åland Islands">Åland Islands</option>{" "}
                    </select>
                  </div>

                  {errorResponse && (
                    <div className={`col-12 ${style.error__message}`}>
                      <span>
                        This field is required. Please complete the following
                        fields: Street Address, City, State / Province, ZIP /
                        Postal Code, Country.
                      </span>
                    </div>
                  )}
                </div>
                <button type="submit" className={style.send_form_btn}>
                  {" "}
                  submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default withAuth(page);
