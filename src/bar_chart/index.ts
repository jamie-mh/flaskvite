import "./scss/chart.scss";

import * as echarts from "echarts/core";
import { BarChart } from "echarts/charts";

import {
    TitleComponent,
    TooltipComponent,
    GridComponent,
    DatasetComponent,
    TransformComponent
} from "echarts/components";

import { LabelLayout, UniversalTransition } from "echarts/features";

import { CanvasRenderer } from "echarts/renderers";

echarts.use([
    BarChart,
    TitleComponent,
    TooltipComponent,
    GridComponent,
    DatasetComponent,
    TransformComponent,
    LabelLayout,
    UniversalTransition,
    CanvasRenderer
]);

let chart = echarts.init(document.getElementById("chart"));

chart.setOption({
    title: {
        text: "Bar Chart"
    },
    tooltip: {},
    xAxis: {
        data: ["shirt", "cardigan", "chiffon", "pants", "heels", "socks"]
    },
    yAxis: {},
    series: [
        {
            name: "sales",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20]
        }
    ]
});
