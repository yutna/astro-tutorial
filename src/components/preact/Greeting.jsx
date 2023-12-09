import random from "lodash-es/random";
import { useState } from "preact/hooks";

export default function Greeting({ messages }) {
  // Hook
  const [greeting, setGreeting] = useState(messages[0]);

  // Function
  const getRandomMessages = () => messages[random(messages.length - 1)];

  // Event handler
  const handleClick = () => {
    const randomMessage = getRandomMessages();
    setGreeting(randomMessage);
  };

  return (
    <div>
      <h3>{greeting}! Thank you for visiting!</h3>
      <button onClick={handleClick} type="button">
        New Greeting
      </button>
    </div>
  );
}
