import { Button } from "./Button";
import styles from "./Button.module.scss";

export default { title: "Button", component: Button };

export const Default = () => (
  <>
    <div className={styles.buttonBox}>
      <label className={styles.buttonLabel}>Default</label>
      <Button>Send</Button>
    </div>
    <div className={styles.buttonBox}>
      <label className={styles.buttonLabel}>Disabled</label>
      <Button isDisabled>Send</Button>
    </div>
  </>
);
