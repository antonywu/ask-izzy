/* @flow */
/* Generated by ./script/iconify */
/* eslint-disable max-len */

import React from "react";
import classnames from "classnames";

export default class SvgIconLegal extends React.Component {
    props: {
        className?: string,
    };
    state: void;

    render() {
        const {className, ...rest} = this.props;
        const classes = classnames(
            "LegalIcon",
            "allow-override-color",
            "Icon",
            "SvgIcon",
            className
        );

        return (
            <span
                {...rest}
            >
                <object
                    type="image/svg+xml"
                    data="/static/images/icons/askizzy-icon-legal.svg"
                    className={classes}
                />
            </span>
        );
    }
}
