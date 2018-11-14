export const getFaqsQuery = `query getFaqs {
  faq_groups { 
    faq{
      id
    	answer
      question
    }
    id
    title
  }
}`;
