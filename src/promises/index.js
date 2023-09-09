/**
 * Asynchronous function that introduces a time delay before resolving a promise.
 *
 * @param {number} time (optional, default: 100) - The time delay in milliseconds before the promise resolves.
 * @returns {Promise} A Promise that resolves after the specified time delay.
 * @throws {Error} If the 'time' parameter is not a valid number.
 */

async function tyt(time = 100) {
    return new Promise((resolve, reject) => {
    if (isNaN(time)) {
        reject(new Error('is not a number'));
    } else {
        setTimeout(resolve, time);
    }
    });
}



/**
 * Asynchronous function to load and apply a stylesheet dynamically.
 *
 * @param {Object} options - An options object containing attributes for the stylesheet link.
 * @param {string} options.href - The URL of the stylesheet to load (required).
 * @param {string} [options.media] - The media attribute for the stylesheet (e.g., 'screen', 'print').
 * @returns {Promise} A Promise that resolves when the stylesheet is loaded successfully and rejects on error.
 * @throws {Error} If the 'href' property is not provided in the 'options' object.
 *
 * @example
 * // Load and apply a stylesheet with specified options
 * loadAndUseStyle({
 *   href: 'https://example.com/styles.css',
 *   media: 'screen'
 * }).then(() => {
 *   console.log('Stylesheet loaded and applied successfully.');
 * }).catch((error) => {
 *   console.error('Error loading stylesheet:', error.message);
 * });
 */
async function loadAndUseStyle(options) {
    return new Promise((resolve, reject) => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
  
      if (options.href) {
        link.href = options.href;
      } else {
        reject(new Error('Stylesheet link (href) is required.'));
        return;
      }
  
      // Set other attributes if provided in the options object
      for (const attr in options) {
        if (attr !== 'href') {
          link.setAttribute(attr, options[attr]);
        }
      }
  
      document.head.appendChild(link);
  
      link.onload = resolve;
      link.onerror = reject;
    });
  }


  /**
 * Asynchronous function to dynamically load a JavaScript script and execute it.
 *
 * @param {Object} options - An options object containing attributes for the script tag.
 * @param {string} options.src - The URL of the script to load (required).
 * @returns {Promise} A Promise that resolves when the script is loaded and executed successfully, and rejects on error.
 * @throws {Error} If the 'src' property is not provided in the 'options' object.
 *
 * @example
 * // Load and use a script with specified options
 * loadAndUseScript({
 *   src: 'https://example.com/myscript.js',
 *   async: true,
 *   defer: true
 * }).then(() => {
 *   console.log('Script loaded and used successfully.');
 * }).catch((error) => {
 *   console.error('Error loading or using script:', error.message);
 * });
 */
async function loadAndUseScript(options) {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
  
      if (options.src) {
        script.setAttribute('src', options.src);
      } else {
        reject(new Error('Script source (src) is required.'));
        return;
      }
  
      // Set other attributes if provided in the options object
      for (const attr in options) {
        if (attr !== 'src') {
          script.setAttribute(attr, options[attr]);
        }
      }
  
      document.body.appendChild(script);
  
      script.onload = resolve;
      script.onerror = reject;
    });
  }

  
  export {tyt,loadAndUseStyle,loadAndUseScript};