/* @flow */
/* Generated by ./script/iconify */
/* eslint-disable max-len */

import React from "react";
import classnames from "classnames";

export default class SvgIconCheckboxSelected extends React.Component {
    props: {className?: string};

    render() {
        const {className, ...rest} = this.props;
        const classes = classnames(
            "CheckboxSelectedIcon",
            "allow-override-color",
            "Icon",
            "SvgIcon",
            className
        );

        return (
            <span
                {...rest}
                dangerouslySetInnerHTML={{__html: `
                    <svg class='${classes}' version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 64 64" enable-background="new 0 0 64 64"  xml:space="preserve"><g id="checkbox-selected"><path id="XMLID_679_" fill="#231F20"  d="M44.38,47.476H20.086c-1.967,0-3.562-1.595-3.562-3.562V19.619 c0-1.709,1.386-3.095,3.095-3.095h24.761c1.709,0,3.095,1.386,3.095,3.095v24.762C47.476,46.09,46.09,47.476,44.38,47.476z M29.902,37.531l9.506-9.506c0.43-0.43,0.43-1.126,0-1.556c-0.428-0.43-1.127-0.43-1.555,0l-8.729,8.728l-3.096-3.095 c-0.43-0.43-1.126-0.43-1.556,0c-0.429,0.43-0.429,1.126,0.001,1.556l3.873,3.873c0.215,0.215,0.496,0.322,0.777,0.322 S29.688,37.746,29.902,37.531z"></path></g><g id="Layer_1"></g></svg>
                `}}
            />
        );
    }
}
