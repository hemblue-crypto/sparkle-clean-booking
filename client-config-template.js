
const businessConfig = {
  // Client identification
  businessId: "CLIENT001",

  // Webhook URL: replace before using for a real client
  webhookUrl: "REPLACE_WITH_CLIENT_WEBHOOK_URL",

  // Business branding
  business: {
    name: "Your Business Name",
    tagline: "Your Business Tagline",
    logoText: "YB",
    brandColor: "#0f766e"
  },

  // Promotion content
  promotion: {
    headline: "Your Business Headline",
    description: "Describe your services here.",

    benefits: [
      "Benefit One",
      "Benefit Two",
      "Benefit Three"
    ],

    offer: "Contact us today."
  },

  // Form settings
  form: {
    title: "Request a Quote",
    subtitle: "Tell us what you need.",
    buttonText: "Submit Request",

    successTitle: "Request Received!",
    successMessage: "Thank you for contacting us.",

    // Add client-specific form fields here
    fields: []
  }
};
