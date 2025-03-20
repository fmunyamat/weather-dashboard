import { useContext } from 'react';
import { DashboardThemeContext } from '../../../contexts/dashboard-theme.context';
import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';
import { styled, tooltipClasses } from '@mui/material';


const TooltipHover = ({ tooltipData, children }) => {
    const { isDarkMode } = useContext(DashboardThemeContext);

    const HtmlTooltip = styled(({ className, ...props }) => (
        <Tooltip 
            {...props}
            arrow
            placement='top'
            slots={{ transition: Zoom }}
            classes={{ popper: className }}
            slotProps={{
            popper: {
            modifiers: [
                {
                name: 'offset',
                options: {
                    offset: [0, -20],
                },
                },
            ],
            },
        }}/>
    ))(({ theme }) => ({
        [`& .${tooltipClasses.tooltip}`]: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: isDarkMode ?  '#d9d9d9' : '#3a3a3a',
        color: isDarkMode ?   '#3a3a3a' : 'white',
        height: 'auto',
        width: '120px',
        fontSize: theme.typography.pxToRem(12),
        fontWeight: 800,
        border: '1px solid #dadde9',
        borderRadius: '20px'
        },
        [`& .${tooltipClasses.arrow}`]: {
          color: isDarkMode ?  '#d9d9d9' : '#3a3a3a', // Arrow color (must match tooltip background)
        },
    }))

    return (
        <>
            <HtmlTooltip title={tooltipData}>
                {children}
            </HtmlTooltip>
        </>
    );
}

export default TooltipHover;