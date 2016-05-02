/* @flow */
/* Generated by ./script/iconify */
/* eslint-disable max-len */

import React from "react";
import classnames from "classnames";

export default class SvgIconLocation extends React.Component {
    props: {className?: string};

    render() {
        const {className, ...rest} = this.props;
        const classes = classnames(
            "LocationIcon",
            "allow-override-color",
            "Icon",
            "SvgIcon",
            className
        );

        return (
            <span
                {...rest}
                dangerouslySetInnerHTML={{__html: `
                    <svg class='${classes}' version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 64 64" enable-background="new 0 0 64 64"  xml:space="preserve"><g id="location"><g><path fill="none" stroke="#231F20" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"  d=" M46.999,16.274"></path></g><g><path fill="none" stroke="#231F20" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"  d=" M46.999,16.274"></path></g><g><path fill="#231F20"  d="M34.373,50.113c-0.046,0-0.091-0.002-0.137-0.008c-0.501-0.062-0.896-0.458-0.956-0.96 l-1.995-16.496l-16.411-1.914c-0.497-0.059-0.893-0.444-0.962-0.939c-0.07-0.495,0.203-0.976,0.665-1.168L46.575,15.26 c0.406-0.172,0.875-0.081,1.19,0.227c0.316,0.307,0.418,0.772,0.26,1.184L35.398,49.409 C35.233,49.838,34.822,50.113,34.373,50.113z M19.304,29.037l13.098,1.527c0.504,0.059,0.903,0.456,0.964,0.961l1.569,12.974 l10.111-26.217L19.304,29.037z"></path></g></g><g id="Layer_1"></g></svg>
                `}}
            />
        );
    }
}
