import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { i18n } from 'react-i18next';

function LanguageDropdown() {
    const { t, i18n } = useTranslation(); // Déplacez la déclaration ici

    const [selectedLanguage, setSelectedLanguage] = useState('en'); // Langue par défaut

    const handleLanguageChange = (language) => {
        setSelectedLanguage(language);
        // Ajoutez ici le code pour changer la langue dans votre application
    };

    return (
        <select
            value={i18n.language}
            onChange={(e) => i18n.changeLanguage(e.target.value)}
        >
            <option value="en">English</option>
            <option value="fr">Français</option>
        </select>
    );
}

export default LanguageDropdown;
