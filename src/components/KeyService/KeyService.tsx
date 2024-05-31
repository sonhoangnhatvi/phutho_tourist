import { truncateText } from "../../Utils/helper";
import { KeyServiceCollection } from "../../interface/KeyServiceItem";
import classes from "./KeyService.module.scss";

// Modify Article component to receive props
export const KeyService = ({
  keyServiceItem,
}: {
  keyServiceItem: KeyServiceCollection;
}) => {
  return (
    <div className={classes.key_service}>
      <img src={keyServiceItem.key_service_image} alt="Service_Image"></img>
      <div className={classes.key_service_content}>
        <p className={classes.key_service_title}>
          {keyServiceItem.key_service_name}
        </p>
        <p className={classes.key_service_content}>
          {truncateText(keyServiceItem.key_service_content, 20)}
        </p>
      </div>
    </div>
  );
};
