/* @flow */
/* Generated by ./script/iconify */
/* eslint-disable max-len */

import React from "react";
import classnames from "classnames";

export default class SvgIconCar extends React.Component {
    props: {
        className?: string,
    };
    state: void;

    render() {
        const {className, ...rest} = this.props;
        const classes = classnames(
            "CarIcon",
            "allow-override-color",
            "Icon",
            "SvgIcon",
            className
        );

        return (
            <span
                {...rest}
                dangerouslySetInnerHTML={{__html: `
                    <svg class='${classes}' version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1366 768" enable-background="new 0 0 1366 768"  xml:space="preserve"><style type="text/css"> .st0{fill:#231F20;} </style><g><path class="st0" d="M692.8,388.9v-2.8c0-0.8-0.3-1.5-0.8-2.1c-0.3-0.3-0.6-0.5-0.9-0.6c0-0.1,0-0.1,0-0.2l-2-5.1 c-0.2-0.4-0.6-0.7-1-0.7h-9.8c-0.5,0-0.9,0.3-1,0.7l-2,5.1c0,0.1,0,0.1,0,0.2c-0.3,0.1-0.6,0.3-0.9,0.6c-0.6,0.6-0.8,1.3-0.8,2.1 l0,2.8c0,0.7,0.3,1.8,0.8,2.4c0.3,0.3,0.6,0.5,1,0.7v1.2c0,0.8,0.7,1.5,1.5,1.5c0.8,0,1.5-0.7,1.5-1.5v-1h9.6v1 c0,0.8,0.7,1.5,1.5,1.5s1.5-0.7,1.5-1.5v-1.2c0.4-0.1,0.7-0.4,1-0.7C692.5,390.7,692.8,389.6,692.8,388.9z M675.8,389.7 c-0.1-0.1-0.2-0.5-0.2-0.8l0-2.8c0-0.2,0.1-0.4,0.2-0.5c0.1-0.1,0.3-0.2,0.5-0.2h13.7c0.2,0,0.3,0.1,0.5,0.2 c0.1,0.1,0.2,0.3,0.2,0.5v2.8c0,0,0,0,0,0c0,0.3-0.1,0.7-0.2,0.8c-0.1,0.1-0.3,0.2-0.5,0.2h-13.5 C676.1,389.9,675.9,389.8,675.8,389.7z M678.9,379.6h8.3l1.4,3.6h-11.1L678.9,379.6z"></path><circle class="st0" cx="677.9" cy="387.6" r="0.9"></circle><circle class="st0" cx="688.3" cy="387.6" r="0.9"></circle></g></svg>
                `}}
            />
        );
    }
}