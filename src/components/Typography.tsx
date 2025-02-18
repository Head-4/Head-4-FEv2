import React, {ReactNode} from "react";
import {jsx} from "react/jsx-runtime";

import * as T from "../styles/Common/Typography.styled";
import {theme} from "../styles/theme";
import {Color} from "../types/color";

interface TypographyPropsType {
    children: ReactNode;
    typoSize: TypographType;
    style?: React.CSSProperties;
    color?: Color;
    textAlign?: "center" | "left" | "right";
    className?: string;
}

type TypographType =
    | "H1"
    | "H2"
    | "H3"
    | "H4"
    | "T1"
    | "T2_bold"
    | "T2_semibold"
    | "T3_semibold"
    | "T3_medium"
    | "T4_bold"
    | "T4_semibold"
    | "T4_medium"
    | "B1_bold"
    | "B1_semibold"
    | "B1_medium"
    | "B2_semibold"
    | "B2_medium"
    | "B3_semibold"
    | "B3_medium";

const TypoMap = {
    H1: T.H1,
    H2: T.H2,
    H3: T.H3,
    H4: T.H4,
    T1: T.T1,
    T2_bold: T.T2_bold,
    T2_semibold: T.T2_semibold,
    T3_semibold: T.T3_semibold,
    T3_medium: T.T3_medium,
    T4_bold: T.T4_bold,
    T4_semibold: T.T4_semibold,
    T4_medium: T.T4_medium,
    B1_bold: T.B1_bold,
    B1_semibold: T.B1_semibold,
    B1_medium: T.B1_medium,
    B2_semibold: T.B2_semibold,
    B2_medium: T.B2_medium,
    B3_semibold: T.B3_semibold,
    B3_medium: T.B3_medium
};

export default function Typography({
                                       color,
                                       typoSize,
                                       children,
                                       style,
                                       textAlign,
                                       className
                                   }: TypographyPropsType) {
    const Typo = TypoMap[typoSize];
    const Color = theme[color as Color];

    return jsx(Typo, {
        style: {color: Color, textAlign: textAlign, ...style},
        className,
        children
    });
}