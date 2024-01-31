import { createUser } from "@/lib/actions/user.actions";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const payload = await request.json();
  console.log(payload);
  //   const { id, email_addresses, image_url, first_name, last_name, username } =
  //     payload.data;

  //   const user = {
  //     clerkId: id,
  //     email: email_addresses[0].email_address,
  //     username: username!,
  //     firstName: first_name,
  //     lastName: last_name,
  //     photo: image_url,
  //   };

  //   const newUser = await createUser(user);

  //   return Response.json({ user: newUser });
  // }

  const eventType = payload.type;

  if (eventType === "user.created") {
    const { id, email_addresses, image_url, first_name, last_name, username } =
      payload.data;

    const user = {
      clerkId: id,
      email: email_addresses[0].email_address,
      username: username!,
      firstName: first_name,
      lastName: last_name,
      photo: image_url,
    };

    const newUser = await createUser(user);

    return NextResponse.json({ message: "OK", user: newUser });
  }
  return new Response("", { status: 200 });
}
