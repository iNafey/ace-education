"use client"

// For ECMAScript (ESM)
//import MailerLite from '@mailerlite/mailerlite-nodejs';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from 'react-hook-form';
import { z } from "zod";
import axios from "axios";

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useState } from 'react';
import { Toaster } from 'sonner';
import { toast } from "sonner";
import { LoadingSpinner } from './LoadingSpinner';


// const mailerlite = new MailerLite({
//   api_key: process.env.MAILERLITE_API_KEY || ""
// });

const formSchema = z.object({
    email: z.string().email({message: "Please enter a valid email"}),
    phone: z.string()
      .regex(/^(\+44\s?7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?\d{3}$/, {
        message: "Invalid UK mobile number"
      })
      .optional()
      .or(z.literal(""))
  })

export default function WaitlistCard() {

    const [status, setStatus] = useState<
    "success" | "error" | "loading" | "idle"
    >("idle");
    const [responseMsg, setResponseMsg] = useState<string>("");

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            phone: ""
        }
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        //console.log("Form submitted")
        //console.log(values)
        setStatus("loading");

        try {
            console.log("API Writes: ",values);
            const response = await axios.post("/api/subscribe-waitlist", values);

            setStatus("success");
            setResponseMsg(response.data.message);
            toast(response.data.message);
            form.reset(); // ✅ Reset form after successful submission

            toast.success(response.data.message);

        } catch (error) {
            if (axios.isAxiosError(error)) {
                setStatus("error");
                setResponseMsg(error.response?.data?.error || "An error occurred. Try again.");
                toast.error(error.response?.data?.error || "An error occurred. Try again.");
                //console.log(error.response?.data?.error);
              }
        }
            
        console.log("Response Message: ", responseMsg);
    }


    return (
        <div className="bg-white rounded-lg p-8 shadow-sm border border-blue-100 hover:border-blue-200 transition-all max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Join Our Waitlist</h2>
            {/* <form className="space-y-4">
            
            <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg bg-white border border-blue-100 focus:outline-none focus:border-blue-200"
            />

            <input
                type="phone"
                placeholder="Enter your UK mobile number"
                className="w-full px-4 py-3 rounded-lg bg-white border border-blue-100 focus:outline-none focus:border-blue-200"
            />
            <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-pastel-blue hover:bg-pastel-blue/90 hover:scale-105 hover:shadow-lg transition-all duration-200"
            >
                Sign Up
            </button>
            </form> */}
            <p className="text-gray-500 mb-6">We&apos;ll contact you to schedule your first session.</p>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel className="text-gray-900">Email <span className="text-red-500">*</span></FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter your email" {...field} />
                                </FormControl>
                                <FormDescription className="text-gray-500">Primary method of contact - make sure to check your junk/spam folder</FormDescription>
                                <FormMessage className="text-red-500" />
                            </FormItem>
                        )} 
                    />
                    <FormField
                        control={form.control}
                        name="phone" 
                        render={({field}) => (
                            <FormItem>
                                <FormLabel className="text-gray-900">Phone <span className="text-gray-400">(Optional)</span></FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter your UK mobile number" {...field} />
                                </FormControl>
                                <FormDescription className="text-gray-500">Advised for faster communication</FormDescription>
                                <FormMessage className="text-red-500" />
                            </FormItem>
                        )}
                    />
                    {status === "loading" ? (
                        <div className="flex items-center justify-center">
                            <LoadingSpinner className="w-4 h-4 mr-2" />
                            <span>Submitting...</span>
                        </div>
                    ) : (
                        <Button type="submit" className="w-full text-white bg-pastel-blue hover:bg-pastel-blue/90 hover:scale-105 hover:shadow-lg transition-all duration-200">
                            Sign Up
                        </Button>
                    )}
                </form>
            </Form>

            <div className="server-message pt-4 text-center">
                {status === "success" && (
                    <p className="text-green-600">{responseMsg}</p>
                )}
                {status === "error" && (
                    <p className="text-orange-600">{responseMsg}</p>
                )}
                <Toaster />

                
            </div>
        </div>
    )
}
