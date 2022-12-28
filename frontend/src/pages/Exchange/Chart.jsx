import React from "react";
import { VStack } from "@chakra-ui/react";

import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";

function ChartCom({ price, currency, symbol }) {
  return (
    <VStack w="100%" h="400px" sx={{ "& > *": { w: "100%" } }} bg="white">
      <AdvancedRealTimeChart
        theme="light"
        autosize
        hide_legend
        hide_top_toolbar
        hide_side_toolbar
        style={3}
        symbol={symbol + currency}
      ></AdvancedRealTimeChart>
    </VStack>
  );
}

export default ChartCom;
