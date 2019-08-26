import React, {Fragment} from 'react';
import PCFooter from "../footer/PCFooter";

class PCHomepage extends React.Component {
    render() {
        return(
            <Fragment>
                <div className="pc-homepage-wrapper">
                    <div className="pc-homepage-content">
                        PC Home!
                    </div>
                </div>
                <PCFooter />
            </Fragment>
        );
    }
}

export default PCHomepage;