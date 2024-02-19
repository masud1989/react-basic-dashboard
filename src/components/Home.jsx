import {
  BsFillPeopleFill,
  BsFillXDiamondFill,
  BsFlower3,
  BsPeople,
} from "react-icons/bs";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const Home = () => {
  return (
    <main className="main-container">
      <div className="main-title">
        <h3 className="text-3xl mb-5 text-indigo-500">Dashboard</h3>
      </div>
      <div className="main-cards">
        <div className="card bg-indigo-600">
          <div className="card-inner ">
            <h2>Total Products</h2>
            <BsFlower3 className="card_icon" />
          </div>
          <h1>300</h1>
        </div>
        <div className="card bg-green-600">
          <div className="card-inner">
            <h2>Categories</h2>
            <BsFillXDiamondFill className="card_icon" />
          </div>
          <h1>300</h1>
        </div>
        <div className="card bg-gray-400">
          <div className="card-inner">
            <h2>Customers</h2>
            <BsPeople className="card_icon" />
          </div>
          <h1>300</h1>
        </div>
        <div className="card bg-yellow-600">
          <div className="card-inner">
            <h2>Suppliers</h2>
            <BsFillPeopleFill className="card_icon" />
          </div>
          <h1>300</h1>
        </div>
      </div>
      <div className="charts">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="pv"
              fill="#8884d8"
              activeBar={<Rectangle fill="pink" stroke="blue" />}
            />
            <Bar
              dataKey="uv"
              fill="#82ca9d"
              activeBar={<Rectangle fill="gold" stroke="purple" />}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </main>
  );
};

export default Home;
