import { extendTheme } from "@chakra-ui/react";

import components from "./components";
import fonts from "./fonts";
import styles from "./styles";
import colors from "./colors";

const themeConfig = { components, fonts, styles, colors };

const theme = extendTheme(themeConfig);

export default theme;
