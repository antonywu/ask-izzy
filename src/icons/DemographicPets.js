/* @flow */
/* Generated by ./script/iconify */
/* eslint-disable max-len */

import React from "react";
import classnames from "classnames";

export default class SvgIconDemographicPets extends React.Component {
    props: {
        className?: string,
    };
    state: void;

    render() {
        const {className, ...rest} = this.props;
        const classes = classnames(
            "DemographicPetsIcon",
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
                    data="/static/images/icons/askizzy-icon-demographic-pets.svg"
                    className={classes}
                />
            </span>
        );
    }
}
