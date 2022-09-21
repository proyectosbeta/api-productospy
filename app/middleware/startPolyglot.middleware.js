import Polyglot from "node-polyglot";
import { myDe, myEn, myEs } from "../i18n/index.js";

const languages = {
  de: myDe,
  es: myEs,
  en: myEn,
};

const getLanguage = (language) => {
  return languages[language] || myEn;
};

const startPolyglot = (req, res, next) => {
  const locale = req.locale.language;

  req.polyglot = new Polyglot();
  req.polyglot.extend(getLanguage(locale));

  next();
};

export default startPolyglot;
