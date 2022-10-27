import React from "react";
import styled from "styled-components";
function GetProject() {
  return (
    <Root>
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
          <div>
            <div className="p-4 mt-8 mx-8 text-start text-[#170F49]">
              <img src="./images/smallLogo.png" alt="loding.." />
              <div className=" text-xl font-semibold my-2">
                Looking to design & develop an amazing <br /> Webflow website?
              </div>
              <div className="text-sm">
                If you want to get a hand from the amazing team behind <br />{" "}
                BRIX Templates, get in touch with BRIX Agency today.
              </div>
              <button className="get_button">Get a quote</button>
            </div>
            <img src="./images/img6.png" alt="loding.." className="mx-auto" />
          </div>
        </div>
      </div>

      <div className="flex justify-between mx-2 my-8">
        <div>
          <div>
            <img src="./images/logo.png" alt="loding.. logo" />
          </div>
          <div className="text-[#6F6C90]">
            Copyright © BRIX Templates | All Rights Reserved
          </div>
        </div>
        <div>
          <div>Subscribe to receive free Webflow cloneables every month.</div>

          <div className="relative">
            <input  type="text"  className="first_input"
              placeholder="Enter Your Email.." />
            <button className="absolute  mt-[10px] ml-[-116px]">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </Root>
  );
}

export default GetProject;
const Root = styled.div`
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
