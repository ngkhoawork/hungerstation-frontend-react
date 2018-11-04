export const getFaqsQuery = `query getFaqs {
  faqs { 
    faqgroup{
      id
      title
      faq_type
    }
    id
    question
    answer
  }
}`;
