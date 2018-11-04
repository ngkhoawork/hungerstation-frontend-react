import createAction from 'utils/actions/createAction';

export const fetchFaqs = createAction('faqs/FETCH_FAQS', payload => payload);

export const fetchFaqsRequest = createAction('faqs/FETCH_FAQS_REQUEST');

export const fetchFaqsSuccess = createAction(
  'faqs/FETCH_FAQS_SUCCESS',
  payload => payload,
);

export const fetchFaqsError = createAction('faqs/FETCH_FAQS_ERROR');
