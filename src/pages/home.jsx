import React from "react";
import styled from "styled-components";
import { MdDone } from 'react-icons/md';
import ProgressBar from "./progressBar";
import GetProject from "./getProject";
function Home() {
  return (
    <Root>
      <div className="my-12">
        <p>Cloneables FOR WEBFLOW</p>
        <h1>
          Multi-step Form Webflow <br />
          Cloneable Template
        </h1>
        <div className="text">
          Want to receive a monthly email in your inbox with awesome free
          Webflow
          <br />
          cloneables, resources and more? Please submit your email below.
        </div>
      </div>
      <div className="relative">
        <input
          type="text"
          className="first_input"
          placeholder="Enter Your Email.."
        />
        <button className="absolute  mt-[10px] ml-[-116px]">Subscribe</button>
      </div>
      <div className="flex gap-2 items-center justify-center my-6">
        <div><MdDone  className="icon"/></div>
        <div>
          It's <span className="text-blue-700">100% free </span>and we will never send more than one email per month
        </div>
      </div>
      <div className="input_box">
        <div className='multi_text_div'> Multi step Form - Step 1</div>
        <button className="prev_button">Preview Cloneable </button>
      </div>

      {/* { get a project} */}
      <ProgressBar/>
      

      {/* Image section */}
      <GetProject/>
    </Root>
  );
}

export default Home;

const Root = styled.div`
  text-align: center;
  button {
    background-color: #4a3aff;
    border-radius: 100px;
    padding: 4px 20px;
    color: white;
  }

  p {
    font-weight: 500;
    font-size: 16px;
    line-height: 18px;
    text-align: center;
    text-transform: uppercase;
    color: #4a3aff;
  }
  h1 {
    font-weight: 700;
    font-size: 50px;
    line-height: 62px;
    text-align: center;
    color: #170f49;
  }
  .text {
    font-weight: 400;
    font-size: 18px;
    line-height: 30px;
    text-align: center;
    color: #6f6c90;
  }
  .first_input {
    background: #ffffff;
    border: 1px solid #eff0f7;
    box-shadow: 0px 2px 6px rgba(19, 18, 66, 0.07);
    border-radius: 46px;
    padding: 15px 10px;
    width: 500px;
  }
 
  .icon{
    color: white;
    border-radius: 100px;
    background-color: blue;
    padding: 2px;
    font-size: 20px;
  }
  .input_box{
    box-shadow: 0px 3px 14px rgba(74, 58, 255, 0.03), 0px -2px 4px rgba(20, 20, 43, 0.02), 0px 12px 24px rgba(20, 20, 43, 0.04);
    border-radius: 18px;
    display: flex;
    justify-content: space-between;
    padding: 25px 50px;
    color: #170f49;
  }
  .prev_button{
    background: #F3F1FF;
    border-radius: 100px;
    padding: 8px 20px;
  }
  .multi_text_div{

  }
`;


