import React from 'react';
import { Sidebar } from '../../components';
import './profile.scss'

const Profile = () => {
    return (
        <div className='layout'>
            <div className="layout__sidebar">
                <Sidebar />
            </div>
            <main className='layout__main'>
                page Profile
            </main>
        </div>
    )
}

export default Profile