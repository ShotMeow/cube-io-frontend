import { Dispatch, FC, SetStateAction, useEffect } from "react";
import styles from "./HeaderDropdown.module.scss";
import Logo from "@/shared/ui/Logo";
import { motion } from "framer-motion";
import { Navigation } from "@/features/navigation";

interface Props {
  setDropdownShown: Dispatch<SetStateAction<boolean>>;
}

const HeaderDropdown: FC<Props> = ({ setDropdownShown }) => {
  useEffect(() => {
    document.documentElement.classList.add("--prevent-scroll");

    return () => {
      document.documentElement.classList.remove("--prevent-scroll");
    };
  }, []);
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={styles.dropdown}
    >
      <motion.div
        initial={{ translateY: -100 }}
        animate={{ translateY: 0 }}
        exit={{ translateY: -100 }}
        className={styles.inner}
      >
        <div className={styles.top}>
          <Logo />
          <button
            onClick={() => setDropdownShown(false)}
            className={styles.exit}
          >
            <span />
            <span />
          </button>
        </div>
        <Navigation />
      </motion.div>
    </motion.header>
  );
};

export default HeaderDropdown;
