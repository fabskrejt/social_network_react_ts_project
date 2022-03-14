import React, {ChangeEvent} from "react";
import pStyle from "./ProfileInfo.module.css";

type PhotosType = {
    "small": string
    "large": string
}
type PropsOfProfileInfo = {
    userName: string
    birthday: string
    city: string
    education: string
    site: string
    photos: PhotosType
    userId: string
    sendPhoto: (a: File) => void
}

const ProfileInfo = (props: PropsOfProfileInfo) => {
    let sendPhoto = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files !== null) {
            props.sendPhoto(e.target.files[0])
        }
    }
    return (
        <div>
            <section className={pStyle.profileBanner}>
                <img className={pStyle.profileBannerImg}
                     src='https://images.squarespace-cdn.com/content/v1/57dea572579fb3ea46810d43/1477314236757-Z9L4BOPJRYS6JZEO0OBA/image-asset.png?format=1000w'
                     alt={'banner'}/>
            </section>
            <section className={pStyle.profileInfo}>
                <div className={pStyle.Avatar}>
                    <img className={pStyle.avatarImg}
                         src={props.photos.small ? props.photos.large : 'https://image.shutterstock.com/image-vector/conversation-talking-black-icon-50x50-260nw-1037215327.jpg'}
                         alt={'avatar'}/>
                    {!props.userId && <label className="custom-file-upload">
                        <input type="file" onChange={sendPhoto}/>
                        Chose file
                    </label>}
                </div>
                <div className={pStyle.description}>
                    <div className={pStyle.descriptionName}>
                        {props.userName}
                    </div>
                    <div className='birthday'>
                        {props.birthday}
                    </div>
                    <div className='city'>
                        {props.city}
                    </div>
                    <div className='education'>
                        {props.education}
                    </div>
                    <div className='site'>
                        {props.site}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ProfileInfo