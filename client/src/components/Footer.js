import React from 'react';

export default  () =>{
    const date = new Date();
    const  year = date.getFullYear();
    return(
        <footer className="page-footer bottom teal container" style={{'position' : "fixed", 'left' : '0px', 'bottom' : '0px', 'right' : '0px', 'height' : '50px'}}>
            <div className="container row">
                <div className={"col offset-s4"}>© {year} Copyright Text</div>
            </div>
        </footer>
    )
}