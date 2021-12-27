import React from "react";
import pStyle from "./ProfileInfo.module.css";

type PhotosType= {
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
}

const ProfileInfo = (props: PropsOfProfileInfo) => {
    return (
        <div>
            <section className={pStyle.profileBanner}>
                <img className={pStyle.profileBannerImg}
                     src='https://images.squarespace-cdn.com/content/v1/57dea572579fb3ea46810d43/1477314236757-Z9L4BOPJRYS6JZEO0OBA/image-asset.png?format=1000w'/>
            </section>
            <section className={pStyle.profileInfo}>
                <div className='Avatar'>
                    <img className={pStyle.avatarImg}
                         src={props.photos.large  && props.photos.small } />
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