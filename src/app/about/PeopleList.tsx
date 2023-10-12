"use client"

import { useEffect, useState } from "react";
import Card from "@/components/Card";

/**
 * PeopleList - A Card (box) that contains a list of the people on our team
 * If you run the backend server, you can fetch fun facts by clicking on some of the names.
 * @constructor
 */
export default function PeopleList() {
  const [funFact, setFunFact] = useState("");

  /**
   * getFunFact - Fetches a specific person's fun fact from the backend server
   * @param person - Name of the person from the developer list. It must match a person defined in the switch
   * statement on the backend.
   */
  async function getFunFact(person: string): Promise<void> {
    setFunFact("Loading Fun Fact...");
    try {
      const funFactRequest = await fetch("http://localhost:3100/people/" + person);

      const funFact = await funFactRequest.text();
      setFunFact(`${person}'s Fun Fact: ${funFact}`);
    }
    catch (e) {
      setFunFact(`Error fetching ${person}'s fun fact. Is the backend server up?`)
    }

  }

  // Checks if a local backend server is running
  useEffect(() => {
    async function checkIfBackendIsUp() {
      try {
        await fetch("http://localhost:3100");
        setFunFact("Backend server is running: Click on a name to get a fun fact!")
      }
      catch (e) {
        setFunFact("Backend server is not running. Please run the backend server locally to view some fun facts!")
      }

    }
    checkIfBackendIsUp();
  }, []);

  return (
    <Card
      title={"The Team"}
      body={
        <>
          <div className="md:grid md:grid-cols-2">
            <div>
              <ul className="list-disc ml-6 -mt-1">
                <li className="list-item w-fit text-blue-500 hover:underline cursor-pointer"
                  onClick={() => getFunFact("Jyoti")}>
                    Project Manager: Jyoti Bhardwaj</li>

                {/* A possible way to implement a clickable name */}
                <li
                  className="list-item w-fit text-blue-500 hover:underline cursor-pointer"
                  onClick={() => getFunFact("Gabriel")}
                >
                  Tech Lead: Gabriel Sessions
                </li>

                <li className="list-item">Designer: Andy Xu</li>

                {/* Developers: Add your names here! */}
                <li className="list-item w-fit text-blue-500 hover:underline cursor-pointer"
                  onClick={() => getFunFact("Javier")}> Developer: Javier Friedman</li>
                <li className="list-item">Developer:</li>
                <li className="list-item">Developer: Charlotte Versavel</li>
                <li className="list-item w-fit text-blue-500 hover:underline cursor-pointer"
                  onClick={() => getFunFact("Emma")}
                >
                  Developer: Emma Paterson
                </li>
              </ul>
            </div>
            <div>
              <ul className="list-disc ml-6">

                {/* Developers: Add your names here! */}
                <li
                  className="list-item w-fit text-blue-500 hover:underline cursor-pointer"
                  onClick={() => getFunFact("Ryan")}
                >
                  Developer: Ryan McClennen
                </li>
                <li className="list-item">Developer: John Cha</li>
                <li className="list-item">Developer:</li>
                <li className="list-item">Developer:</li>
                <li className="list-item">Developer:</li>
                <li className="list-item">Developer: Shannon Tang</li>

              </ul>
            </div>
          </div>
          <p className={"mt-4"}>{funFact ? funFact : "Checking backend server status..."}</p>
        </>
      }
    />
  )
}
