const getElement = (selection) => {
    const element = document.querySelector(selection);
    if (element) return element;
    console.log("eror");
  };
  
  export default getElement;