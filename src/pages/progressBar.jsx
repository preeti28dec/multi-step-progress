import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineUser } from "react-icons/ai";
import { CiMail } from "react-icons/ci";
import { BsPhone, BsBuilding } from "react-icons/bs";
function ProgressBar() {
  const [items, setItems] = useState([
    { id: 1, name: "1", active: true, completed: false },
    { id: 2, name: "2", active: false, completed: false },
    { id: 3, name: "3", active: false, completed: false },
  ]);
  const next = () => {
    setItems((i) => {
      let nextIndex;
      return i.map((item, index) => {
        if (item.active) {
          nextIndex = index + 1;
          if (index === i.length - 1) {
            return { ...item, completed: true, active: true };
          } else {
            return { ...item, completed: true, active: false };
          }
        } else if (index === nextIndex) {
          return { ...item, active: true };
        } else {
          return item;
        }
      });
    });
  };
  const back = () => {
    setItems((i) => {
      let lastCompletedId = i.filter((item) => item.active)[0].id - 1;
      return i.map((item, index) => {
        if (item.active && index !== 0) {
          return { ...item, completed: false, active: false };
        } else if (item.id === lastCompletedId) {
          return { ...item, active: true, completed: false };
        } else {
          return item;
        }
      });
    });
  };
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
        <div className="mx-10 my-6">
          <Button>
            <div className="step">
              <div className="flex items-center gap-2 mx-4">
                {items.map((item) => {
                  return (
                    <div key={item.id} className="flex items-center gap-2 mx-4">
                      <div>
                        <button
                          className={
                            item.active || item.completed
                              ? "step_button active "
                              : "step_button"
                          }
                        >
                          {item.name}
                        </button>
                      </div>
                      <div
                        className={
                          item.completed
                            ? "step_button parent active"
                            : " parent step_button"
                        }
                      ></div>
                    </div>
                  );
                })}
              </div>
            </div>
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
          </Button>
        </div>
      </div>
      <div className="flex gap-6 items-center justify-center my-5">
        <div className="next_button" onClick={back}>
          Back
        </div>
        <div className="next_button" onClick={next}>
          Next
        </div>
      </div>
    </Root>
  );
}

export default ProgressBar;
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
  `;


const Button = styled.div`
  max-width: 800px;
  width: 100%;
  margin: auto;
  .step {
    display: flex;
    justify-content: space-between;
    margin: 20px 0px;
    .step_button {
      width: 30px;
      height: 30px;
      padding: 4px;
      border-radius: 100px;
      background-color: gray;
      color: black;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .step_button.active {
      background-color: #4a3aff;
      color: white;
    }
    .parent {
      position: relative;
      width: 100px;
      height: 3px;
      transition: all 0.5s;
    }
    .parent.active {
      background: #4a3aff;
      color: white;
    }
  }
`;
