import FaSpinnerAnimated from "../AnimatedIcon/FaSpinner/FaSpinnerAnimated";
import classes from "./TravelLoading.module.scss";

function TravelLoading() {
  return (
    <div className={classes.travel_loading}>
      <div className={classes.content}>
        {/* Nội dung trang web du lịch */}
        <h1>Chào mừng bạn đến với trang web du lịch của chúng tôi</h1>
        <FaSpinnerAnimated />
      </div>
    </div>
  );
}

export default TravelLoading;
