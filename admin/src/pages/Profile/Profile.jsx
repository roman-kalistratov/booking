
import { EditProfile, ChangePassword } from '../../form';
import { Sidebar, Navbar, Card, Avatar } from '../../components';
import './profile.scss';
import { useState } from 'react';

const Profile = () => {
    const [isChangePass, setIsChangePass] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        setIsChangePass(!isChangePass);
    }

    return (
        <div className="profile">
            <Sidebar />
            <div className="profile__container">
                <Navbar />

                <Card>
                    <div className="profile__wrapper">
                        <Avatar className="avatar avatar-profile" />
                        <EditProfile onClick={handleClick} />
                        {
                          isChangePass &&
                            <Card>
                                <ChangePassword />
                            </Card>
                        }

                    </div>
                </Card>
            </div>
        </div>
    )
}

export default Profile