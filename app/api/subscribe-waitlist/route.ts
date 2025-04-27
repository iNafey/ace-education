import MailerLite from "@mailerlite/mailerlite-nodejs";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

// Define response data type
type Data = { message?: string; error?: string; };

// Email validation schema
const EmailSchema = z
  .string()
  .email({ message: "Please enter a valid email address" });

// Phone validation schema
const PhoneSchema = z
  .string()
  .regex(/^(\+44\s?7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?\d{3}$/, {
    message: "Please enter a valid UK mobile number"
  });

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
  } catch (error) {
    console.error("Error in POST handler:", error);
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors[0].message }, { status: 400 });
    }
    return NextResponse.json({ 
      error: "An error occurred while processing your request",
      details: error instanceof Error ? error.message : "Unknown error"
    }, { status: 500 });
  }
}
