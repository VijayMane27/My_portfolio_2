import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";

const CommandPrompt = () => {
  const [inputValue, setInputValue] = useState("");
  const [output, setOutput] = useState([]);
  const [commands, setCommands] = useState([]);
  const [lastCommandIndex, setLastCommandIndex] = useState("");
  const router = useRouter();
  const inputRef = useRef(null); // Ref for the input element

  const executeCommand = (command) => {
    let result;
    switch (command.toLowerCase()) {
      case "help":
        result = (
          <div style={{ fontFamily: "Consolas, monospace" }}>
            List of available commands:
            <br />
            myself
            <br />
            profile
            <br />
            education
            <br />
            projects
            <br />
            technicalSkills
            <br />
            softSkills
            <br />
            languages
            <br />
            resume
            <br />
            contact
          </div>
        );
        break;
      case "myself":
        result = (
          <div style={{ fontFamily: "Consolas, monospace" }}>
            Name: Vijay Prakash Mane
            <br />
            Email: vmane2873@gmail.com
            <br />
            Address: Mulund (East), Mumbai - 400081
            <br />
            Mobile No: 8425993294
            <br />
            Date of Birth: June 27th, 2002
          </div>
        );
        break;
      case "profile":
        result = (
          <div style={{ fontFamily: "Consolas, monospace" }}>
            Full Stack Developer with a strong foundation in web development
            technologies. Eager to apply practical skills in building modern and
            scalable web applications. Proficient in utilizing the Next.js and
            React framework for front-end development, Node.js for server-side
            logic, and TypeORM and PostgreSQL for efficient database management.
          </div>
        );
        break;
      case "education":
        result = (
          <div style={{ fontFamily: "Consolas, monospace" }}>
            Bachelor&apos;s Degree in IT
            <br />
            V. G. Vaze College of Arts, Commerce, and Science
            <br />
            2021 – 2023 | Mulund, India
            <br />
            CGPA =9.18
            <br />
            HSC
            <br />
            B. N. Bandodkar College of Science
            <br />
            2020 – 2021 | Thane, India
            <br />
            HSC Scored 66.55%
            <br />
            SSC
            <br />
            Sau.N.Y.Dode Vidyalaya
            <br />
            2018 – 2019 | Mulund, India
            <br />
            SSC Scored 80.20%
          </div>
        );
        break;
      case "projects":
        result = (
          <div>
            <ul>
              <li style={{ fontFamily: "Consolas, monospace" }}>
                <strong style={{ fontFamily: "Consolas, monospace" }}>
                  Title:
                </strong>{" "}
                Team-11 Admin Panel
                <br />
                <strong style={{ fontFamily: "Consolas, monospace" }}>
                  Description:
                </strong>{" "}
                Led the development of Team 11 app&apos;s admin pages, prize
                distribution system, and authentication model using Next.js,
                HTML, and CSS. Implemented robust solutions to enhance user
                experience and ensure secure authentication, contributing to the
                app&apos;s overall functionality and success.
                <br />
                <strong style={{ fontFamily: "Consolas, monospace" }}>
                  GitHub URL:
                </strong>{" "}
                <a
                  style={{ fontFamily: "Consolas, monospace" }}
                  href="https://github.com/VijayMane27/team11_dev"
                >
                  https://github.com/VijayMane27/team11_dev
                </a>
              </li>
              <br />
              <li style={{ fontFamily: "Consolas, monospace" }}>
                <strong style={{ fontFamily: "Consolas, monospace" }}>
                  Title:
                </strong>{" "}
                Teacher&apos;s Diary
                <br />
                <strong style={{ fontFamily: "Consolas, monospace" }}>
                  Description:
                </strong>{" "}
                Developed a comprehensive Teacher&apos;s Diary app using React
                Native for a seamless mobile experience. Implemented features
                allowing teachers to save lecture notes, manage attendance
                records, and download the data.
                <br />
                <strong style={{ fontFamily: "Consolas, monospace" }}>
                  GitHub URL:
                </strong>{" "}
                <a
                  style={{ fontFamily: "Consolas, monospace" }}
                  href="https://github.com/VijayMane27/diary"
                >
                  https://github.com/VijayMane27/diary
                </a>
              </li>
              <br />
              <li style={{ fontFamily: "Consolas, monospace" }}>
                <strong style={{ fontFamily: "Consolas, monospace" }}>
                  Title:
                </strong>{" "}
                Stock Prediction Using Streamlit
                <br />
                <strong style={{ fontFamily: "Consolas, monospace" }}>
                  Description:
                </strong>{" "}
                Developing a stock prediction application using Streamlit to
                visualize and forecast stock prices based on historical data and
                machine learning models. The project aims to provide users with
                insights and predictions to make informed investment decisions.
                <br />
                <strong style={{ fontFamily: "Consolas, monospace" }}>
                  GitHub URL:
                </strong>{" "}
                <a
                  style={{ fontFamily: "Consolas, monospace" }}
                  href="https://github.com/VijayMane27/stocksforcast"
                >
                  https://github.com/VijayMane27/stocksforcast
                </a>
              </li>
              <li style={{ fontFamily: "Consolas, monospace" }}>
                <br />
                <strong style={{ fontFamily: "Consolas, monospace" }}>
                  Title:
                </strong>{" "}
                Cricket Player Photo Scraping
                <br />
                <strong style={{ fontFamily: "Consolas, monospace" }}>
                  Description:
                </strong>{" "}
                Creating a Python-based photo scraping tool to collect and
                organize cricketer&apos;s photos from various sources. The
                project simplifies the process of gathering images for cricket
                enthusiasts and analysts.
                <br />
                <strong style={{ fontFamily: "Consolas, monospace" }}>
                  GitHub URL:
                </strong>{" "}
                <a
                  style={{ fontFamily: "Consolas, monospace" }}
                  href="https://github.com/VijayMane27/PlayerPhotoScrapping"
                >
                  https://github.com/VijayMane27/PlayerPhotoScrapping
                </a>
              </li>
            </ul>
          </div>
        );
        break;
      case "technicalskills":
        result = (
          <div style={{ fontFamily: "Consolas, monospace" }}>
            JavaScript
            <br />
            Node.js
            <br />
            Next.js
            <br />
            MongoDB
            <br />
            Python
            <br />
            PostgreSQL
            <br />
            TypeORM
            <br />
            Git and GitHub
          </div>
        );
        break;
      case "softskills":
        result = (
          <div style={{ fontFamily: "Consolas, monospace" }}>
            Communication Skills
            <br />
            Teamwork
            <br />
            Adaptability
            <br />
            Time Management
            <br />
            Attention to Detail
          </div>
        );
        break;
      case "languages":
        result = (
          <div style={{ fontFamily: "Consolas, monospace" }}>
            English
            <br />
            Hindi
            <br />
            Marathi
          </div>
        );
        break;
      case "resume":
        // Simulate downloading the resume file
        const resumeURL = "/Resume/Vijay-Prakash-Mane.pdf";
        const link = document.createElement("a");
        link.href = resumeURL;
        link.setAttribute("download", "Vijay-Prakash-Mane-Resume.pdf");
        link.click();
        result = "Downloading Downloaded Chek In Your";
        break;
      case "contact":
        // Navigate to the contact page
        router.push("/ContactForm/contactForm");
        return;
      case "clear":
      case "cls":
        setOutput([]);
        setCommands([]);
        setLastCommandIndex(0);
        return;
      default:
        result = (
          <div style={{ fontFamily: "Consolas, monospace" }}>
            Unknown command: {command}
          </div>
        );
    }
    setOutput([...output, { command, result }]);
    setCommands([...commands, command]);
    setLastCommandIndex(0);
  };

  useEffect(() => {
    scrollToInput();
  }, [output]); // Scroll to input whenever output changes

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleEnterPress = (e) => {
    if (e.key === "Enter") {
      executeCommand(inputValue);
      setInputValue("");
    } else if (e.key === "ArrowUp" || e.key === "ArrowDown") {
      handleArrowNavigation(e);
    }
  };

  const scrollToInput = () => {
    if (inputRef.current) {
      inputRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  };

  const handleArrowNavigation = (e) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      const index = lastCommandIndex + 1;
      if (index <= commands.length) {
        setLastCommandIndex(index);
        setInputValue(commands[commands.length - index]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const index = lastCommandIndex - 1;
      if (index >= 0) {
        setLastCommandIndex(index);
        setInputValue(index === 0 ? "" : commands[commands.length - index]);
      }
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "700px",
        height: "500px",
        backgroundColor: "#000",
        color: "#fff",
        border: "2px solid #7d7d7d",
        borderRadius: "5px",
        fontFamily: "Consolas, monospace",
        overflowY: "scroll",
        overflowX: "hidden",
        padding: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "10px",
          borderBottom: "2px solid #7d7d7d",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "10px",
              height: "10px",
              backgroundColor: "#ff5f56",
              borderRadius: "50%",
              marginRight: "5px",
            }}
          ></div>
          <div
            style={{
              width: "10px",
              height: "10px",
              backgroundColor: "#ffbd2e",
              borderRadius: "50%",
              marginRight: "5px",
            }}
          ></div>
          <div
            style={{
              width: "10px",
              height: "10px",
              backgroundColor: "#27c93f",
              borderRadius: "50%",
            }}
          ></div>
        </div>
        <div>
          <span style={{ color: "#00ff00", marginRight: "5px" }}>
            C:\Users\Guest
          </span>
          <span>_</span>
        </div>
        <div>
          <span
            style={{ color: "#ff0000", cursor: "pointer" }}
            onClick={() => window.close()}
          >
            X
          </span>
        </div>
      </div>

      <p style={{ marginTop: "0", fontFamily: "Consolas, monospace" }}>
        @Welcome to my portfolio
      </p>
      <p style={{ fontFamily: "Consolas, monospace" }}>
        Enter &apos;help&apos; to get a list of commands.
      </p>

      <div>
        {output.map((item, index) => (
          <div key={index}>
            <span
              className="prompt"
              style={{ fontFamily: "Consolas, monospace" }}
            >
              {"C:/user/commands>"}
            </span>
            <span
              className="command"
              style={{ fontFamily: "Consolas, monospace" }}
            >
              {item.command}
            </span>
            <br />
            <span
              className="output"
              style={{ fontFamily: "Consolas, monospace" }}
            >
              {item.result}
            </span>
          </div>
        ))}
      </div>
      <div
        className="input h-100 mr-2"
        style={{
          marginTop: "10px",
          display: "flex",
          alignItems: "center", // Align items vertically in the center
        }}
      >
        <span className="prompt" style={{ fontFamily: "Consolas, monospace" }}>
          {"C:/user/commands>"}
        </span>
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleEnterPress}
          style={{
            border: "none",
            outline: "none",
            fontSize: "16px",
            padding: "5px",
            marginLeft: "5px",
            width: "calc(100% - 25px)",
            fontFamily: "Consolas, monospace",
            backgroundColor: "#000",
            color: "#fff",
            display: "inline",
          }}
        />
      </div>
    </div>
  );
};

export default CommandPrompt;
