const businessConfig = {
  webhookUrl: "https://hemagencynmn.app.n8n.cloud/webhook/dfa1f894-0f2a-4231-9df9-8c0d01acce6e",

  businessId: "CLEAN001",

  business: {
    name: "Sparkle Clean",
    tagline: "Professional Cleaning Services",
    logoText: "SC",
    brandColor: "#0f766e"
  },

  promotion: {
    headline: "A Cleaner Space Starts Here.",
    description:
      "Reliable and professional cleaning services for homes, offices and commercial spaces.",

    benefits: [
      "Professional Cleaning Team",
      "Flexible Scheduling",
      "Reliable Service",
      "Easy Booking"
    ],

    offer: "Book your cleaning service today."
  },

  form: {
    title: "Request a Quote",
    subtitle: "Tell us what you need and we'll get back to you.",
    buttonText:"Press to Book →",

   successTitle: "Booking Confirmed! ✓",
successMessage:
  "Thank you for choosing us. Your cleaning service has been booked successfully. We’ll see you soon!",

    fields: [

      {
        id: "name",
        label: "Full Name",
        type: "text",
        placeholder: "Enter your full name",
        required: true
      },

      {
        id: "phone",
        label: "Phone Number",
        type: "tel",
        placeholder: "Phone number",
        required: true
      },

     {
       id: "email",
       label: "Email",
       type: "email",
       placeholder: "Email address",
       required: false,
       visible: true
     },

      {
        id: "service",
        label: "Service Required",
        type: "select",
        placeholder: "Select a service",
        required: true,

        options: [
          "Home Cleaning",
          "Deep Cleaning",
          "Sofa Cleaning",
          "Office Cleaning"
        ]
      },

      {
        id: "date",
        label: "Preferred Date",
        type: "date",
        required: true
      },

      {
        id: "time",
        label: "Preferred Time",
        type: "select",
        placeholder: "Select time",
        required: true,

        options: [
          "Morning",
          "Afternoon",
          "Evening"
        ]
      },

      {
        id: "address",
        label: "Service Address",
        type: "text",
        placeholder: "Enter service address",
        required: true
      },

      {
        id: "message",
        label: "Additional Requirements",
        type: "textarea",
        placeholder: "Anything else we should know?",
        required: false
      }

    ]
  }
};
