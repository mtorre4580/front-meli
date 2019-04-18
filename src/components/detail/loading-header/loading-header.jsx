import './loading-header.scss';
import React from 'react';

const LoadingHeader = () => (
    <div className="ctn-loader container">
        <div className="loader-detail placeholder-loader">
            <div className="content-loader">
                <div className="full-line animated-background"></div>
                <div className="full-line animated-background"></div>
                <div className="half-line animated-background"></div>
            </div>
        </div>
    </div>
);

export default LoadingHeader;