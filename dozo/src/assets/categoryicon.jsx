import React from 'react';
import '../styles/category.css';

const CategoryIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="add-js-svgTitle category-new-svg"
    width="400"  // Ajuste para hacerlo más grande
    height="70"  // Ajuste para hacerlo más grande
    viewBox="0 0 500 70"
  >
    <style>{`.st0 { fill: #191615; }`}</style>
    <path className="st0 jump-animation" style={{ animationDelay: '0.1s' }} d="M37.4 12.8C37.4 8.6 31.9 0 19.9 0 7.8 0 0 8.5 0 21.6c0 12.5 7.2 21.7 20.1 21.7 12.4 0 17.4-8.6 17.4-13.7 0-2.2-1.4-4.6-5.2-4.6-4.1 0-4.6 1.8-5.3 4.2-.4 1.4-1.2 4.4-7.1 4.4-6.6 0-8.7-5.4-8.7-11.9 0-8.9 3.4-12 9-12 5.4 0 6.5 3.1 6.9 4.4.6 1.8 1.2 3.4 4.8 3.4.6-.1 5.5-.1 5.5-4.7z" /> {/* c */}

    <path className="st0 jump-animation" style={{ animationDelay: '0.2s' }}  d="M60.2 32.3c3.9-.5 5.4 2.7 5.4 5 0 1-.2 3.2-3.8 5 .4.4 1.2 1 3.8 1 3.7 0 5.3-1.5 5.3-3.5 0-.9-.4-3.2-.4-3.5V20.9c0-4.9-2.9-10.4-13.3-10.4-11.8 0-14.2 7.1-14.2 9.7-.1 1.9 1.2 3.5 3.1 3.8 2.1-1 4.3-1.7 6.6-2 .6-1.4 1.2-3 4.6-3 2.8 0 2.9 1.5 2.9 2 0 1.2-1.5 1.5-5.7 2-5.5.6-12.3 2.1-12.3 10 0 4.9 2.6 10.3 10.9 10.3 4.8 0 11.3-2.2 11.3-6 .1-2-1.4-3.8-3.4-3.9h-.1c-.7 0-1.4.2-2.1.6-1.1.8-2.4 1.3-3.7 1.4-1.1.2-2.1-.6-2.3-1.7v-.5c0-1.9 1.6-2.4 2.9-2.7 3.4-.9 3.8-1 4.4-1.4l.1 3.2z" /> {/* a */}

    <path className="st0 jump-animation" style={{ animationDelay: '0.3s' }}
    d="M81.2 10.4c3.8.5 4.3 3.7 4.3 5.2 0 .5 0 4.7-4.3 5.2v13c0 5.9 1.8 9.5 10 9.5 2 0 6.9-.1 6.9-4.7 0-2.5-1.6-3.8-4.1-3.9-1.8 0-2.4 0-2.4-1.9v-13h2.1c1.1 0 4.3-.1 4.3-4.1 0-4.1-3.4-4.1-4.3-4.1h-2.1V7.1c0-4.2-2.7-4.9-5.4-4.9-4.8 0-5 3.3-5 4.9v3.3zM80 11.5c-1 0-4.3 0-4.3 4.1 0 3.8 2.9 4.1 4.3 4.1 1 0 4.3 0 4.3-4.1s-3.4-4.1-4.3-4.1z" /> {/* t */}

    <path className="st0 jump-animation" style={{ animationDelay: '0.4s' }} 
    d="M126 29.5c-1.7-.1-3.4.8-4.3 2.2-1 1.9-1.6 2.9-4.6 2.9-4.3 0-4.8-2.5-5.1-4.3h9c1.3-1.4 3.1-2.1 5.1-2 1.3 0 2.5.3 3.6.9 1.4-1 2.3-2.6 2.1-4.3 0-3.8-2.9-14.5-15.2-14.5-10.8 0-15.2 8.2-15.2 16.4 0 7.5 3.7 16.5 16.1 16.5 9 0 13.9-5.9 13.9-9.5 0-2.9-3-4.3-5.4-4.3zm-9.3-10.8c3.3 0 4.3 2.5 4.3 3.3 0 .4-.2.5-.8.5h-8c.7-3.3 3-3.8 4.5-3.8z" /> {/* e */}

    <path className="st0 jump-animation" style={{ animationDelay: '0.5s' }}  d="M155.8 30.2c-8.5-.5-9.5-.5-9.5-1.5 0-.3.2-.5.4-.8 1.8.3 3.6.5 5.3.5 5.8 0 13.4-2 13-8.8 2.1 0 4-.2 4-4.5 0-2.4-.8-4.5-3.6-4.5-1.7 0-3.4.6-4.9 1.6-1.4-.6-3.5-1.6-9.1-1.6-11.8 0-13.8 5.9-13.8 9.1-.1 2.1.8 4 2.4 5.3-1.8 1.1-3 3.1-3 5.2-.1 1 .2 1.9.7 2.7 1.1-.7 2.5-1 3.8-1 3.8 0 6.1 2 6.5 5.6 2.8 0 5.5.2 8.3.5.8.2 1.7.5 1.7 1.4 0 2.1-4.4 2.1-5.3 2.1s-6.5 0-6.5-2.5c0-.2.5-1.5.5-1.8 0-2.2-2-4.1-5.2-4.1-6 0-6 6.5-6 6.9 0 8 9.6 9.4 15.8 9.4 5 0 17.3-.6 17.3-10.4.1-8.1-8.8-8.6-12.8-8.8zm-4.3-12.7c1.4 0 3.4.5 3.4 2.3 0 1.7-2.1 2-3.4 2-1.5 0-3.3-.4-3.3-2.1 0-1.6 1.9-2.2 3.3-2.2z" /> {/* g */}


    <path className="st0 jump-animation" style={{ animationDelay: '0.6s' }}  
     d="M193.5 24.1c.2 1 .3 2 .3 3.1 0 2.9-1.3 7.1-5.3 7.1s-5.3-4.3-5.3-7.4 1.3-7.4 5.3-7.4c2.1 0 3.1 1.1 4.3 2.5.9 1.2 2.4 2 4 1.9 2.8 0 5.5-1.8 5.5-4.6 0-2.5-4-8.9-13.8-8.9-11 0-16.1 8.2-16.1 16.5s5.1 16.4 16.1 16.4c10.8 0 16.1-7.8 16.1-16.6.1-2.3-.3-4.6-1.2-6.7-.6 3.1-3.4 5.2-6.5 5-1.3.2-2.5-.2-3.4-.9z" /> {/* o */}

    <path className="st0 jump-animation" style={{ animationDelay: '0.7s' }}  d="M220.9 24.8c-4.4.4-6.7-3.5-6.7-6.6 0-2.9 2.3-5 5.7-6.5-1-1.1-3.8-1.1-4.2-1.1-3.8 0-5.2 1.8-5.2 4.9v23.1c0 4.2 2.7 4.9 5.4 4.9 4.7 0 5-3.2 5-4.9V24.8zm7.2-14.4c-3 .2-5.8 1.1-8.4 2.6-2.9 1.7-4.2 3-4.2 5.1 0 2.8 2.1 5.5 4.7 5.5.8 0 1.6-.2 2.2-.7 1.6-1.2 3.4-2 5.4-2.4 3.5-.6 5.3-.9 5.3-4.7 0-3.1-1.7-5.4-5-5.4z" /> {/* r */}


    <path className="st0 jump-animation" style={{ animationDelay: '0.8s' }} d="M254.4 28c.4 1 .6 2.1.6 3.1 0 2.6-3.1 5.6-6.8 5.6-.5 0-1-.1-1.4-.2l-.4 1c-.9 2.4-1.8 2.6-3 2.8-2.1.2-4.3.5-4.3 4.2 0 4.9 4.4 4.9 5.6 4.9 6.9 0 8.6-4 10.4-7.7l11.1-24.2c.3-.8.5-1.7.5-2.5 0-2.4-2.9-4.5-5.7-4.5-2.1-.1-3.9 1.3-4.5 3.3l-4.2 9.9 2.1 4.3zm-8.8-15c-.7-1.5-2.2-2.4-3.8-2.5-2.7 0-6.1 2-6.1 4.9 0 .8.2 1.6.5 2.4l8.1 15.3c.7 1.5 2.2 2.5 3.8 2.6 2.7 0 5.6-2.1 5.6-4.8 0-.8-.2-1.6-.5-2.4L245.6 13z"  /> {/* y */}
    
    </svg>
);

export default CategoryIcon;