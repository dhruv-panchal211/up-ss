import { Button, Typography } from "@mui/material";

const Titlebar = ({ text, handleClick, buttonText }) => {
  return (
    <>
      <div className="flex items-center justify-between mb-4 !bg-white my-6 py-4 px-3 rounded-lg">
        <h2 className="text-2xl text-primary ">{text}</h2>
        <Button
          className="!bg-primary"
          onClick={() => {
            handleClick();
          }}
        >
          <Typography className="!text-white">{buttonText}</Typography>
        </Button>
      </div>
      <hr className="my-4" />
    </>
  );
};

export default Titlebar;
