import {useState} from 'react';

export default function Board() {
    return (<div>
        <NavBar />
        <Title value="grace liu" />
        <Subtitle value="math and computer science student @ MIT"/>
        </div>);
}

function NavBar() {
    return (<div>
        gjliu
        linkedin 
        github
        email
        </div>)
}

function Title({value}) {
    return <div>{value}</div>
}

function Subtitle({value}) {
    return <div>{value}</div>
}