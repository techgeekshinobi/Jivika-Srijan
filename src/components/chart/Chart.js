import {
  ComposedChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  Area,
  Bar,
  Line,
} from "recharts";

const Chart = () => {
  const data = [
    {
      name: "2010",
      Canals: 800,
      Wells: 1150,
      Tanks: 400,
      Other: 200,
    },
    {
      name: "2011",
      Canals: 1000,
      Wells: 1500,
      Tanks: 500,
      Other: 400,
    },
    {
      name: "2012",
      Canals: 1300,
      Wells: 1600,
      Tanks: 700,
      Other: 470,
    },
    {
      name: "2013",
      Canals: 1500,
      Wells: 1900,
      Tanks: 750,
      Other: 700,
    },
    {
      name: "2014",
      Canals: 2000,
      Wells: 1950,
      Tanks: 800,
      Other: 800,
    },
    {
      name: "2015",
      Canals: 2500,
      Wells: 2000,
      Tanks: 880,
      Other: 950,
    },
    {
      name: "2016",
      Canals: 2800,
      Wells: 2100,
      Tanks: 1000,
      Other: 1100,
    },
    {
      name: "2017",
      Canals: 3000,
      Wells: 2250,
      Tanks: 1110,
      Other: 1300,
    },
    {
        name: "2018",
        Canals: 3300,
        Wells: 2300,
        Tanks: 1540,
        Other: 1900,
      },
      {
        name: "2019",
        Canals: 3350,
        Wells: 2400,
        Tanks: 2000,
        Other: 2000,
      },
  ];

  return (
    <ComposedChart width={600} height={350} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <CartesianGrid stroke="#f5f5f5" />
      <Area type="monotone" dataKey="Canals" fill="#8884d8" stroke="#8884d8" />
      <Bar dataKey="Tanks" barSize={20} fill="#413ea0" />
      <Line type="monotone" dataKey="Tanks" stroke="#413ea0" />
      <Line type="monotone" dataKey="Wells" stroke="#ff7300" />
      <Line type="monotone" dataKey="Other" stroke="#ef2367" />
    </ComposedChart>
  );
};

export default Chart;
