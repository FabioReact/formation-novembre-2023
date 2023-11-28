import classes from "./spinner.module.css";

const Spinner = () => {
  return (
    <div className="flex justify-center" aria-label="spinner">
      <div className={classes.loader}></div>
    </div>
  );
};

export default Spinner;
