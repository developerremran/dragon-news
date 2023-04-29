import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import { FaFacebook, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import Qzone from '../../../Components/Qzone/Qzone';

const RIghtNav = () => {
    return (
        <>
            <h4>Login With....</h4>
            <Button variant="outline-primary" className='w-100'><FaGoogle /> Login With Google</Button>

            <Button variant="outline-secondary" className='mt-3 w-100'><FaTwitter /> Login With Twitter</Button>

            <div className='mt-5 '>
                <h2  className='mb-3'>Find Us On</h2>

                <ButtonGroup vertical className='w-100'>
                    <Button className='border border-2 bg-light text-black py-2'><FaFacebook /> Facebook</Button>
                    <Button className='border border-2 bg-light text-black py-2'><FaTwitter /> Twitter</Button>
                    <Button className='border border-2 bg-light text-black py-2'><FaInstagram /> Instagram</Button>
                    
                </ButtonGroup>

                <Qzone></Qzone>

            </div>
        </>

    );
};

export default RIghtNav;