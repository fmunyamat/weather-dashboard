import React, { forwardRef } from 'react';
import { HScrollingContainer } from './horizontal-scrolling-container.styles';

// Define the component with forwardRef to pass the ref to the container
const HorizontalScrollingContainer = forwardRef(({ children, objectToMap = [], className }, ref) => {
    return (
        // Pass className and ref to the styled container
        <HScrollingContainer className={className} ref={ref}>
            {
                // Ensure objectToMap is an array and map over it
                Array.isArray(objectToMap) && objectToMap.map((data, index) => {
                    return (
                        // Render children with each item from objectToMap
                        <React.Fragment key={index}>
                            {children(data)}
                        </React.Fragment>
                    )
                })
            }
        </HScrollingContainer>
    );
});

export default HorizontalScrollingContainer;
