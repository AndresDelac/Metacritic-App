/* eslint-disable prettier/prettier */
import Svg, { Path } from "react-native-svg";

export const Logo = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={100}
    height={70}
    viewBox="0 0 50 50"
    {...props}
  >
    <Path d="M36.978 19.49a17.49 17.49 0 1 1 0-.021" />
    <Path fill="#F2F2F2" d="m17.209 32.937 3.41-3.41-6.567-6.567..." />
    <Path fill="#FFBD3F" d="M19.982 0A20 20 0 1 0 40 20v-.024..." />
    <Path d="M46.547 27.942h4.59v-8.84c0-.373.032-.807..." />
  </Svg>
);
