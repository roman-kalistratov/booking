import { useState } from 'react';

import { Container, Main, Wrapper } from '../../layout';
import { Sidebar, Header, Card, Avatar } from '../../components';
import { EditProfile, ChangePassword } from '../../form';
import { Spinner } from '../../../components';


const Profile = () => {
    const [loading, setLoading] = useState(false);
    return (
        <Container>
            <Sidebar />
            <Main>
                <Header />
                <Wrapper>
                    {loading ? (
                        <Spinner />
                    ) : (
                        <>

                            <Card>
                                <Wrapper>
                                    <Card>
                                        <Avatar className="avatar avatar-profile" />
                                    </Card>

                                    <EditProfile />
                                </Wrapper>
                            </Card>

                            <Card>
                                <div className="change-password">
                                    <div className="change-password__title">
                                        <h3>Change Password</h3>
                                        <ChangePassword />
                                    </div>
                                </div>
                            </Card>
                        </>
                    )}
                </Wrapper>
            </Main>
        </Container>
    )
}

export default Profile