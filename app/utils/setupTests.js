window.matchMedia =
  window.matchMedia ||
  function helper() {
    return {
      matches: false,
      addListener() {},
      removeListener() {},
    };
  };
