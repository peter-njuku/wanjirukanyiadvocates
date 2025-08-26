// app/api/contact/route.js
export async function POST(req) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, matterType, description } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !matterType || !description) {
      return new Response(
        JSON.stringify({ message: "All fields are required" }),
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ message: "Invalid email format" }),
        { status: 400 }
      );
    }

    console.log("New contact form submission:", {
      firstName,
      lastName,
      email,
      matterType,
      description,
      submittedAt: new Date().toISOString(),
    });

    return new Response(
      JSON.stringify({
        message: "Form submitted successfully",
        reference: `REF-${Date.now()}`,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return new Response(
      JSON.stringify({ message: "Internal server error" }),
      { status: 500 }
    );
  }
}

// Handle other methods (e.g. GET)
export function GET() {
  return new Response("Method not allowed", { status: 405 });
}
