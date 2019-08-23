import React, {Fragment} from 'react';
import PCFooter from "../footer/PCFooter";

class PCHomepage extends React.Component {
    render() {
        return(
            <Fragment>
                <div className="pc-homepage-wrapper">
                    PC Home!
                </div>
                <PCFooter />
            </Fragment>
        );
    }
}

export default PCHomepage;