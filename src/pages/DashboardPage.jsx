import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Typography } from "@mui/material";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => Array.from({ length: 1000 }, (_, i) => i + 1)),
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: labels.map(() => Array.from({ length: 1000 }, (_, i) => i + 1)),
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Ongoing bill",
    },
  },
};
const DashboardPage = () => {
  return (
    <div className="h-full">
      <h3 className="text-white">Dashboard</h3>
      <div className="my-3 bg-white rounded max-h-72">
        <Bar options={options} data={data} />
      </div>
      <div className="grid grid-cols-3 gap-3">
        <div className="text-black bg-white rounded">
          <div className="flex items-center justify-between p-4 px-2 text-base">
            <div>Total Customer</div>
            <MoreHorizIcon />
          </div>
          <div className="flex items-end justify-between p-4 px-3 text-base">
            <div>16</div>
            <div className="text-sm">
              <Typography className="!text-sm text-right">0%</Typography>
              <Typography className="!text-sm">Since Yesterday</Typography>
            </div>
          </div>
        </div>
        <div className="text-black bg-white rounded">
          <div className="flex items-center justify-between p-4 px-3 text-base">
            <div>Total Customer</div>
            <MoreHorizIcon />
          </div>
          <div className="flex items-end justify-between p-4 px-3 text-base">
            <div>16</div>
            <div className="text-sm">
              <Typography className="!text-sm text-right">0%</Typography>
              <Typography className="!text-sm">Since Yesterday</Typography>
            </div>
          </div>
        </div>
        <div className="text-black bg-white rounded">
          <div className="flex items-center justify-between p-4 px-3 text-base">
            <div>Total Customer</div>
            <MoreHorizIcon />
          </div>
          <div className="flex items-end justify-between p-4 px-3 text-base">
            <div>16</div>
            <div className="text-sm">
              <Typography className="!text-sm text-right">0%</Typography>
              <Typography className="!text-sm">Since Yesterday</Typography>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3">
        <Typography className="text-white !text-2xl">Reports</Typography>
        <div className="grid grid-cols-3 gap-3">
          <div className="text-black bg-white rounded">
            <div className="flex items-center justify-between p-4 px-2 text-base">
              <Typography className="!text-lg">Recent Appointments</Typography>
            </div>
            <div className="flex flex-col gap-3 mb-4">
              <div className="flex items-center justify-between w-full px-3 text-base">
                <div>
                  <Typography>Test-1</Typography>
                  <Typography className="!text-sm">Sub Text</Typography>
                </div>
                <div>
                  <KeyboardArrowRightIcon />
                </div>
              </div>
              <div className="flex items-center justify-between w-full px-3 text-base">
                <div>
                  <Typography>Test-1</Typography>
                  <Typography className="!text-sm">Sub Text</Typography>
                </div>
                <div>
                  <KeyboardArrowRightIcon />
                </div>
              </div>
              <div className="flex items-center justify-between w-full px-3 text-base">
                <div>
                  <Typography>Test-1</Typography>
                  <Typography className="!text-sm">Sub Text</Typography>
                </div>
                <div>
                  <KeyboardArrowRightIcon />
                </div>
              </div>
              <div className="flex items-center justify-between w-full px-3 text-base">
                <div>
                  <Typography>Test-1</Typography>
                  <Typography className="!text-sm">Sub Text</Typography>
                </div>
                <div>
                  <KeyboardArrowRightIcon />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2 text-black bg-white rounded">
            <div className="flex items-center justify-between p-4 px-2 text-base">
              <div>Total Customer</div>
              <MoreHorizIcon />
            </div>
            <div className="flex items-end justify-between p-4 px-3 text-base">
              <div>16</div>
              <div className="text-sm">
                <Typography className="!text-sm text-right">0%</Typography>
                <Typography className="!text-sm">Since Yesterday</Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3">
        <Typography className="text-white !text-2xl">Dashboard</Typography>
        <div className="my-3 bg-white rounded max-h-72">
          <Bar options={options} data={data} />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
