import React from 'react'
import { useDispatch } from 'react-redux'
import { setIncreaseCounter, setDecreaseCounter } from "../Action/countAction"

function Action() {
  const dispatch = useDispatch();

  function increasebtn() {
    dispatch(setIncreaseCounter());
  };

  function decreasebtn() {
    dispatch(setDecreaseCounter());
  };

  return (
    <div className="action_main">
      <div className="main">
        <div className="container">
          <div className="row">
            <div className="col-4 col-sm-5">
              <button
                style={{ width: 50, height: 50 }}
                className="btn "
                onClick={increasebtn}>+
              </button>
            </div>
            <div className="col-4 col-sm-5">
              <button
                style={{ width: 50, height: 50 }}
                className="btn "
                onClick={decreasebtn}>-
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Action;
