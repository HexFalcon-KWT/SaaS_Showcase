"use client";

import { useEffect } from "react";
import * as CookieConsent from "vanilla-cookieconsent";
import "vanilla-cookieconsent/dist/cookieconsent.css";

export function CookieConsentProvider() {
  useEffect(() => {
    CookieConsent.run({
      cookie: {
        name: 'cc_cookie',
        useLocalStorage: true,
        expiresAfterDays: 365,
      },
      guiOptions: {
        consentModal: {
          layout: "box inline",
          position: "bottom left",
        },
        preferencesModal: {
          layout: "box",
        },
      },
      categories: {
        necessary: {
          enabled: true,
          readOnly: true,
        },
        analytics: {
          enabled: false,
          readOnly: false,
        },
        marketing: {
          enabled: false,
          readOnly: false,
        },
      },
      language: {
        default: "en",
        translations: {
          en: {
            consentModal: {
              title: "We use cookies",
              description:
                "We use cookies to improve your experience and analyze site traffic. You can accept all or manage your preferences.",
              acceptAllBtn: "Accept All",
              acceptNecessaryBtn: "Reject All",
              showPreferencesBtn: "Manage Preferences",
            },
            preferencesModal: {
              title: "Cookie Preferences",
              acceptAllBtn: "Accept All",
              acceptNecessaryBtn: "Reject All",
              savePreferencesBtn: "Save Preferences",
              closeIconLabel: "Close",
              sections: [
                {
                  title: "Cookie Usage",
                  description:
                    "We use cookies to ensure the basic functionalities of the website and to enhance your online experience. You can choose for each category to opt-in/out whenever you want.",
                },
                {
                  title: "Strictly Necessary Cookies",
                  description:
                    "These cookies are essential for the proper functioning of the website. Without these cookies, the website would not work properly.",
                  linkedCategory: "necessary",
                },
                {
                  title: "Analytics Cookies",
                  description:
                    "These cookies collect information about how you use the website, which pages you visited and which links you clicked on. All of the data is anonymized and cannot be used to identify you.",
                  linkedCategory: "analytics",
                },
                {
                  title: "Marketing Cookies",
                  description:
                    "These cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for the individual user.",
                  linkedCategory: "marketing",
                },
              ],
            },
          },
        },
      },
    });
  }, []);

  return null;
}
