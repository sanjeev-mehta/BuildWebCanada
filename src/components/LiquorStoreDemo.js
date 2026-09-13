import React from 'react';
import './NorthOakEmbed.css';

export default function LiquorStoreDemo() {
  const addMotionStyles = (event) => {
    const document = event.currentTarget.contentDocument;
    if (!document || document.getElementById('north-oak-motion')) return;
    const stylesheet = document.createElement('link');
    stylesheet.id = 'north-oak-motion';
    stylesheet.rel = 'stylesheet';
    stylesheet.href = '/north-oak-demo/motion.css';
    document.head.appendChild(stylesheet);
    const backToTop = document.querySelector('.back-top');
    if (backToTop && !document.querySelector('.north-oak-copyright')) {
      backToTop.insertAdjacentHTML('beforebegin', `<footer class="north-oak-copyright">© ${new Date().getFullYear()} BuildWebCanada. All rights reserved.</footer>`);
    }
  };

  return <iframe
    title="North & Oak liquor store template"
    src="/north-oak-demo/index.html"
    className="north-oak-frame"
    onLoad={addMotionStyles}
  />;
}
