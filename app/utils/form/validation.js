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
    passwordUnmatch: intlService.formatMessage(messages.passwordUnmatch),
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

const signinSchema = ({ required, mobileRegex }) =>
  yup.object().shape({
    mobile: yup
      .string()
      .required(required)
      .matches(/^(05|\+9665|009665)(\d+)$/, mobileRegex),

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
    mobile: yup.string().required(validationMessages.required),
    phone: yup
      .string()
      .required(validationMessages.required)
      .matches(/^\d+$/, validationMessages.mobileRegex)
      .max(9, validationMessages.mobileLength)
      .min(9, validationMessages.mobileLength),
    password: yup
      .string()
      .required(validationMessages.required)
      .min(8, validationMessages.password)
      .max(20, validationMessages.password)
      .when(['phone', 'mobile'], {
        is: value => !!value,
        then: yup
          .string()
          .notOneOf(
            [yup.ref('mobile'), yup.ref('phone')],
            validationMessages.passwordUnmatch,
          ),
      }),
    repeatPassword: yup
      .string()
      .oneOf([yup.ref('password')], validationMessages.passwordMatch)
      .required(validationMessages.required),
  });
