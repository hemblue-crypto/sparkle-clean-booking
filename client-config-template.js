const clientConfigTemplate = {
  businessId: "CLIENT001",

  business: {
    name: "Your Business Name",
    tagline: "Your Business Tagline",
    logoText: "YB",
    brandColor: "#0f766e"
  },

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

  form: {
    title: "Request a Quote",
    subtitle: "Tell us what you need.",
    buttonText: "Submit Request",

    successTitle: "Request Received!",
    successMessage: "Thank you for contacting us.",

    fields: []
  },

  webhookUrl: "REPLACE_WITH_CLIENT_WEBHOOK_URL"
};
