import React from 'react';
import Root from '../components/common/Root';
import Head from 'next/head';
import Link from 'next/link';
import Footer from '../components/common/Footer';

const LoggedOut = () => ( <
    Root >
    <
    Head >
    <
    title > Nona Josefa Objetos < /title> <
    /Head> <
    div className = "account-container" >
    <
    div className = "custom-container py-5 my-4 my-sm-5" >
    <
    div className = "row mt-4" >
    <
    div className = "col-12 text-center" >
    <
    h2 className = "font-size-header mb-4 pt-5" >
    Te deslogueaste exitosamente. <
    /h2> <
    Link href = "/" >
    <
    a href = "/"
    className = "mt-4" > Continar comprando < /a> <
    /Link> <
    /div> <
    /div> <
    /div> <
    /div> <
    Footer / >
    <
    /Root>
);

export default LoggedOut;