import React from "react";
import "./Pricing.css";
import Button from "../Button/Button";
import { MdEuroSymbol, MdDone } from "react-icons/md";
import { motion } from "framer-motion";
import Vividlytext from "../../assets/vividlytext.png";

const Pricing = () => {
  return (
    <div className="pricing-container">
      <motion.div
        initial={{
          opacity: 0,
          y: 0,
        }}
        whileInView={{
          opacity: 1,
          y: -20,
          transition: {
            duration: 1,
          },
        }}
        viewport={{ once: true }}
      >
        <h3 className="pricing-title">
          Check our <span className="boldtext">Pricing Plans</span>
        </h3>
      </motion.div>

      <div className="pricing-box-container">
        <motion.div
          initial={{
            opacity: 0,
            x: -50,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 1,
            },
          }}
          viewport={{ once: true }}
          className="pricing-box"
        >
          <div>
            <img src={Vividlytext} className="vivdlylogo" alt="" />
          </div>
          <div>
            <h2 className="pricing-plan">Plan A</h2>
          </div>
          <div>
            <h4 className="pricing-scheme">
              <span className="boldtext">Basic</span> Scheme
            </h4>
          </div>
          <div>
            <span className="pricing-plandetails">Plan includes</span>
          </div>
          <div>
            <ul className="pricing-order">
              <li className="pricing-list flex">
                <MdDone />4 Trials
              </li>
              <li className="pricing-list flex">
                <MdDone />
                Membership
              </li>
              <li className="pricing-list flex">
                <MdDone />
                24/7 Support
              </li>
              <li className="pricing-list flex">
                <MdDone />
                Cancel at anytime
              </li>
              <li className="pricing-list flex">
                <MdDone />
                No Watermarks
              </li>
              <li className="pricing-list flex">
                <MdDone />
                Email attachments
              </li>
              <li className="pricing-list flex">
                <MdDone />
                Lifetime Access
              </li>
            </ul>
          </div>

          <div>
            <Button text="Pay with EUR100 / year" icon={<MdEuroSymbol />} />
          </div>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            x: -50,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 1,
            },
          }}
          viewport={{ once: true }}
          className="pricing-box"
        >
          <div>
            <img src={Vividlytext} className="vivdlylogo" alt="" />
          </div>
          <div>
            <h2 className="pricing-plan">Plan B</h2>
          </div>
          <div>
            <h4 className="pricing-scheme">
              <span className="boldtext">Standard</span> Scheme
            </h4>
          </div>
          <div>
            <span className="pricing-plandetails">Plan includes</span>
          </div>
          <div>
            <ul className="pricing-order">
              <li className="pricing-list flex">
                <MdDone />4 Trials
              </li>
              <li className="pricing-list flex">
                <MdDone />
                Membership
              </li>
              <li className="pricing-list flex">
                <MdDone />
                24/7 Support
              </li>
              <li className="pricing-list flex">
                <MdDone />
                Cancel at anytime
              </li>
              <li className="pricing-list flex">
                <MdDone />
                No Watermarks
              </li>
              <li className="pricing-list flex">
                <MdDone />
                Email attachments
              </li>
              <li className="pricing-list flex">
                <MdDone />
                Lifetime Access
              </li>
            </ul>
          </div>
          <div>
            <Button text="Pay with EUR100 / year" icon={<MdEuroSymbol />} />
          </div>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            x: -50,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 1,
            },
          }}
          viewport={{ once: true }}
          className="pricing-box"
        >
          <div>
            <img src={Vividlytext} className="vivdlylogo" alt="" />
          </div>
          <div>
            <h2 className="pricing-plan">Plan C</h2>
          </div>
          <div>
            <h4 className="pricing-scheme">
              <span className="boldtext">Advanced</span> Scheme
            </h4>
          </div>
          <div>
            <span className="pricing-plandetails">Plan includes</span>
          </div>
          <div>
            <ul className="pricing-order">
              <li className="pricing-list flex">
                <MdDone />4 Trials
              </li>
              <li className="pricing-list flex">
                <MdDone />
                Membership
              </li>
              <li className="pricing-list flex">
                <MdDone />
                24/7 Support
              </li>
              <li className="pricing-list flex">
                <MdDone />
                Cancel at anytime
              </li>
              <li className="pricing-list flex">
                <MdDone />
                No Watermarks
              </li>
              <li className="pricing-list flex">
                <MdDone />
                Email attachments
              </li>
              <li className="pricing-list flex">
                <MdDone />
                Lifetime Access
              </li>
            </ul>
          </div>
          <div>
            <Button text="Pay with EUR100 / year" icon={<MdEuroSymbol />} />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Pricing;
