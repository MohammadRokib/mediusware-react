import React from 'react';
import './Modal.css';

const USContactsModal = ({ switchToAllContacts, onClose }) => {
    console.log('US contact');
    return (
        <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <div className="modal-content">
                <h2>US Contacts</h2>
            </div>
            <button className='btn btn-lg all-contact' onClick={switchToAllContacts}>All Contacts</button>
            <button className='btn btn-lg us-contact'>US Contacts</button>
            <button className='btn btn-lg close-contact' onClick={onClose}>Close</button>
            <div>
                <label>
                    <input type="checkbox" name="" value="" /> Only Even
                </label>
            </div>
        </div>
    );
};

export default USContactsModal;

