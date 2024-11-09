// utils.jsx
import ReactDOMServer from 'react-dom/server';

const serializeReactElementToSVG = (element) => {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = ReactDOMServer.renderToStaticMarkup(element);
  return wrapper.innerHTML;
};

export default serializeReactElementToSVG;