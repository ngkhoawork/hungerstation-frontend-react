const defaultSettings = {
  dots: true,
  slidesToScroll: 1,
  dotsClass: 'slick-dots slick-thumb',
  autoplay: true,
  autoplaySpeed: 4000,
  variableWidth: true,
};
const slickSettings = {
  slidesToShow: 2,
  ...defaultSettings,
  responsive: [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 1,
        ...defaultSettings,
      },
    },
    {
      breakpoint: 614,
      settings: {
        slidesToShow: 1,
        ...defaultSettings,
        arrows: false,
      },
    },
  ],
};

export default slickSettings;
