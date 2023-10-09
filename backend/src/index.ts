import { Hono } from 'hono';
import { cors } from 'hono/cors'

/**
 * gabriel - Returns a fun fact about dogs using an API call
 * Returns an error message to the frontend if the API call fails
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

const app = new Hono();
app.use('/people/*', cors());

// Default hello world endpoint
app.get('/', (c) => c.text('Hello, World!'));

// Add your fun facts in this endpoint!
app.get('/people/:person', async (c) => {
  const person: string = c.req.param('person');
  switch (person) {
    case "Gabriel":
      const gabrielFunFact: string = await gabriel();
      return c.text(gabrielFunFact, 200)
    default:
      return c.text(`${person} has not been added to the backend yet!`);
  }
})

console.log("Running a bun server on Port 3100...")

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  port: 3100,
  fetch: app.fetch,
}
