import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { setUserProfile } from "../../redux/profile_reducer";
import Profile from "./Profile";
import { useParams } from "react-router-dom";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/profile/${userId}`
            )
            .then((response) => {
                this.props.setUserProfile(response.data);
            });
    }
    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} />
            </div>
        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
});

export function withRouter(ProfileContainer) {
    return (props) => {
        const match = { params: useParams() };
        return <ProfileContainer {...props} match={match} />;
    };
}

export default connect(mapStateToProps, { setUserProfile })(
    withRouter(ProfileContainer)
);
