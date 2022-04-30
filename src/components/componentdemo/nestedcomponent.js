import React from "react";

function Hello()
{
    return <span>Trainees</span>;
}

export class HiComp extends React.Component
{
    render()
    {
        return <span>Welcome <Hello/></span>;
    }
}

export default HiComp;