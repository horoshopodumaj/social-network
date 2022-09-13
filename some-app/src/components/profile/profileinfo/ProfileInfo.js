import Preloader from "../../common/preloader/preloader";
import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />;
    }
    return (
        <div>
            <div>
                <img
                    className={s.content__img}
                    src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
                />
            </div>
            <div className={s.user__name}>{props.profile.fullName}</div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} />
                ava + description
            </div>
        </div>
    );
};

export default ProfileInfo;
