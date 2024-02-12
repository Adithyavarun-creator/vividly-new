import React from "react";
import "./AboutPage.css";
import { motion } from "framer-motion";
import { FaInfo } from "react-icons/fa";
import { RiExternalLinkFill } from "react-icons/ri";

const AboutPage = () => {
  return (
    <motion.div
      key="page"
      initial={{ x: "20%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "-20%", opacity: 0, transition: { duration: 0.5 } }}
      transition={{ delay: 0, duration: 0.8 }}
      className="about-section"
    >
      <div>
        <h3 className="about-title">About this website</h3>
      </div>
      <div>
        <article className="about-notecontent">
          <span className="flex notetext">
            <FaInfo />
            Note:
          </span>
          I just want to share a small note to you that I have learnt PHP and
          Laravel which is been used by your company as I saw in the
          presentation and word document, In my starting stage of programming I
          have learnt PHP and Laravel but while searching for jobs I was adapted
          to work on technologies with javascript frameworks like React js, Node
          js and Angular js in my previous companies. So I was not able to
          follow the updates of Laravel and PHP. In this case as I had a shorter
          time to complete this website design I have used React js and framer
          motion package for animations and toggling. As I was much practiced
          with React js I just created this application with React js, maybe if
          there would have been extra days to submit I would have gone throught
          some documentations of PHP and Laravel and would have worked on that
          frameworks.
        </article>
      </div>
      <div>
        <span className="about-article">
          This website is implemented using the following techs stated below :-
        </span>
      </div>
      <div className="about-images">
        <div className="about-imagecontent">
          <img
            src="https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2023/04/react-js-and-vite-js-logo-on-night-sky-background.jpg"
            className="about-techimage"
            alt=""
          />
          <p className="about-techname">Vite + React</p>
        </div>

        <div className="about-imagecontent">
          <img
            src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png"
            className="about-techimage"
            alt=""
          />
          <p className="about-techname">CSS</p>
        </div>

        <div className="about-imagecontent">
          <img
            src="https://www.zdnet.com/a/img/resize/cacc504508a31ccfdf6eb91ff199c529b2d3bb7b/2020/01/13/7b52414d-132a-4ef9-b050-0f16e37f433b/npm.png?auto=webp&fit=crop&height=1200&width=1200"
            className="about-techimage"
            alt=""
          />
          <p className="about-techname">NPM</p>
        </div>

        <div className="about-imagecontent">
          <img
            src="https://repository-images.githubusercontent.com/157846876/70574400-9e6a-11e9-8708-22d4bf4c3322"
            className="about-techimage"
            alt=""
          />
          <p className="about-techname">Framer Motion</p>
        </div>
      </div>
      <div>
        <a
          className="project-links"
          target="_blank"
          href="https://vercel.com"
          title="Vercel Link"
        >
          Project deployed on Vercel <RiExternalLinkFill />
        </a>
      </div>
      <div>
        <a
          className="project-links"
          target="_blank"
          href="https://vividly-new.vercel.app"
          title="Live Link"
        >
          Project Live Link <RiExternalLinkFill />
        </a>
      </div>
      <div>
        <a
          className="project-links"
          target="_blank"
          href="https://github.com/Adithyavarun-creator/vividly-new"
          title="Github Repo Link"
        >
          Click here to access project files in Github <RiExternalLinkFill />
        </a>
      </div>
      <div>
        <p className="about-thanks">
          Thanks for accepting my request and giving an opportunity to work on
          the website 😀❤️
        </p>
      </div>
    </motion.div>
  );
};

export default AboutPage;
