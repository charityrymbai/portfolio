import { motion } from "motion/react";
import { Link } from "react-router-dom";

const NaviButton = ({goTo,title}) => {
    return (
        <Link to={goTo}>
            <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
            >
                {title}
            </motion.div>
        </Link>
    );
}

export default NaviButton;