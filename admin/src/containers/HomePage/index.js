import React, { memo } from 'react';

import { Block, Container } from './components';

const HomePage = ({ global: { plugins }, history: { push } }) => {
    return (
        <>
            <Container className="container-fluid">
                <div className="row">
                    <div className="col-12">
                    </div>
                </div>
            </Container>
        </>
    );
};

export default memo(HomePage);
