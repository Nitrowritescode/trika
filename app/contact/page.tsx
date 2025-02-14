'use client';


import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const contactSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactUsPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    console.log("Form Submitted", data);
  };

  return (
    <div className="bg-background text-foreground py-12 px-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-primary text-center mb-6">Contact Us</h1>
      <p className="text-center mb-8 text-lg">
        Have questions about our insurance services? Fill out the form below and our team will get back to you as soon as possible.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <FaPhone className="text-primary text-2xl" />
            <p className="text-lg">+1 (123) 456-7890</p>
          </div>
          <div className="flex items-center space-x-4">
            <FaEnvelope className="text-primary text-2xl" />
            <p className="text-lg">info@insurancecompany.com</p>
          </div>
          <div className="flex items-center space-x-4">
            <FaMapMarkerAlt className="text-primary text-2xl" />
            <p className="text-lg">123 Insurance Street, Suite 100, City, Country</p>
          </div>
        </div>
        
        {/* Contact Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-foreground">Full Name</label>
            <Input type="text" placeholder="Enter your full name" {...register("fullName")} className="my-2" />
            {errors.fullName?.message && <p className="text-red-500 text-sm">{errors.fullName.message}</p>}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-foreground">Email Address</label>
            <Input type="email" placeholder="Enter your email address" {...register("email")} className="my-2" />
            {errors.email?.message && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-foreground">Phone Number</label>
            <Input type="tel" placeholder="Enter your phone number" {...register("phone")} className="my-2" />
            {errors.phone?.message && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-foreground">Message</label>
            <Textarea placeholder="Write your message here..." {...register("message")} className="my-2" />
            {errors.message?.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
          </div>
          
          <Button type="submit" className="w-full bg-primary text-foreground hover:bg-opacity-80">Send Message</Button>
        </form>
      </div>
    </div>
  );
}
