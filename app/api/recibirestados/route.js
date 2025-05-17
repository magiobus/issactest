export async function GET() {
  return new Response("holi", {
    status: 200,
    headers: {
      "Content-Type": "text/plain",
    },
  });
}

//post para guardar los datos
export async function POST(request) {
  const { nombre, estado } = await request.json();
  console.log("ay, holi desde el back", nombre, estado);
  return new Response("holi", {
    status: 200,
  });
}
