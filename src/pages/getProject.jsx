import React from "react";
import styled from "styled-components";
import { AiOutlineUser } from "react-icons/ai";
import { CiMail } from "react-icons/ci";
import { BsPhone, BsBuilding } from "react-icons/bs";
import ProgressBar from "./progressBar";
function GetProject() {
  return (
    <Root>
      <div className="font-bold text-[#170F49] mt-24  text-3xl">
        Get a project quote
      </div>
      <div className="my-6 text-[#6F6C90]">
        Please fill the form below to receive a quote for your project.
        <br /> Feel free to add as much detail as needed.
      </div>
      <div className="progress_card">
        <div className="mx-10">
          <div><ProgressBar/></div>
          <hr />
          <div className="my-6 text-start">
            <div className="text-[#170F49] text-2xl text-[#A0A3BD]font-bold">
              Contacct details
            </div>
            <div className=" text-[#6F6C90]">
              Please fill your information so we can get in touch with you.
            </div>
          </div>

          <div>
            <div className="flex justify-between text-start my-6">
              <div className="input_">
                <label>Name</label>
                <div className="input_section">
                  <input type="text" placeholder="name" />
                  <AiOutlineUser className="text-2xl text-[#A0A3BD]" />
                </div>
              </div>

              <div className="input_">
                <label>Email</label>
                <div className="input_section">
                  <input type="text" placeholder="Email Address" />
                  <CiMail className="text-2xl text-[#A0A3BD]" />
                </div>
              </div>
            </div>

            <div className="flex justify-between text-start my-6">
              <div className="input_">
                <label>Phone number</label>
                <div className="input_section">
                  <input type="text" placeholder="(123) 456 -7890" />
                  <BsPhone className="text-2xl text-[#A0A3BD]" />
                </div>
              </div>
              <div className="input_">
                <label>Company</label>
                <div className="input_section">
                  <input type="text" placeholder="Company name" />
                  <BsBuilding className="text-2xl text-[#A0A3BD]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="next_button">Next step</button>

      {/* { get a Image section} */}

      <div className="flex gap-4 justify-center">
        <div className="first_card">
          <div className="mt-8 mx-8  text-start">
            <img src="./images/whitelogo.png" alt="loding.." />
            <div className=" text-xl font-semibold my-2">
              Take a look at our amazing premium <br />
              Webflow Templates
            </div>
            <div className="text-sm ">
              Also than having free Webflow cloneables, we create <br />{" "}
              cutting-edge premium Webflow templates too.
            </div>
            <button className="browse_button">Browse templates</button>
          </div>
          <div className="flex gap-4 ">
            <div>
              <div>
                <img
                  src="./images/img1.png"
                  alt="loding.."
                  className="rounded"
                />
              </div>
              <div className="">
                <img
                  src="./images/img3.png"
                  alt="loding.."
                  className="py-2 rounded "
                />
              </div>
            </div>
            <div>
              <div>
                <img
                  src="./images/img2.png"
                  alt="loding.."
                  className="rounded"
                />
              </div>
              <div>
                <img
                  src="./images/img4.png"
                  alt="loding.."
                  className="mt-5 rounded"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="second_card">
          <div className="p-4 text-start">
            <img src="./images/smallLogo.png" alt="loding.." />
            <div>
              Looking to design & develop an amazing <br /> Webflow website?
            </div>
            <div className="text-sm">
              If you want to get a hand from the amazing team behind <br /> BRIX
              Templates, get in touch with BRIX Agency today.
            </div>
            <button className="get_button">Get a quote</button>
          </div>

          <img src="./images/img6.png" alt="loding.." className="w-[400px]" />
        </div>
      </div>
    </Root>
  );
}

export default GetProject;
const Root = styled.div`
  .progress_card {
    border: 1px solid #eff0f7;
    box-shadow: 0px 5px 16px rgba(8, 15, 52, 0.06);
    border-radius: 34px;
    width: 600px;
    height: 500px;
    margin: auto;
  }
  label {
    color: #170f49;
    font-weight: 600;
  }
  .input_section {
    border: 1px solid #eff0f7;
    display: flex;
    align-items: center;
    padding: 10px 20px;
    box-shadow: 0px 2px 6px rgba(19, 18, 66, 0.07);
    border-radius: 46px;
    margin: 10px 0px;
  }
  .next_button {
    background-color: #4a3aff;
    border-radius: 100px;
    padding: 4px 20px;
    color: white;
    margin: 20px 0px;
  }
  .first_card {
    background: linear-gradient(90deg, #4a3aff 0%, #6d3aff 100%);
    border-radius: 40px;
    color: white;
  }
  .browse_button {
    background-color: white;
    border-radius: 100px;
    padding: 6px 20px;
    color: #4a3aff;
    text-align: start;
    margin: 15px 0px;
  }
  .get_button {
    background-color: #ff2d46;
    border-radius: 100px;
    padding: 6px 20px;
    color: white;
    text-align: start;
    margin: 15px 0px;
  }
  img {
    width: 200px;
  }
  .second_card {
    background: #ffffff;

    border: 1px solid #eff0f7;
    border-radius: 40px;
  }
`;
