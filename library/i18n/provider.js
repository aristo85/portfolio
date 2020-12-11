import React, { Fragment } from "react";
import { IntlProvider } from "react-intl";
import { LOCALS } from "./local";
import texts from "./texts";

const provider = ({ children, locale = LOCALS.ENGLISH }) => (
  <IntlProvider
    locale={locale}
    textComponent={Fragment}
    texts={texts[locale]}
  >
    {children}
  </IntlProvider>
);

export default provider;