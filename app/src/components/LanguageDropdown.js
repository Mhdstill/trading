import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { i18n } from 'react-i18next';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

function LanguageDropdown() {
    const { t, i18n } = useTranslation(); // Déplacez la déclaration ici

    const [selectedLanguage, setSelectedLanguage] = useState('en'); // Langue par défaut

    const handleLanguageChange = (language) => {
        setSelectedLanguage(language);
        // Ajoutez ici le code pour changer la langue dans votre application
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <NativeSelect
                    defaultValue={30}
                    inputProps={{
                        name: 'age',
                        id: 'uncontrolled-native',
                    }}
                    value={i18n.language}
                    onChange={(e) => i18n.changeLanguage(e.target.value)}

                >
                    <option value="en">English</option>
                    <option value="fr">Français</option>
                </NativeSelect>
            </FormControl>
        </Box>
    );
}

export default LanguageDropdown;
