import React, { useEffect, useState } from 'react';
import { url } from './url';
import './Modal.css';

const AllContactsModal = ({ switchToUSContacts, onClose }) => {
    const [contacts, setContacts] = useState([]);
    const [showContact, setShowContact] = useState(false);

    useEffect(() => {
        fetch(`${url}/contacts/`)
            .then(res => res.json())
            .then(data => {
                setContacts(data);
                if (data.length > 0) setShowContact(true);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <div className="modal-content">
                <h2>All Contacts</h2>
                {showContact && (
                    <div>
                        {contacts.map(contact => (
                            <div key={contact.id}>
                                <p>{contact.id}</p>
                                <p>{contact.phone}</p>
                                <p>{contact.country}</p>
                                <hr />
                            </div>
                        ))}
                    </div>
                )}
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

