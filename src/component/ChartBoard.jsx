import { useMemo } from "react";
import {
    Area,
    AreaChart,
    Brush,
    CartesianGrid,
    ResponsiveContainer,
    Tooltip,
    XAxis, YAxis
} from "recharts";

function generateData() {
    const data = [];
    let val = 5000;
    for (let y = 2008; y <= 2026; y++) {
        for (let m = 0; m < 12; m++) {
            const noise = (Math.random() - 0.48) * 800;
            val = Math.max(500, Math.min(22000, val + noise));
            data.push({
                date: `${y}-${String(m + 1).padStart(2, "0")}`,
                year: y,
                value: Math.round(val),
            });
        }
    }
    return data;
}

const allData = generateData();

function formatYAxis(v) {
    return v >= 1000 ? `${Math.round(v / 1000)}k` : v;
}

function formatLabel(str) {
    if (!str) return "";
    const [y, m] = str.split("-");
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return `${months[parseInt(m) - 1]} ${y}`;
}

export default function ChartBoard() {
    const yearTicks = useMemo(
        () => allData.filter((d) => d.date.endsWith("-01")).map((d) => d.date),
        []
    );

    return (
        <div style={{ padding: "24px 16px", fontFamily: "sans-serif", maxWidth: 700, margin: "0 auto" }}>
            <p style={{ textAlign: "center", fontSize: 16, marginBottom: 20, color: "#333" }}>
                Share <strong>performance</strong>
            </p>

            <ResponsiveContainer width="100%" height={200}>
                <AreaChart data={allData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="mainGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#d9ae2b" stopOpacity={0.95} />
                            <stop offset="95%" stopColor="#d9ae2b" stopOpacity={0.3} />
                        </linearGradient>
                        <linearGradient id="brushGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#aaa" stopOpacity={0.7} />
                            <stop offset="95%" stopColor="#aaa" stopOpacity={0.2} />
                        </linearGradient>
                    </defs>

                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.08)" vertical={false} />

                    <XAxis
                        dataKey="date"
                        ticks={yearTicks}
                        tickFormatter={(v) => v.split("-")[0]}
                        tick={{ fontSize: 11, fill: "#888" }}
                        axisLine={true}
                        tickLine={false}
                    />
                    <YAxis
                        tickFormatter={formatYAxis}
                        tick={{ fontSize: 11, fill: "#888" }}
                        axisLine={false}
                        tickLine={false}
                        width={36}
                    />

                    <Tooltip
                        labelFormatter={formatLabel}
                        formatter={(v) => [v.toLocaleString(), "MTN"]}
                        contentStyle={{
                            background: "#fff",
                            border: "1px solid #f7d015",
                            borderRadius: 8,
                            fontSize: 12,
                        }}
                    />

                    <Area
                        type="monotone"
                        dataKey="value"
                        stroke="#D4871A"
                        strokeWidth={1.5}
                        fill="url(#mainGrad)"
                        dot={false}
                        activeDot={{ r: 4, fill: "#D4871A" }}
                    />

                    <Brush
                        dataKey="date"
                        height={55}
                        stroke="#ddd"
                        fill="#f5f5f5"
                        travellerWidth={8}
                        tickFormatter={(v) => v.split("-")[0]}
                        startIndex={10}
                        endIndex={allData.length - 1}
                    >
                        <AreaChart data={allData}>
                            <Area
                                type="monotone"
                                dataKey="value"
                                stroke="#999"
                                strokeWidth={1}
                                fill="url(#brushGrad)"
                                dot={false}
                            />
                        </AreaChart>
                    </Brush>
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}
