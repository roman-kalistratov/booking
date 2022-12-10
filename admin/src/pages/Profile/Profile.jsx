
import { EditProfile, ChangePassword } from '../../form';
import { Sidebar, Navbar, Card, Avatar } from '../../components';
import './profile.scss';
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';

const Profile = () => {
    const [isChangePass, setIsChangePass] = useState(false);
    const { user } = useContext(AuthContext);

    console.log(user)

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
                        <Avatar className="avatar avatar-profile" path = {user.photo}/>
                        <EditProfile onClick={handleClick} user = {user}/>
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