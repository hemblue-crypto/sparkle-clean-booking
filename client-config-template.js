
const businessConfig = {
  // CLIENT SETTINGS
  businessId: "CLIENT001",

  // Replace with the client's actual n8n webhook URL
  webhookUrl: "REPLACE_WITH_CLIENT_WEBHOOK_URL",

  // BUSINESS BRANDING
  business: {
    name: "Your Business Name",
    tagline: "Your Business Tagline",
    logoText: "YB",
    brandColor: "#0f766e"
  },

  // PROMOTION CONTENT
  promotion: {
    headline: "Your Business Headline",
    description: "Describe your business and services here.",

    benefits: [
      "Professional Service",
      "Flexible Scheduling",
      "Reliable Support",
      "Easy Booking"
    ],

    offer: "Contact us today."
  },

  // FORM SETTINGS
  form: {
    title: "Request a Quote",
    subtitle: "Tell us what you need and we'll get back to you.",
    buttonText: "Submit Request →",

    successTitle: "Request Received!",
    successMessage: "Thank you for contacting us. We'll get back to you shortly.",

    // CLIENT-SPECIFIC FORM FIELDS
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


