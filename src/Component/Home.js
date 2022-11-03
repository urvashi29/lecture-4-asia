import React from "react";
import _ from 'lodash';

const Home = () => {

    const handleClick = () => {
        let arr = [1, [2, [3, [4]], 5]];
        console.log(_.flattenDeep(arr));
    }

    return (
        <>This is home page.
            <button onClick={handleClick}>Lodash Implementation</button>
        </>
    )
}

export default Home;



