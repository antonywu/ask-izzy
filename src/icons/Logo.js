/* @flow */
/* Generated by ./script/iconify */
/* eslint-disable max-len */

import React from "react";
import classnames from "classnames";

export default class SvgIconLogo extends React.Component {
    props: Object;
    state: void;
    static propTypes = {
        className: React.PropTypes.string,
    };

    render() {
        const {className, ...rest} = this.props;
        const classes = classnames(
            "LogoIcon",
            "allow-override-color",
            "Icon",
            "SvgIcon",
            className
        );

        return (
            <span
                {...rest}
                dangerouslySetInnerHTML={{__html: `
                    <svg class='${classes}' version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 64 64" enable-background="new 0 0 64 64"  xml:space="preserve"><g id="logo"><path id="XMLID_43_" fill="#231F20"  d="M28.457,27.073c1.594,3.34-1.654,6.614-4.97,5.007 c-0.628-0.304-1.142-0.823-1.445-1.455c-1.594-3.34,1.654-6.614,4.97-5.007C27.64,25.922,28.155,26.44,28.457,27.073z"></path><path id="XMLID_41_" fill="#231F20"  d="M43.632,27.307c1.338,3.257-1.836,6.342-5.074,4.773 c-0.628-0.304-1.143-0.823-1.445-1.455c-1.557-3.262,1.505-6.461,4.737-5.112C42.655,25.848,43.298,26.496,43.632,27.307z"></path><path id="XMLID_38_" fill="#231F20"  d="M56.039,15.278c-1.043-3.11-3.966-5.315-7.324-5.384 c-0.025-0.001-0.05-0.001-0.075-0.001L17.294,9.744c-0.039-0.001-0.079-0.001-0.118-0.001c-3.554,0-6.661,2.417-7.601,5.763 c-0.231,0.624-0.333,1.295-0.291,1.973c-0.01,0.553,0.042,1.111,0.152,1.663l2.354,21.531c0.169,1.55,1.078,2.92,2.434,3.671 c0.305,0.169,7.585,4.142,17.087,4.142c2.678,0,5.281-0.313,7.79-0.931c0.19-0.018,0.38-0.051,0.568-0.118l0.351-0.125 c0.477-0.133,0.951-0.274,1.421-0.429l5.504,6.634c0.906,1.292,2.365,2.025,3.881,2.025c0.444,0,0.892-0.063,1.333-0.193 c1.948-0.574,3.32-2.331,3.414-4.374l0.869-33.531C56.479,16.694,56.337,15.952,56.039,15.278z M50.827,50.755l-4.495-5.696 c1.171-0.477,1.778-1.796,1.353-3.009c-0.437-1.247-1.795-1.901-3.032-1.461l-1.443,0.513l-0.051-0.065 c-0.309,0.15-0.618,0.278-0.927,0.413l-3.669,1.305c-2.505,0.678-4.952,0.945-7.251,0.945c-6.036,0-11.046-1.837-13.381-2.868 c-1.069-0.601-1.452-1.61-1.588-2.257l-2.21-20.218c-0.066-0.258-0.102-0.528-0.096-0.806c0.001-0.05,0.007-0.099,0.011-0.149 l-0.02-0.222l0.042,0.001c0.218-1.498,1.537-2.65,3.106-2.65c0.022,0,0.044,0,0.066,0.001l31.375,0.149 c1.516,0.031,2.766,1.127,3.025,2.541l0.054,0.001L50.827,50.755z"></path></g><g id="Layer_1"></g></svg>
                `}}
            />
        );
    }
}
