import React from 'react';
import {PageTitleContainer, PageTitleStyled, PageSubTitleStyled  } from './pageTitle.Style';

interface PageTitleProps {

    title: string;
    subtitle: string;
}

const PageTitle: React.FC<PageTitleProps> = (props) => {
    return (
        <PageTitleContainer>
            <PageTitleStyled >{props.title}</PageTitleStyled >
           <PageSubTitleStyled >
                {props.subtitle}
            </PageSubTitleStyled >
        </PageTitleContainer >

    );
}

export default PageTitle;