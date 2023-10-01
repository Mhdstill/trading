import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { NativeSelect, Select, MenuItem } from '@mui/material';
import StarRating from './StarRating';

const ActionBar = () => {
    const { t } = useTranslation();

    const handleChange = () => {
        const select = document.querySelector('.action-bar_buttons-item select');
        if (select) {
            select.click();
        }
    };

    return (
        <div className='action-bar_scroll'>
            <div className='action-bar_wrapper'>
                <div className='action-bar_space'></div>

                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <InputLabel id="demo-select-small-label"> {t('percentWin')} </InputLabel>
                    <Select
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        label={t('percentWin')}
                        onChange={handleChange}
                    >
                        <MenuItem value="">
                            <em> {t('none')} </em>
                        </MenuItem>
                        <MenuItem value={5}> 25% </MenuItem>
                        <MenuItem value={4}> 50%  </MenuItem>
                        <MenuItem value={3}> 75% </MenuItem>
                        <MenuItem value={2}> 100%  </MenuItem>
                    </Select>
                </FormControl>


                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <InputLabel id="demo-select-small-label">{t('advice')}</InputLabel>
                    <Select
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        label={t('advice')}
                        onChange={handleChange}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={5}> <StarRating rating={5} /> </MenuItem>
                        <MenuItem value={4}> <StarRating rating={4} /> </MenuItem>
                        <MenuItem value={3}> <StarRating rating={3} /> </MenuItem>
                        <MenuItem value={2}> <StarRating rating={2} />  </MenuItem>
                        <MenuItem value={1}> <StarRating rating={1} /> </MenuItem>
                    </Select>
                </FormControl>

            </div>
        </div>
    )
};

export default ActionBar;
