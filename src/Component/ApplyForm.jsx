import React, {useState, useRef, useEffect } from "react";
import flag from "../assets/bookMark.webp";
import congratsBg from "../assets/congrats-bg.webp";
const ApplyForm = () => {
const [contact, setContact] = useState("");
const [whatsapp, setWhatsapp] = useState("");
const [sameNumber, setSameNumber] = useState(false);
const [submitted, setSubmitted] = useState(false);
const [netcoreSource, setNetcoreSource] = useState("");
const [leadSource, setLeadSource] = useState("");
const [campaignName, setCampaignName] = useState("");
const [utmTerm, setUtmTerm] = useState("");
const [gclid, setGclid] = useState("");
const currentUrl = window.location.href;
const cleanUrl = window.location.origin + window.location.pathname;
const thankYouUrl = cleanUrl + "#congrats";
useEffect(() => {

  const urlParams = new URLSearchParams(window.location.search);

  setNetcoreSource(urlParams.get("utm_source") || "");
  setLeadSource(urlParams.get("utm_medium") || "");
  setCampaignName(urlParams.get("campaign_name_custom") || "");
  setGclid(urlParams.get("gclid") || "");
  setUtmTerm(urlParams.get("utm_term") || "");

  // render recaptcha manually
  setTimeout(() => {
    if (window.grecaptcha) {
      window.grecaptcha.render("recaptcha-container", {
        sitekey: "6Lei3IcfAAAAAMN9kfexwW8m7NGMVsO7QXQ4L-Sq"
      });
    }
  }, 1000);

}, []);
const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);

  try {
    const response = await fetch(
      "https://apply.tauedu.org/lp/send_data_via_api_v4_react.php",
      {
        method: "POST",
        body: formData
      }
    );

    if (response.ok) {
      setSubmitted(true); // show congrats card
      window.location.hash = "congrats";
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      alert("Submission failed. Please try again.");
    }

  } catch (error) {
    console.error(error);
    alert("Something went wrong.");
  }
};
  return (
    <section className="bg-gray-200 py-16 px-4 flex justify-center">

      <div className="w-full max-w-2xl overflow-visible shadow-xl rounded-2xl">

        {/* Header */}
        <div className="bg-[#F6E86F] px-8 py-4 flex items-center gap-3 relative">

          <img
            src={flag}
            alt="flag"
            className="absolute -top-2 left-6 w-14"
          />

          <h2 className="text-xl ps-3 font-semibold text-[#0D0E3A] ml-8">
            Apply to MPH PROGRAM
          </h2>

        </div>

        {/* Form Area */}
       <div className="bg-[#0D0E3A] p-8">

{submitted ? (

<div id="congrats"
  className="rounded-xl text-center bg-cover bg-center"
  style={{ backgroundImage: `url(${congratsBg})` }}
>

  <div className="p-10 rounded-xl">

    <div className="border border-yellow-400 text-yellow-400 px-4 py-1 rounded inline-block mb-4">
      Admission Path Unlocked
    </div>

    <h2 className="text-3xl font-bold text-yellow-400 mb-3">
      Congrats!
    </h2>

    <p className="text-white mb-6">
      Here's Your Personalized Path to a <br />
      <span className="font-semibold">
        Master's in Public Health
      </span>
    </p>
    <a href="https://apply.tauedu.org/dblp/africa-mph-rmkt-2026-new/static/media/Masters-Program-Students-Handbook.341717e0d6f2ae6d6320.pdf" target="_blank">
    <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md">
      Download Brochure
    </button></a>

  </div>

</div>

) : (

 <form
  onSubmit={handleSubmit}
  className="grid md:grid-cols-2 gap-4"
>

            {/* Name */}
         <input
  type="text"
  name="name"
  placeholder="Name *"
  required
  pattern="^[A-Za-z.\-\s]+$"
  onInput={(e) => {
    e.target.value = e.target.value.replace(/[^A-Za-z.\-\s]/g, "");
  }}
  title="Name should contain only letters, spaces, dot (.) or hyphen (-)"
  className="p-3 bg-gray-200 text-black h-12"
/>

            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Email *"
              required
              className="p-3 bg-gray-200 text-black h-12"
            />

            {/* Country */}
            <select
              name="country_code"
              required
              className="p-3 bg-gray-200 text-black h-12"
            >
              <option value="" disabled>Select Country *</option><option value="Afghanistan (+93)">Afghanistan (+93)</option><option value="Albania (+355)">Albania (+355)</option><option value="Algeria (+213)">Algeria (+213)</option><option value="American Samoa (+1-684)">American Samoa (+1-684)</option><option value="Andorra (+376)">Andorra (+376)</option><option value="Angola (+244)">Angola (+244)</option><option value="Anguilla (+1-264)">Anguilla (+1-264)</option><option value="Antarctica (+672)">Antarctica (+672)</option><option value="Argentina (+54)">Argentina (+54)</option><option value="Armenia (+374)">Armenia (+374)</option><option value="Aruba (+297)">Aruba (+297)</option><option value="Australia (+61)">Australia (+61)</option><option value="Austria (+43)">Austria (+43)</option><option value="Azerbaijan (+994)">Azerbaijan (+994)</option><option value="Bahamas (+1-242)">Bahamas (+1-242)</option><option value="Bahrain (+973)">Bahrain (+973)</option><option value="Bangladesh (+880)">Bangladesh (+880)</option><option value="Barbados (+1-246)">Barbados (+1-246)</option><option value="Belarus (+375)">Belarus (+375)</option><option value="Belgium (+32)">Belgium (+32)</option><option value="Belize (+501)">Belize (+501)</option><option value="Benin (+229)">Benin (+229)</option><option value="Bermuda (+1-441)">Bermuda (+1-441)</option><option value="Bhutan (+975)">Bhutan (+975)</option><option value="Bolivia (+591)">Bolivia (+591)</option><option value="Bosnia and Herzegovina (+387)">Bosnia and Herzegovina (+387)</option><option value="Botswana (+267)">Botswana (+267)</option><option value="Brazil (+55)">Brazil (+55)</option><option value="British Indian Ocean Territory (+246)">British Indian Ocean Territory (+246)</option><option value="Bulgaria (+359)">Bulgaria (+359)</option><option value="Burkina Faso (+226)">Burkina Faso (+226)</option><option value="Burundi (+257)">Burundi (+257)</option><option value="Cambodia (+855)">Cambodia (+855)</option><option value="Cameroon (+237)">Cameroon (+237)</option><option value="Canada (+1)">Canada (+1)</option><option value="Cape Verde (+238)">Cape Verde (+238)</option><option value="Cayman Islands (+1-345)">Cayman Islands (+1-345)</option><option value="Central African Republic (+236)">Central African Republic (+236)</option>
<option value="Chad (+235)">Chad (+235)</option><option value="Chile (+56)">Chile (+56)</option><option value="China (+86)">China (+86)</option><option value="Christmas Island (+61)">Christmas Island (+61)</option><option value="Colombia (+57)">Colombia (+57)</option><option value="Comoros (+269)">Comoros (+269)</option><option value="Cook Islands (+682)">Cook Islands (+682)</option><option value="Costa Rica (+506)">Costa Rica (+506)</option><option value="Croatia (+385)">Croatia (+385)</option><option value="Cuba (+53)">Cuba (+53)</option><option value="Cyprus (+357)">Cyprus (+357)</option><option value="Czech Republic (+420)">Czech Republic (+420)</option><option value="Denmark (+45)">Denmark (+45)</option><option value="Djibouti (+253)">Djibouti (+253)</option><option value="Dominica (+1-767)">Dominica (+1-767)</option><option value="Dominican Republic (+1-809)">Dominican Republic (+1-809)</option><option value="Democratic Republic of the Congo (+243)">Democratic Republic of the Congo (+243)</option><option value="East Timor (+670)">East Timor (+670)</option><option value="Ecuador (+593)">Ecuador (+593)</option><option value="Egypt (+20)">Egypt (+20)</option><option value="El Salvador (+503)">El Salvador (+503)</option><option value="Equatorial Guinea (+240)">Equatorial Guinea (+240)</option><option value="Eritrea (+291)">Eritrea (+291)</option><option value="Estonia (+372)">Estonia (+372)</option><option value="Ethiopia (+251)">Ethiopia (+251)</option><option value="Faroe Islands (+298)">Faroe Islands (+298)</option><option value="Fiji (+679)">Fiji (+679)</option><option value="Finland (+358)">Finland (+358)</option><option value="France (+33)">France (+33)</option><option value="French Polynesia (+689)">French Polynesia (+689)</option><option value="Gabon (+241)">Gabon (+241)</option><option value="Gambia (+220)">Gambia (+220)</option><option value="Georgia (+995)">Georgia (+995)</option><option value="Germany (+49)">Germany (+49)</option><option value="Ghana (+233)">Ghana (+233)</option><option value="Gibraltar (+350)">Gibraltar (+350)</option><option value="Greece (+30)">Greece (+30)</option><option value="Greenland (+299)">Greenland (+299)</option><option value="Grenada (+1-473)">Grenada (+1-473)</option><option value="Guam (+1-671)">Guam (+1-671)</option><option value="Guatemala (+502)">Guatemala (+502)</option>
<option value="Guernsey (+44-1481)">Guernsey (+44-1481)</option><option value="Guinea (+224)">Guinea (+224)</option><option value="Guinea-Bissau (+245)">Guinea-Bissau (+245)</option><option value="Guyana (+592)">Guyana (+592)</option><option value="Haiti (+509)">Haiti (+509)</option><option value="Honduras (+504)">Honduras (+504)</option><option value="Hong Kong (+852)">Hong Kong (+852)</option><option value="Hungary (+36)">Hungary (+36)</option><option value="Iceland (+354)">Iceland (+354)</option><option value="India (+91)">India (+91)</option><option value="Indonesia (+62)">Indonesia (+62)</option><option value="Iraq (+964)">Iraq (+964)</option><option value="Ireland (+353)">Ireland (+353)</option><option value="Isle of Man (+44-1624)">Isle of Man (+44-1624)</option><option value="Israel (+972)">Israel (+972)</option><option value="Italy (+39)">Italy (+39)</option><option value="Ivory Coast (+225)">Ivory Coast (+225)</option><option value="Jamaica (+1-876)">Jamaica (+1-876)</option><option value="Japan (+81)">Japan (+81)</option><option value="Jersey (+44-1534)">Jersey (+44-1534)</option><option value="Jordan (+962)">Jordan (+962)</option><option value="Kazakhstan (+7)">Kazakhstan (+7)</option><option value="Kenya (+254)">Kenya (+254)</option><option value="Kiribati (+686)">Kiribati (+686)</option><option value="Kosovo (+383)">Kosovo (+383)</option><option value="Kuwait (+965)">Kuwait (+965)</option><option value="Kyrgyzstan (+996)">Kyrgyzstan (+996)</option><option value="Latvia (+371)">Latvia (+371)</option><option value="Lebanon (+961)">Lebanon (+961)</option><option value="Lesotho (+266)">Lesotho (+266)</option><option value="Liberia (+231)">Liberia (+231)</option><option value="Libya (+218)">Libya (+218)</option><option value="Liechtenstein (+423)">Liechtenstein (+423)</option><option value="Lithuania (+370)">Lithuania (+370)</option><option value="Luxembourg (+352)">Luxembourg (+352)</option><option value="Madagascar (+261)">Madagascar (+261)</option><option value="Malawi (+265)">Malawi (+265)</option><option value="Malaysia (+60)">Malaysia (+60)</option><option value="Maldives (+960)">Maldives (+960)</option><option value="Mali (+223)">Mali (+223)</option><option value="Malta (+356)">Malta (+356)</option><option value="Marshall Islands (+692)">Marshall Islands (+692)</option>
<option value="Mauritania (+222)">Mauritania (+222)</option><option value="Mauritius (+230)">Mauritius (+230)</option><option value="Mayotte (+262)">Mayotte (+262)</option><option value="Mexico (+52)">Mexico (+52)</option><option value="Monaco (+377)">Monaco (+377)</option><option value="Mongolia (+976)">Mongolia (+976)</option><option value="Montenegro (+382)">Montenegro (+382)</option><option value="Montserrat (+1-664)">Montserrat (+1-664)</option><option value="Morocco (+212)">Morocco (+212)</option><option value="Mozambique (+258)">Mozambique (+258)</option><option value="Namibia (+264)">Namibia (+264)</option><option value="Nauru (+674)">Nauru (+674)</option><option value="Nepal (+977)">Nepal (+977)</option><option value="Netherlands (+31)">Netherlands (+31)</option><option value="New Caledonia (+687)">New Caledonia (+687)</option><option value="New Zealand (+64)">New Zealand (+64)</option><option value="Nicaragua (+505)">Nicaragua (+505)</option><option value="Niger (+227)">Niger (+227)</option><option value="Nigeria (+234)">Nigeria (+234)</option><option value="Niue (+683)">Niue (+683)</option><option value="Northern Mariana Islands (+1-670)">Northern Mariana Islands (+1-670)</option><option value="Norway (+47)">Norway (+47)</option><option value="Oman (+968)">Oman (+968)</option><option value="Pakistan (+92)">Pakistan (+92)</option><option value="Palau (+680)">Palau (+680)</option><option value="Panama (+507)">Panama (+507)</option><option value="Papua New Guinea (+675)">Papua New Guinea (+675)</option><option value="Paraguay (+595)">Paraguay (+595)</option><option value="Peru (+51)">Peru (+51)</option><option value="Philippines (+63)">Philippines (+63)</option><option value="Pitcairn (+64)">Pitcairn (+64)</option><option value="Poland (+48)">Poland (+48)</option><option value="Portugal (+351)">Portugal (+351)</option><option value="Puerto Rico (+1-787)">Puerto Rico (+1-787)</option><option value="Qatar (+974)">Qatar (+974)</option><option value="Romania (+40)">Romania (+40)</option><option value="Rwanda (+250)">Rwanda (+250)</option><option value="Saint Pierre and Miquelon (+508)">Saint Pierre and Miquelon (+508)</option><option value="Samoa (+685)">Samoa (+685)</option><option value="San Marino (+378)">San Marino (+378)</option><option value="Saudi Arabia (+966)">Saudi Arabia (+966)</option>
<option value="Senegal (+221)">Senegal (+221)</option><option value="Serbia (+381)">Serbia (+381)</option><option value="Seychelles (+248)">Seychelles (+248)</option><option value="Sierra Leone (+232)">Sierra Leone (+232)</option><option value="Singapore (+65)">Singapore (+65)</option><option value="Slovakia (+421)">Slovakia (+421)</option><option value="Slovenia (+386)">Slovenia (+386)</option><option value="Solomon Islands (+677)">Solomon Islands (+677)</option><option value="Somalia (+252)">Somalia (+252)</option><option value="South Africa (+27)">South Africa (+27)</option><option value="South Sudan (+211)">South Sudan (+211)</option><option value="Spain (+34)">Spain (+34)</option><option value="Sri Lanka (+94)">Sri Lanka (+94)</option><option value="Sudan (+249)">Sudan (+249)</option><option value="Suriname (+597)">Suriname (+597)</option><option value="Svalbard and Jan Mayen (+47)">Svalbard and Jan Mayen (+47)</option><option value="Swaziland (+268)">Swaziland (+268)</option><option value="Sweden (+46)">Sweden (+46)</option><option value="Switzerland (+41)">Switzerland (+41)</option><option value="Syria (+963)">Syria (+963)</option><option value="Taiwan (+886)">Taiwan (+886)</option><option value="Tajikistan (+992)">Tajikistan (+992)</option><option value="Tanzania (+255)">Tanzania (+255)</option><option value="Thailand (+66)">Thailand (+66)</option><option value="Togo (+228)">Togo (+228)</option><option value="Tokelau (+690)">Tokelau (+690)</option><option value="Tonga (+676)">Tonga (+676)</option><option value="Trinidad and Tobago (+1-868)">Trinidad and Tobago (+1-868)</option><option value="Tunisia (+216)">Tunisia (+216)</option><option value="Turkey (+90)">Turkey (+90)</option><option value="Turkmenistan (+993)">Turkmenistan (+993)</option><option value="Turks and Caicos Islands (+1-649)">Turks and Caicos Islands (+1-649)</option><option value="Tuvalu (+688)">Tuvalu (+688)</option><option value="Trinidad and Tobago (+1-868)">Trinidad and Tobago (+1-868)</option><option value="Uganda (+256)">Uganda (+256)</option><option value="Ukraine (+380)">Ukraine (+380)</option><option value="United Arab Emirates (+971)">United Arab Emirates (+971)</option><option value="United States (+1)">United States (+1)</option><option value="Uruguay (+598)">Uruguay (+598)</option>
<option value="Uzbekistan (+998)">Uzbekistan (+998)</option><option value="Vanuatu (+678)">Vanuatu (+678)</option><option value="Venezuela (+58)">Venezuela (+58)</option><option value="Wallis and Futuna (+681)">Wallis and Futuna (+681)</option><option value="Western Sahara (+212)">Western Sahara (+212)</option><option value="Yemen (+967)">Yemen (+967)</option><option value="Zambia (+260)">Zambia (+260)</option><option value="Zimbabwe (+263)">Zimbabwe (+263)</option>

            </select>

         {/* Contact */}
<input
  type="tel"
  name="contact"
  placeholder="Contact Number *"
  pattern="[2-9][0-9]{6,14}"
  maxLength="15"
  required
  value={contact}
  onInput={(e) => {
    let value = e.target.value.replace(/\D/g, ""); // remove non-numeric

    if (value.length > 15) {
      value = value.slice(0, 15);
    }

    e.target.value = value;
    setContact(value);

    if (sameNumber) {
      setWhatsapp(value);
    }
  }}
  className="p-3 bg-gray-200 text-black h-12"
/>

{/* WhatsApp + Checkbox (same column) */}
<div className="flex flex-col">

  <input
    type="tel"
    name="referral_whatsapp"
    placeholder="WhatsApp Number *"
    maxLength="15"
    required
    value={whatsapp}
    onInput={(e) => {
      let value = e.target.value.replace(/\D/g, ""); // remove non-numeric characters

      if (value.length > 15) {
        value = value.slice(0, 15);
      }

      setWhatsapp(value);
    }}
    className="p-3 bg-gray-200 text-black h-12"
  />


  <div className="flex items-center gap-2 text-white text-sm mt-2">
    <label className="flex items-center gap-2 text-white text-sm mt-2 cursor-pointer">
  <input
    type="checkbox"
    name="isSameAsPhoneNumber"
    checked={sameNumber}
    onChange={(e) => {
      const checked = e.target.checked;
      setSameNumber(checked);

      if (checked) {
        setWhatsapp(contact);
      }
    }}
  />
  Same as Contact Number
</label>
  </div>

</div>

<select
  name="qualification"
  required
  className="p-3 bg-gray-200 text-black h-12"
>
  <option value="" disabled>Current Qualification *</option>
  <option value="Bachelor Degree in Health Science">Bachelor Degree in Health Science</option>
  <option value="MBBS">MBBS</option>
  <option value="Bachelor in Bio Science">Bachelor in Bio Science</option>
  <option value="Bachelor in Pharmacy">Bachelor in Pharmacy</option>
  <option value="Bachelor Degree in Public Health">Bachelor Degree in Public Health</option>
  <option value="Bachelor Degree in Paramedical Science">Bachelor Degree in Paramedical Science</option>
  <option value="Bachelor Degree in Social Work">Bachelor Degree in Social Work</option>
  <option value="Bachelor in Others">Bachelor in Others</option>
</select>
           
            <div className="md:col-span-2">
             <div
  id="recaptcha-container"
  className="md:col-span-2 flex justify-start"
></div>
            </div>
            <div className="md:col-span-2 flex items-start gap-2 text-white text-xs">
              <input
                type="checkbox"
                name="opt_in_communication"
                defaultChecked
                value="1"
              />
              <p>
              I agree with Texila’s <a className="text-blue-300 hover:underline" target="__blank" href="https://www.tauedu.org/terms-and-conditions">Terms of Service </a>
                and  
               <a className="text-blue-300 hover:underline" target="__blank" href="https://www.tauedu.org/privacy-policy"> Privacy Policy </a> 
                and provide my consent to receive marketing communications from Texila American University.
              </p>
            </div>

            {/* Hidden CRM Fields */}
            <input type="hidden" name="url" value={currentUrl} />
            <input type="hidden" value="" name="ipadd"/>
              <input type="hidden" name="ProspectID"/>
              <input id="capcha_check1" type="hidden" name="capcha_check1"/>
              <input type="hidden" value="landng_pages_form_submit_send_data_api" name="page"/>
              <input type="hidden" value="landng_pages_data_store_leadsquared" name="option"/>
              <input type="hidden" value="yes" name="send_mail_applicant"/>
              <input type="hidden" value="yes" name="store_leadsquared_lead"/>
              <input type="hidden" value="yes" name="send_sms_applicant"/>
            <input type="hidden" name="flag" value="1" />
            <input type="hidden" name="form_name" value="dblp-mph-gy-program" />
            <input type="hidden" name="campus" value="Guyana-DBLP" />
            <input type="hidden" name="program" value="Master of Public Health" />
            <input type="hidden" name="program_category" value="School of Public Health" />
            <input type="hidden" name="program_level" value="Master" />
            <input type="hidden" name="type_of_contact" value="Lead Acquisition" />
            <input type="hidden" name="thank_you_v2_link" value="https://apply.tauedu.org/dblp/mph-africa-rmga/#congrats" />
            <input type="hidden" name="netcore_activity_source" value={netcoreSource} />
            <input type="hidden" name="lead_source" value={leadSource} />
            <input type="hidden" name="campaign_name_custom" value={campaignName} />
            <input type="hidden" name="gclid" value={gclid} />
            <input type="hidden" name="utm_term" value={utmTerm} />
            <input type="hidden" name="g-recaptcha-response" id="g-recaptcha-response"/>
            <input type="hidden" value="" name="utm_source"/>
            <input type="hidden" value="Google Ads" name="utm_medium"/>
            <input type="hidden" value="Enquiry form" name="utm_module"/>
            <input type="hidden" value="" name="utm_campaign"/>

            {/* Quiz Answers */}
            <input
              type="hidden"
              name="mx_Are_you_interested_in_studying_Doctor_of_Medicine"
              value={
                sessionStorage.getItem(
                  "mx_Are_you_interested_in_studying_Doctor_of_Medicine"
                ) || ""
              }
            />

            <input
              type="hidden"
              name="mx_Are_you_aware_that_TAU_Guyana_is_Triple_Accredited"
              value={
                sessionStorage.getItem(
                  "mx_Are_you_aware_that_TAU_Guyana_is_Triple_Accredited"
                ) || ""
              }
            />

            <input
              type="hidden"
              name="mx_The_MD_program_fee_is_USD_How_does_this_fit_your"
              value={
                sessionStorage.getItem(
                  "mx_The_MD_program_fee_is_USD_How_does_this_fit_your"
                ) || ""
              }
            />
           <button
  type="submit"
  className="md:col-span-2 mt-6 bg-[#089B1E] hover:bg-green-700 text-white px-6 py-3 rounded-md shadow-lg transition"
>
  Submit Now
</button>
          </form>
)}
{/* <iframe
  name="hidden_iframe"
  style={{ display: "none" }}
  onLoad={() => {
    if (iframeLoaded.current) {
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    iframeLoaded.current = true;
  }}
></iframe> */}

        </div>

      </div>

    </section>
  );
};

export default ApplyForm;