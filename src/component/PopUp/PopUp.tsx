import React, { useState, useCallback, KeyboardEvent } from 'react';

type PropsPopUp = {
  text: string;
  name: string;
  closePopUp: () => void;
  confirmAction: () => void;

}

const PopUp: React.FC<PropsPopUp> = ({ closePopUp, confirmAction, text, name }) => (


      <div className='popup'>
        <div className='popup__inner'>
          <h1 className='popup__message'>{`${text} "${name}" ?`}</h1>
          <div className="popup__buttons">
            <button
              className='popup__confirm-btn btn'
              onClick={() => confirmAction()}
              type="button">
              OK
          </button>
            <button
              className='popup__cancel-btn btn'
              onClick={() => closePopUp()}
            >
              Cancel
          </button>
          </div>
        </div>
      </div>
    
)


export default PopUp;