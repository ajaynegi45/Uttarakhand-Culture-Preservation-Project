import { useEffect } from 'react';

const BuyMeACoffeeWidget = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js';
        script.async = true;
        script.setAttribute('data-name', 'BMC-Widget');
        script.setAttribute('data-cfasync', 'false');
        script.setAttribute('data-id', 'ajaynegi');
        script.setAttribute('data-description', 'Support me on Buy me a coffee!');
        script.setAttribute('data-message', '');
        script.setAttribute('data-color', '#40DCA5');
        script.setAttribute('data-position', 'Right');
        script.setAttribute('data-x_margin', '18');
        script.setAttribute('data-y_margin', '18');

        script.onload = () => {
            console.log('Script loaded successfully');
            // Initialize the Buy Me a Coffee widget
            window.BMC.init();
        };

        script.onerror = (error) => {
            console.error('Error loading script:', error);
        };

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return null;
};

export default BuyMeACoffeeWidget;
