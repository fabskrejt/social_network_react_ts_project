import React, {ChangeEvent} from "react";
import pStyle from "./ProfileInfo.module.css";
import userAva from "../../../assets/defaultUserAva.png"
import defaultBanner from "../../../assets/defaultBanner.png"
import {ProfileType} from "../ProfileContainer";


type PhotosType = {
    "small": string
    "large": string
}
type PropsOfProfileInfo = {
    profile: ProfileType
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
                     src={defaultBanner}
                     alt={'banner'}/>
            </section>
            <section className={pStyle.profileInfo}>
                <div className={pStyle.Avatar}>
                    <img className={pStyle.avatarImg}
                        // src={props.photos.small ? props.photos.large : userAva}
                         src={props.profile.photos.large ? props.photos.large : userAva}
                         alt={'avatar'}/>
                    {!props.userId && <label className="custom-file-upload">
                        <input type="file" onChange={sendPhoto}/>
                        Chose file
                    </label>}
                </div>
                <div className={pStyle.description}>
                    <div className={pStyle.descriptionName}>
                        {props.profile.fullName}
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
                    <div>
                        Looking For A Job:
                        {props.profile.lookingForAJob ? 'Yes' : 'No'}
                    </div>
                    <button onClick={()=>{}}>Change info </button>
                </div>
            </section>
        </div>
    )
}

export default ProfileInfo