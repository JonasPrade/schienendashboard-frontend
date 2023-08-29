import React from 'react';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';

const TooltipWrapper = ({ children, tooltipContent, placement = 'top', showDelay = 150, hideDelay = 300 }) => {
    const renderTooltip = (props) => (
        <Tooltip id={`tooltip-${Date.now()}`} {...props}>
            {tooltipContent}
        </Tooltip>
    );

    return (
        <OverlayTrigger
            placement={placement}
            delay={{ show: showDelay, hide: hideDelay }}
            overlay={renderTooltip}
        >
            {children}
        </OverlayTrigger>
    );
};

export default TooltipWrapper;
