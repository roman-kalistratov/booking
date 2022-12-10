import './avatar.scss';

const Avatar = ({path,className}) => {

    return (
        <div className={className}>
            <img src ={`uploads/${path ? `${path}` : `avatar-1.png`} `} alt="user avatar" />
        </div>
    )
}

export default Avatar