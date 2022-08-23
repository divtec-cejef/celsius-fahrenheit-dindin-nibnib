/**
 * Fichier de base pour application web HTML/CSS/JS
 * @author  Steve Fallet
 * @version 0.1
 * @since   2019-08-19
 */

(function main() {
    'use strict'; // Demande un interprétation stricte du code

    const celcius = parseInt(prompt('Température en celsius : '));
    if (typeof celcius !== 'number' ) {
        alert('Vous n\'avez pas saisi de nombre');
        return;
    }

    const fahrenheit = (celcius * 9/5) + 32;

    alert(celcius + '°C = ' + fahrenheit + '°F');
}()); // Main IIFE

