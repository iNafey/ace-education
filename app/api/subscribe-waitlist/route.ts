import MailerLite from "@mailerlite/mailerlite-nodejs";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";


// Define request schema
const RequestSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }), 
  phone: z.string()
});

// Define API route handler
export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json();
    const { email, phone } = RequestSchema.parse(body);
    console.log("Parsed email:", email, "phone:", phone);

    // Initialize MailerLite client
    if (!process.env.MAILERLITE_API_CRUD_TOKEN) {
      console.error("MAILERLITE_API_CRUD_TOKEN is not set");
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
    }

    const mailerlite = new MailerLite({
      api_key: process.env.MAILERLITE_API_CRUD_TOKEN
    });

    try {
      // Check if subscriber exists
      await mailerlite.subscribers.find(email);
      return NextResponse.json({ error: "You are already subscribed to the waitlist" }, { status: 400 });
    } catch (error) {
      console.error("Subscriber not found, creating new one:", error);
      // If subscriber doesn't exist, create new subscriber
      const params = {
        email: email,
        fields: {
          phone: phone
        },
        groups: ["152833421267175308"],
      };

      await mailerlite.subscribers.createOrUpdate(params);
      return NextResponse.json({ message: "You have been added to the waitlist" }, { status: 200 });
    }
  } catch (err) {
     console.error("Error in POST handler:", err);
    // if (error instanceof z.ZodError) {
    //   return NextResponse.json({ error: error.errors[0].message }, { status: 400 });
    // }
    return NextResponse.json({ 
      error: "An error occurred while processing your request",
      details: err instanceof Error ? err.message : "Unknown error"
    }, { status: 500 });
  }
}
