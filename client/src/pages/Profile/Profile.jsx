import { Container, Main, Wrapper } from '../../admin/layout';
import { Sidebar, Header, Card,Avatar } from '../../admin/components';
import { EditProfile, ChangePassword } from '../../admin/form';

const Profile = () => {
    return (
        <Container>
            <Sidebar />
            <Main>
                <Header />
                <Wrapper>
                    <Card>
                        <Wrapper>
                            <Avatar className = "avatar avatar-profile"/>                        

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
                </Wrapper>
            </Main>
        </Container>
    )
}

export default Profile