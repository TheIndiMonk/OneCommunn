import { Builder } from "@builder.io/react";
import { Hero } from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { Card } from "./components/Card/Card";
import { LocationCard } from "./components/Card/Location/LocationCard";
import { Form } from "./components/Form/Form";
import { MapCard } from "./components/Card/Map/MapCard";
import { FeaturedCard } from "./components/Card/FeaturedCard/FeaturedCard";
import TherapistGrid from "./components/Card/TherapistGrid/TherapistGrid";
import { Questionnaire } from "./Pages/FAQ/Questioner/Questionnaire";
import { ImageCard } from "./components/Card/ImageCard/ImageCard";
import { Logos } from "./components/LogosContainer/Logos";
import { TestimonialSection } from "./components/TestimonialCarousel/Testimonial";
import { AboutSection } from "./components/AboutSection/AboutSection";
import { CheckSchedule } from "./components/CheckSchedule/CheckSchedule";

// Header and Footer
Builder.registerComponent(Header, {
  name: "Header",
  inputs: [
    {
      name: "logo",
      type: "object",
      subFields: [
        {
          name: "src",
          type: "file",
          required: true,
          helperText: "Logo image source URL",
        },
        {
          name: "alt",
          type: "string",
          required: true,
          helperText: "Alternative text for the logo",
        },
        {
          name: "width",
          type: "number",
          required: true,
          helperText: "Logo width",
        },
        {
          name: "height",
          type: "number",
          required: true,
          helperText: "Logo height",
        },
      ],
    },
    {
      name: "links",
      type: "list",
      subFields: [
        {
          name: "label",
          type: "string",
          required: true,
          helperText: "Label for the link",
        },
        {
          name: "url",
          type: "string",
          required: true,
          helperText: "URL for the link",
        },
        {
          name: "subLinks",
          type: "list",
          subFields: [
            {
              name: "label",
              type: "string",
              required: true,
              helperText: "Label for the sublink",
            },
            {
              name: "url",
              type: "string",
              required: true,
              helperText: "URL for the sublink",
            },
          ],
          helperText: "Optional dropdown sublinks for this link",
        },
      ],
    },
    {
      name: "buttons",
      type: "list",
      subFields: [
        {
          name: "label",
          type: "string",
          required: true,
          helperText: "Label for the button",
        },
        {
          name: "url",
          type: "string",
          required: true,
          helperText: "URL for the button",
        },
      ],
    },
  ],
});

Builder.registerComponent(Footer, {
  name: "Footer",
  inputs: [
    {
      name: "newsletterPlaceholder",
      type: "string",
      defaultValue: "email here",
      friendlyName: "Newsletter Placeholder",
    },
    {
      name: "footer-logo",
      type: "file",
      friendlyName: "Footer Logo",
    },
    {
      name: "contactInfo",
      type: "object",
      subFields: [
        { name: "address", type: "string" },
        { name: "phone1", type: "string" },
        { name: "phone2", type: "string" },
        { name: "email", type: "string" },
      ],
      friendlyName: "Contact Information",
    },
    {
      name: "sections",
      type: "list",
      subFields: [
        { name: "title", type: "string" },
        {
          name: "links",
          type: "list",
          subFields: [
            { name: "label", type: "string" },
            { name: "url", type: "string" },
            { name: "external", type: "boolean", defaultValue: false },
          ],
        },
      ],
      friendlyName: "Sections",
    },
    {
      name: "socialLinks",
      type: "list",
      subFields: [
        { name: "platform", type: "string" },
        { name: "url", type: "string" },
      ],
      friendlyName: "Social Links",
    },
    {
      name: "copyrightText",
      type: "string",
      friendlyName: "Copyright Text",
    },
    {
      name: "legalLinks",
      type: "list",
      subFields: [
        { name: "label", type: "string" },
        { name: "url", type: "string" },
      ],
      friendlyName: "Legal Links",
    },
    {
      name: "backgroundColor",
      type: "color",
      defaultValue: "#D0B191",
      friendlyName: "Background Color",
    },
    {
      name: "textColor",
      type: "color",
      defaultValue: "#27282C",
      friendlyName: "Text Color",
    },
    {
      name: "accentColor",
      type: "color",
      defaultValue: "#27282C",
      friendlyName: "Accent Color",
    },
  ],
});

// User Components
Builder.registerComponent(Hero, {
  name: "Hero",
  inputs: [
    {
      name: "title",
      type: "string",
      required: true,
      defaultValue: "Welcome to Our Site",
      friendlyName: "Hero Title",
    },
    {
      name: "breadcrumb",
      type: "string",
      required: false,
      defaultValue: "Home • Home",
      friendlyName: "Breadcrumb Text",
    },
  ],
});

Builder.registerComponent(Card, {
  name: "Card", // The name of the component in Builder.io
  inputs: [
    {
      name: "title",
      type: "string",
      required: true, // Set to true if this field is required
    },
    {
      name: "address",
      type: "string",
      required: false,
    },
    {
      name: "phone1",
      type: "string",
      required: false,
    },
    {
      name: "phone2",
      type: "string",
      required: false,
    },
    {
      name: "email",
      type: "string",
      required: false,
    },
    {
      name: "image",
      type: "file",
      required: false,
    },
    {
      name: "width",
      type: "string",
      required: false,
      defaultValue: "auto", // Default width
    },
    {
      name: "height",
      type: "string",
      required: false,
      defaultValue: "auto", // Default height
    },
  ],
});

Builder.registerComponent(LocationCard, {
  name: "LocationCard", // The name of the component in Builder.io
  inputs: [
    {
      name: "contactInfo",
      type: "list", // This allows for an array of objects
      // Define the structure of the items in the list
      subFields: [
        {
          name: "title",
          type: "string",
          required: true,
        },
        {
          name: "address",
          type: "string",
          required: true,
        },
        {
          name: "phone1",
          type: "string",
          required: false,
        },
        {
          name: "phone2",
          type: "string",
          required: false,
        },
        {
          name: "email",
          type: "string",
          required: false,
        },
      ],
    },
    {
      name: "onLocationSelect",
      type: "string", // You might want to define how this is handled
      required: false,
    },
  ],
});

Builder.registerComponent(MapCard, {
  name: "MapCard", // The name of the component in Builder.io
  inputs: [
    {
      name: "location",
      type: "object",
      required: false,
      subFields: [
        {
          name: "title",
          type: "string",
          required: true,
        },
        {
          name: "address",
          type: "string",
          required: true,
        },
      ],
    },
  ],
});

Builder.registerComponent(ImageCard, {
  name: "ImageCard",
  inputs: [
    {
      name: "src",
      type: "file",
      defaultValue: "https://placehold.co/300x300",
      required: true,
    },
    {
      name: "alt",
      type: "string",
      defaultValue: "Placeholder image",
      required: true,
    },
    {
      name: "height",
      type: "string",
      defaultValue: "300px",
    },
    {
      name: "width",
      type: "string",
      defaultValue: "100%",
    },
  ],
});

Builder.registerComponent(FeaturedCard, {
  name: "FeaturedCard",
  inputs: [
    {
      name: "name",
      type: "string",
      defaultValue: "Therapist Name",
      required: true,
    },
    {
      name: "role",
      type: "string",
      defaultValue: "Role (e.g., Yoga Instructor)",
    },
    {
      name: "description",
      type: "string",
      defaultValue: "Therapist description",
    },
    {
      name: "image",
      type: "file",
      allowedFileTypes: ["jpeg", "jpg", "png", "svg"],
      defaultValue: "https://placehold.co/150x150",
      required: true,
    },
    {
      name: "socialLinks",
      type: "object",
      subFields: [
        { name: "fb", type: "string", defaultValue: "FB" },
        { name: "tw", type: "string", defaultValue: "TW" },
        { name: "yu", type: "string", defaultValue: "YU" },
        { name: "in", type: "string", defaultValue: "IN" },
      ],
    },
  ],
});

// Form
Builder.registerComponent(Form, {
  name: "ContactForm", // The name of the component in Builder.io
  inputs: [
    {
      name: "title",
      type: "string",
      required: true,
    },
    {
      name: "formDescription",
      type: "string",
      required: false,
    },
    {
      name: "fields",
      type: "list", // Allows for an array of objects
      subFields: [
        {
          name: "name",
          type: "string",
          required: true,
        },
        {
          name: "type",
          type: "string",
          required: true,
          enum: ["text", "email", "tel", "textarea"], // Allow textarea for message box
        },
        {
          name: "placeholder",
          type: "string",
          required: false,
        },
      ],
    },
    {
      name: "showMessageBox",
      type: "boolean",
      required: false,
      defaultValue: true, // Default to true
    },
    {
      name: "selectedLocation",
      type: "object", // Assuming this is an object; adjust as necessary
      subFields: [
        {
          name: "email",
          type: "string",
          required: false,
        },
        // Add more fields from selectedLocation as needed
      ],
    },
  ],
});

Builder.registerComponent(TherapistGrid, {
  name: "TherapistGrid",
  inputs: [
    {
      name: "therapists",
      type: "list",
      subFields: [
        {
          name: "name",
          type: "string",
          defaultValue: "Therapist Name",
          required: true,
        },
        {
          name: "title",
          type: "string",
          defaultValue: "Role (e.g., Yoga Instructor)",
        },
        {
          name: "description",
          type: "string",
          defaultValue: "Therapist description",
        },
        {
          name: "image",
          type: "file",
          allowedFileTypes: ["jpeg", "jpg", "png", "svg"],
          required: true,
        },
        {
          name: "socialLinks",
          type: "object",
          subFields: [
            { name: "fb", type: "string", defaultValue: "FB" },
            { name: "tw", type: "string", defaultValue: "TW" },
            { name: "yu", type: "string", defaultValue: "YU" },
            { name: "in", type: "string", defaultValue: "IN" },
          ],
        },
      ],
      defaultValue: [
        {
          name: "Therapist 1",
          title: "Yoga Instructor",
          description: "Therapist 1 description",
          image: "https://placehold.co/300x300",
          socialLinks: { fb: "FB", tw: "TW", yu: "YU", in: "IN" },
        },
        {
          name: "Therapist 2",
          title: "Yoga Instructor",
          description: "Therapist 2 description",
          image: "https://placehold.co/300x300",
          socialLinks: { fb: "FB", tw: "TW", yu: "YU", in: "IN" },
        },
      ],
    },
    {
      name: "onSelectTherapist",
      type: "function",
      required: true,
      defaultValue: () => alert("Therapist Selected!"),
    },
  ],
});

Builder.registerComponent(Questionnaire, {
  name: "Questionnaire",
  inputs: [
    {
      name: "title",
      type: "string",
      defaultValue: "FAQ",
      required: true,
    },
    {
      name: "description",
      type: "string",
      defaultValue:
        "Find answers to your most frequently asked questions below.",
    },
    {
      name: "question",
      type: "list",
      subFields: [
        {
          name: "question",
          type: "string",
          defaultValue: "What is your question?",
          required: true,
        },
        {
          name: "answerTitle",
          type: "string",
          defaultValue: "Answer",
        },
        {
          name: "answerContent1",
          type: "string",
          defaultValue: "This is the first part of the answer.",
          required: true,
        },
        {
          name: "answerContent2",
          type: "string",
          defaultValue: "This is the second part of the answer (optional).",
        },
      ],
      defaultValue: [
        {
          question: "What is Builder.io?",
          answerTitle: "Introduction",
          answerContent1: "Builder.io is a visual development platform.",
          answerContent2: "It allows you to create and edit content visually.",
        },
        {
          question: "How do I use Builder.io?",
          answerTitle: "Getting Started",
          answerContent1:
            "You can integrate Builder.io into your project and start editing visually.",
          answerContent2: "",
        },
      ],
    },
  ],
});

Builder.registerComponent(Logos, {
  name: "Logos",
  inputs: [
    {
      name: "Logos",
      type: "list",
      subFields: [
        {
          name: "src",
          type: "file",
          allowedFileTypes: ["svg", "png", "jpg", "jpeg"],
          required: true,
          defaultValue: "/default-logo.png",
          helperText: "Upload or select the logo image.",
        },
        {
          name: "alt",
          type: "string",
          required: true,
          defaultValue: "Logo",
          helperText:
            "Provide a description for the logo image (for accessibility).",
        },
      ],
    },
  ],
});

Builder.registerComponent(TestimonialSection, {
  name: "TestimonialSection",
  inputs: [
    {
      name: "Testimonials",
      type: "list",
      subFields: [
        {
          name: "src",
          type: "file",
          allowedFileTypes: ["svg", "png", "jpg", "jpeg"],
          required: true,
          defaultValue: "/default-image.png",
          helperText: "Upload or select the image for the testimonial.",
        },
        {
          name: "alt",
          type: "string",
          required: true,
          defaultValue: "Testimonial image",
          helperText:
            "Provide a description for the testimonial image (for accessibility).",
        },
        {
          name: "text",
          type: "string",
          required: true,
          defaultValue: "This is a great product!",
          helperText: "The testimonial text or quote.",
        },
        {
          name: "author",
          type: "string",
          required: true,
          defaultValue: "John Doe",
          helperText: "The name of the person giving the testimonial.",
        },
        {
          name: "role",
          type: "string",
          required: true,
          defaultValue: "CEO at Company",
          helperText:
            "The role or position of the person giving the testimonial.",
        },
      ],
    },
  ],
});


Builder.registerComponent(AboutSection, {
  name: 'AboutSection',
  inputs: [
    {
      name: 'heading',
      type: 'string',
      defaultValue: 'About Our Services',
      friendlyName: 'Heading',
      required: true,
    },
    {
      name: 'subHeading',
      type: 'string',
      defaultValue: 'Discover',
      friendlyName: 'Sub Heading',
      required: false,
    },
    {
      name: 'buttonText',
      type: 'string',
      defaultValue: 'Book Appointment',
      friendlyName: 'Button Text',
      required: true,
    },
    {
      name: 'features',
      type: 'list',
      subFields: [
        {
          name: 'icon',
          type: 'file',
          allowedFileTypes: ['svg', 'png', 'jpg', 'jpeg'],
          defaultValue: './logo/stress-relife.svg',
          friendlyName: 'Feature Icon',
        },
        {
          name: 'title',
          type: 'string',
          defaultValue: 'Feature Title',
          friendlyName: 'Feature Title',
          required: true,
        },
        {
          name: 'description',
          type: 'text',
          defaultValue: 'Feature Description',
          friendlyName: 'Feature Description',
        },
      ],
      defaultValue: [
        {
          icon: './logo/stress-relife.svg',
          title: 'Stress Relief',
          description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        },
        {
          icon: './logo/calm-mind.svg',
          title: 'Calm Mind',
          description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        },
        {
          icon: './logo/life-style.svg',
          title: 'Life Style',
          description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        },
        {
          icon: './logo/healty-body.svg',
          title: 'Healthy Body',
          description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        },
      ],
      friendlyName: 'Features',
      required: true,
    },
  ],
});

Builder.registerComponent(CheckSchedule, {
  name: 'CheckSchedule',
  inputs: [
    {
      name: 'heading',
      type: 'string',
      required: true,
      defaultValue: 'Shape Your Perfect Body',
    },
    {
      name: 'description',
      type: 'text',
      required: true,
      defaultValue: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
    {
      name: 'buttonText',
      type: 'string',
      required: true,
      defaultValue: 'Check Schedule',
    },
    {
      name: 'healedPeople',
      type: 'number',
      required: true,
      defaultValue: 8,
    },
    {
      name: 'coachingExperience',
      type: 'number',
      required: true,
      defaultValue: 10,
    },
    {
      name: 'circleText',
      type: 'string',
      required: true,
      defaultValue: 'Calm & Relax',
    },
    {
      name: 'buttonText',
      type: 'string',
      defaultValue: 'Book Appointment',
      friendlyName: 'Button Text',
      required: true,
    },
  ],
});