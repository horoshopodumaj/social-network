import React from "react";
import { connect } from "react-redux";
import { getUserPofile } from "../../redux/profile_reducer";
import Profile from "./Profile";
import { useParams } from "react-router-dom";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getUserPofile(userId);
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

export default connect(mapStateToProps, { getUserPofile })(
    withRouter(ProfileContainer)
);
