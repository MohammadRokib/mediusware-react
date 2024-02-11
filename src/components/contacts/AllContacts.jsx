import React from 'react';
import './Modal.css';

const AllContactsModal = ({ switchToUSContacts, onClose }) => {
    console.log('All contact')
    return (
        <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <div className="modal-content">
                <h2>All Contacts</h2>
            </div>
            <button className='btn btn-lg all-contact'>All Contacts</button>
            <button className='btn btn-lg us-contact' onClick={switchToUSContacts}>US Contacts</button>
            <button className='btn btn-lg close-contact' onClick={onClose}>Close</button>
            <div>
                <label>
                    <input type="checkbox" name="" value="" /> Only Even
                </label>
            </div>
        </div>
    );
};

export default AllContactsModal;

