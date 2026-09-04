import React from "react";
import "../Styles/education.scss";
import { motion } from "framer-motion";
import { SlCalender } from "react-icons/sl";
import { PiStudentBold } from "react-icons/pi";
const Education = () => {
  return (
    <div id="education" className="timeline">
      <div className="timelineBox">
        <div className="timelineItem leftTimeline">
          <motion.div
            initial={{
              x: -100,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
            }}
          >
            <h3>
              {" "}
              <PiStudentBold className="stutdIcon" /> Master Of Computer
              Application (M.C.A)
            </h3>
            <p>R.C.Patel IMRD College Shirpur</p>
            <p>
              <SlCalender className="calender" />
              2025-2027
            </p>
          </motion.div>
        </div>

        <div className="timelineItem rightTimeline">
          <motion.div
            initial={{
              y: -150,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.6,
            }}
          >
            <h3>
              {" "}
              <PiStudentBold className="stutIcon" /> Bachelor Of Computer
              Application (B.C.A)
            </h3>
            <p>Pratap College Amalner</p>
            <p>
              <SlCalender className="calender" />
              2022-2025
            </p>
          </motion.div>
        </div>

        <div className="timelineItem leftTimeline">
          <motion.div
            initial={{
              x: -100,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
            }}
          >
            <h3>
              {" "}
              <PiStudentBold className="stutIcon" /> Higher Secondary (12th
              Science)
            </h3>
            <p>K.K.D College Gadkhamb</p>
            <p>
              <SlCalender className="calender" />
              2019-2021
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Education;
