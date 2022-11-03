import React from "react";
import { useParams } from "react-router-dom";

const withRouter = (WrapperComponent) => props => {
    const params = useParams();
    console.log(params.user_id);
    return (
        <WrapperComponent params={params} {...props} />
    )
}

export default withRouter;

// const withRouter = () => {
//     return(props) (


//     return (
//         <></>
//     )
//     )
// }