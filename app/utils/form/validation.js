import * as yup from 'yup';

import intlService from 'utils/intlService';
import messages from './messages';
// import * as yup from 'yup';

export const validationSchemas = formName => () => {
  let schema;
  const validationMessages = {
    required: intlService.formatMessage(messages.formRequired),
    password: intlService.formatMessage(messages.password),
    passwordMatch: intlService.formatMessage(messages.passwordMatch),
    name: intlService.formatMessage(messages.nameLength),
    mobileRegex: intlService.formatMessage(messages.mobileRegex),
    email: intlService.formatMessage(messages.email),
    mobileLength: intlService.formatMessage(messages.mobileLength),
  };
  switch (formName) {
    case 'signinForm':
      schema = signinSchema;
      break;
    case 'signupForm':
      schema = signupSchema;
      break;
    case 'resetPasswordRequestForm':
      schema = resetPasswordRequestSchema;
      break;
    case 'resetPasswordForm':
      schema = resetPasswordSchema;
      break;
    default:
      return {};
  }

  return schema(validationMessages);
};

const signinSchema = ({ required }) =>
  yup.object().shape({
    mobile: yup.string().required(required),
    password: yup.string().required(required),
  });

const resetPasswordRequestSchema = ({ required, email }) =>
  yup.object({
    email: yup
      .string()
      .email(email)
      .required(required),
  });

const resetPasswordSchema = ({ passwordMatch, required }) =>
  yup.object({
    password: yup.string().required(required),
    repeatPassword: yup
      .string()
      .oneOf([yup.ref('password')], passwordMatch)
      .required(required),
  });

const signupSchema = validationMessages =>
  yup.object({
    name: yup
      .string()
      .min(2, validationMessages.name)
      .max(20, validationMessages.name)
      .required(validationMessages.required),
    email: yup
      .string()
      .email(validationMessages.email)
      .required(validationMessages.required),
    mobile: yup
      .string()
      .required(validationMessages.required)
      .matches(/^\+966[0-9]/i, validationMessages.mobileRegex)
      .max(13, validationMessages.mobileLength),
    password: yup
      .string()
      .required(validationMessages.required)
      .min(8, validationMessages.password)
      .max(20, validationMessages.password),
  });
