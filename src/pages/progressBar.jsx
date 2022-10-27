import React, { useState } from 'react'
import styled from 'styled-components';

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
            <div className="flex gap-6 items-center my-5">
              <div className="bg-red-400 rounded-md py-2 px-6" onClick={back}>
                Back
              </div>
              <div className="bg-blue-400 rounded-md py-2 px-6" onClick={next}>
                Next
              </div>
            </div>
          </Button>
    </Root>
  )
}

export default ProgressBar
const Root = styled.div`
 
`;

const Button = styled.div`
  max-width: 800px;
  width: 100%;
  margin: auto;
  .step {
    display: flex;
    justify-content: space-between;
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