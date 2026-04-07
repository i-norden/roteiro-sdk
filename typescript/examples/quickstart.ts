import { Pipeline, RoteiroClient } from '../src/index';

async function main(): Promise<void> {
  const client = new RoteiroClient({
    baseUrl: 'http://localhost:8080',
    projectId: 42,
  });

  const health = await client.health();
  const bodies = await client.listBodies();

  const result = await new Pipeline(client)
    .buffer(100)
    .simplify(10)
    .execute('roads');

  console.log({ health, bodyCount: Array.isArray((bodies as { bodies?: unknown[] }).bodies) ? (bodies as { bodies: unknown[] }).bodies.length : undefined, result });
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
