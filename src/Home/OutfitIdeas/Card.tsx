import { backgroundColor } from "@shopify/restyle";
import React from "react";
import { FlatList, View, StyleSheet, Dimensions } from "react-native";
import Animated, { interpolateColor } from "react-native-reanimated";
import { mixColor } from "react-native-redash";
import { Box } from "../../components/Theme";

const { width: wWidth } = Dimensions.get("window");
const width = wWidth * 0.75;
const height = width * (294 / 425);
const borderRadius = 24

interface CardProps {
    position: Animated.Adaptable<Number>
}


const Card = ({ position}: CardProps) => {
    return (
        // <Box  style={StyleSheet.absoluteFill}
        //         justifyContent="center"
        //         alignItems="center"
        // > 
        //    <Animated.View style={{ backgroundColor, width, height }}>
 
        //    </Animated.View>
        //     </Box>

        < View />
        
    )
}

export default Card;