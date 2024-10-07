import { Builder } from "@builder.io/react";
import { Hero } from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import NotFound from "./components/404/NotFound";

Builder.registerComponent(Hero, {
  name: 'Hero',
  inputs: [
    {
      name: 'title',
      type: 'string',
      required: true,
      defaultValue: 'Welcome to Our Site',
      friendlyName: 'Hero Title',
    },
    {
      name: 'breadcrumb',
      type: 'string',
      required: false,
      defaultValue: 'Home • Home',
      friendlyName: 'Breadcrumb Text',
    },
  ],
});

Builder.registerComponent(Header, {
  name: 'Header',
  inputs: [
    {
      name: 'logo',
      type: 'object',
      subFields: [
        { name: 'src', type: 'file', required: true, helperText: 'Logo image source URL' },
        { name: 'alt', type: 'string', required: true, helperText: 'Alternative text for the logo' },
        { name: 'width', type: 'number', required: true, helperText: 'Logo width' },
        { name: 'height', type: 'number', required: true, helperText: 'Logo height' },
      ],
    },
    {
      name: 'links',
      type: 'list',
      subFields: [
        { name: 'label', type: 'string', required: true, helperText: 'Label for the link' },
        { name: 'url', type: 'string', required: true, helperText: 'URL for the link' },
        {
          name: 'subLinks',
          type: 'list',
          subFields: [
            { name: 'label', type: 'string', required: true, helperText: 'Label for the sublink' },
            { name: 'url', type: 'string', required: true, helperText: 'URL for the sublink' },
          ],
          helperText: 'Optional dropdown sublinks for this link',
        },
      ],
    },
    {
      name: 'buttons', 
      type: 'list',
      subFields: [
        { name: 'label', type: 'string', required: true, helperText: 'Label for the button' },
        { name: 'url', type: 'string', required: true, helperText: 'URL for the button' },
      ],
    },
  ],
});

Builder.registerComponent(Footer, {
  name: 'Footer',
  inputs: [
      {
          name: 'newsletterPlaceholder',
          type: 'string',
          defaultValue: 'email here',
          friendlyName: 'Newsletter Placeholder',
      },
      {
        name: 'footer-logo',
        type: 'file',
        friendlyName: "Footer Logo"
      },
      {
          name: 'contactInfo',
          type: 'object',
          subFields: [
              { name: 'address', type: 'string' },
              { name: 'phone1', type: 'string' },
              { name: 'phone2', type: 'string' },
              { name: 'email', type: 'string' }
          ],
          friendlyName: 'Contact Information'
      },
      {
          name: 'sections',
          type: 'list',
          subFields: [
              { name: 'title', type: 'string' },
              {
                  name: 'links',
                  type: 'list',
                  subFields: [
                      { name: 'label', type: 'string' },
                      { name: 'url', type: 'string' },
                      { name: 'external', type: 'boolean', defaultValue: false }
                  ]
              }
          ],
          friendlyName: 'Sections'
      },
      {
          name: 'socialLinks',
          type: 'list',
          subFields: [
              { name: 'platform', type: 'string' },
              { name: 'url', type: 'string' }
          ],
          friendlyName: 'Social Links'
      },
      {
          name: 'copyrightText',
          type: 'string',
          friendlyName: 'Copyright Text'
      },
      {
          name: 'legalLinks',
          type: 'list',
          subFields: [
              { name: 'label', type: 'string' },
              { name: 'url', type: 'string' }
          ],
          friendlyName: 'Legal Links'
      },
      {
          name: 'backgroundColor',
          type: 'color',
          defaultValue: '#D0B191',
          friendlyName: 'Background Color'
      },
      {
          name: 'textColor',
          type: 'color',
          defaultValue: '#27282C',
          friendlyName: 'Text Color'
      },
      {
          name: 'accentColor',
          type: 'color',
          defaultValue: '#27282C',
          friendlyName: 'Accent Color'
      }
  ]
});
;

Builder.registerComponent(NotFound, {
  name: 'NotFound',
  inputs: [
    {
      name: 'imageUrl',
      type: 'string',
      defaultValue: '/logo/404.svg',
      helperText: 'URL for the 404 image',
    },
    {
      name: 'imageAlt',
      type: 'string',
      defaultValue: 'Illustration of a confused character standing on a broken structure',
      helperText: 'Alt text for the 404 image',
    },
    {
      name: 'title',
      type: 'string',
      defaultValue: 'Oops! Sorry',
      helperText: 'Title text for the 404 page',
    },
    {
      name: 'description',
      type: 'string',
      defaultValue: 'We could not find the page',
      helperText: 'Description text for the 404 page',
    },
    {
      name: 'buttonText',
      type: 'string',
      defaultValue: 'Back To Home',
      helperText: 'Text for the back to home button',
    },
    {
      name: 'buttonIcon',
      type: 'string',
      defaultValue: 'fas fa-arrow-right',
      helperText: 'FontAwesome icon class for the button',
    },
  ],
});
