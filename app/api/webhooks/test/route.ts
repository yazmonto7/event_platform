export async function POST(request: Request) {
  const payload = await request.json();
  console.log(payload);
  return Response.json({ message: "Received" });
}
