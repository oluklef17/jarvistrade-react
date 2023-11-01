import React from "react";
import Navbar from "./Navbar";
import "../styles/style.css";
import { useState } from "react";

function Projects() {
  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  const [budget, setBudget] = useState("");
  const [clientName, setClientName] = useState("");
  const [TG, setTG] = useState("");
  const [Email, setEmail] = useState("");

  const handleTGChange = (e) => {
    setTG(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleBudgetChange = (e) => {
    setBudget(e.target.value);
  };

  const handleDescChange = (e) => {
    setDescription(e.target.value);
  };

  const handlePNameChange = (e) => {
    setProjectName(e.target.value);
  };

  const handleCNameChange = (e) => {
    setClientName(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let tg = {
      token: "5007154718:AAHWEu2vCue-1hPS1iZqbWasSg5fywVvjB0", // Your bot's token that got from @BotFather
      chat_id: "1380098782", // The user's(that you want to send a message) telegram chat id
    };

    const sendMessage = (text) => {
      const url = `https://api.telegram.org/bot${tg.token}/sendMessage?chat_id=${tg.chat_id}&text=${text}`; // The url to request
      const xht = new XMLHttpRequest();
      xht.open("GET", url);
      xht.send();
    };

    const message = `NEW PROJECT ENQUIRY%0D%0A=====================%0D%0AProject name: ${projectName}%0D%0AProject Description: ${description}%0D%0ABudget: ${budget}%0D%0AClient name: ${clientName}%0D%0ATG: @${TG.replace(
      /@/,
      ""
    )}%0D%0AEmail: ${Email}`;

    sendMessage(message);
  };

  return (
    <>
      <Navbar />
      <div className="project-container">
        <form onSubmit={handleSubmit}>
          <fieldset>
            <h1>SEND US DETAILS FOR A CUSTOM PROJECT</h1>
            <div class="form-group">
              <label for="Project-name">Project Name:</label>
              <input
                type="text"
                id="Project-name"
                name="Project-name"
                onChange={handlePNameChange}
                required
              />
            </div>
            <div class="form-group">
              <label for="Project-description">Project Description:</label>
              <textarea
                id="Project-description"
                name="Project-description"
                onChange={handleDescChange}
                required
              ></textarea>
            </div>

            <div class="form-group">
              <label for="Project-price">Budget ($):</label>
              <input
                type="number"
                id="Project-price"
                name="Project-price"
                min="0"
                step="0.5"
                onChange={handleBudgetChange}
                required
              />
            </div>
          </fieldset>
          <fieldset>
            <legend>Client Details</legend>
            <div class="form-group">
              <label for="client-name">Name:</label>
              <input
                type="text"
                id="client-name"
                name="client-name"
                onChange={handleCNameChange}
                required
              />
            </div>
            <div class="form-group">
              <label for="client-TG">Telegram username:</label>
              <input
                type="TG"
                id="client-TG"
                name="client-TG"
                onChange={handleTGChange}
              />
            </div>
            <div class="form-group">
              <label for="client-TG">Email:</label>
              <input
                type="Email"
                id="client-email"
                name="client-email"
                onChange={handleEmailChange}
                required
              />
            </div>
          </fieldset>
          <button type="submit">Submit requirements</button>
        </form>
      </div>
    </>
  );
}

export default Projects;
