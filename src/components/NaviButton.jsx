import { motion } from "motion/react";
import { Link } from "react-router-dom";

const NaviButton = ({goTo,title}) => {
    return (
        <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
        >
            <button className="hover:bg-gray-300 rounded-full p-4"><Link to={goTo}>{title}</Link></button>
        </motion.div>
    );
}

export default NaviButton;