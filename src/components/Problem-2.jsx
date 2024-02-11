import React, { useState } from 'react';
import AllContactsModal from './contacts/AllContacts.jsx';
import USContactsModal from './contacts/USContacts.jsx';

const Problem2 = () => {
    const [showAllModal, setShowAllModal] = useState(false);
    const [showUSModal, setShowUSModal] = useState(false);

    const handleAllContactsClick = () => {
        console.log('Switching to all contacts');
        setShowAllModal(true);
        setShowUSModal(false);
        window.history.pushState({}, '', '/problem-2/all-contacts');
    };

    const handleUSContactsClick = () => {
        console.log('Switching to all contacts');
        setShowAllModal(false);
        setShowUSModal(true);
        window.history.pushState({}, '', '/problem-2/us-contacts');
    };

    const handleCloseModal = () => {
        console.log('closing modal');
        setShowAllModal(false);
        setShowUSModal(false);
        window.history.pushState({}, '', '/problem-2');
    };

    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>

                <div className="d-flex justify-content-center gap-3">
                    <button className="btn btn-lg btn-outline-primary" type="button" onClick={handleAllContactsClick}>All Contacts</button>
                    <button className="btn btn-lg btn-outline-warning" type="button" onClick={handleUSContactsClick}>US Contacts</button>
                </div>
                {showAllModal && <AllContactsModal switchToUSContacts={handleUSContactsClick} onClose={handleCloseModal} />}
                {showUSModal && <USContactsModal switchToAllContacts={handleAllContactsClick} onClose={handleCloseModal} />}
            </div>
        </div>
    );
};

export default Problem2;
