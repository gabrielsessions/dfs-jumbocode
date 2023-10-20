import { Hono } from 'hono';
import { cors } from 'hono/cors'

/**
 * gabriel - Returns a fun fact about dogs using an API call
 * Returns an error message to the frontend if the API call fails
 * @returns string - A fun fact about dogs
 */
async function gabriel(): Promise<string> {
  const factRequest = await fetch("https://dog-api.kinduff.com/api/facts");
  if (!factRequest.ok) {
    return "I ran into a problem fetching a fun fact!";
  }
  const factJSON: {
    facts: Array<string>,
    success: boolean
  } = await factRequest.json();

  if (!factJSON || factJSON.facts.length == 0) {
    return "I ran into a problem unpacking a fun fact!";
  }
  return factJSON.facts[0];
}

/**
 * Javier - Returns his favorite icecream using an API call
 * Returns an error message to the frontend if the API call fails
 * @returns string - ice cream
 */
async function Javier(): Promise<string> {
  return "I like vanilla ice cream";
}

/**
 * charlotte - Returns a fun fact about dogs using an API call
 * Returns an error message to the frontend if the API call fails
 * @returns string - A fun fact about dogs
 */
function charlotte(): string {
  return "Charlotte has no fun facts";
}


async function jyoti(): Promise<string> {
  return "I have a blackbelt in taekwondo";
}

async function emma(): Promise<string> {
  return "I like baking loaf breads! (pumpkin bread, lemon poppy seed bread, etc.)"
}

async function matt(): Promise<string> {
  return "I walked to Worcester from Tufts in a day";
}

// App Initialization
const app = new Hono();
app.use('*', cors());

// Default hello world endpoint, handles all "/" GET requests
app.get('/', (c) => c.text('Hello, World!'));

// Add your fun facts in this endpoint!
// This endpoint handles all GET requests with the URL path "/people/{person}"
// This simple GET request returns text to the client
app.get('/people/:person', async (c): Promise<Response> => {
  const person: string = c.req.param('person');
  switch (person) {
    case "Gabriel":
      const gabrielFunFact: string = await gabriel();
      return c.text(gabrielFunFact, 200);
    case "Ryan":
      return c.text("In the summer, Ryan plays xylophone in a funk/fusion band!");
    case "Javier":
      const javierFunFact: string = await Javier();
      return c.text(javierFunFact, 200);
    case "Charlotte":
      const charlotteFunFact: string = charlotte();
      return c.text(charlotteFunFact, 200);
    case "Jyoti":
      const jyotiFunFact: string = await jyoti();
      return c.text(jyotiFunFact, 200);
    case "Emma":
      const emmaFunFact: string = await emma();
      return c.text(emmaFunFact, 200);
    case "Matt":
      const mattFunFact: string = await matt();
      return c.text(mattFunFact, 200);
    default:
      return c.text(`${person} has not been added to the backend yet!`);
  }
})

console.log("Running a bun server on Port 3100...");

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  port: 3100,
  fetch: app.fetch,
}
