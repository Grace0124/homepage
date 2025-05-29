import React from 'react';
import {useState} from 'react';
import closedFolder from './images/closed-folder.png';
import openFolder from './images/open-folder.png';

export default function Board() {
    const [popup, setPopup] = useState(null);
    
    function handleFolderClick(i) {
        if (popup == i) {
            setPopup(null);
        } else {
            setPopup(i);
        }
    }

    return (<div className="main-div">
        <NavBar />
        <Projects handleFolderClick={handleFolderClick}/>
        <div className="popup-div">
            <Popup idx={popup} />
        </div>
        </div>);
}

function NavBar() {
    return (<div className="nav">
        <NavBarLeft />
        <NavBarRight/>
        </div>);
}

function NavBarLeft() {
    return (<div>
        <div>
        grace liu
        </div>
        <div>
            math and computer science student @ mit
        </div>
    </div>)
}

function NavBarRight() {
    return (<div>linkedin github email</div>);
}

function Projects({handleFolderClick}) {
    const [folders, setFolders] = useState(Array(6).fill(closedFolder));

    function folderMouseEnter(i) {
        const nextFolders = folders.slice();
        nextFolders[i] = openFolder;
        setFolders(nextFolders);
    }

    function folderMouseLeave(i) {
        const nextFolders = folders.slice();
        nextFolders[i] = closedFolder;
        setFolders(nextFolders);
    }

    return (
    <div>
    <div>projects</div>
    <div className='projectsRow'>
        <Project 
            folder={folders[0]} 
            onMouseEnter={() => folderMouseEnter(0)} 
            onMouseLeave={()=>folderMouseLeave(0)} 
            handleFolderClick={()=>handleFolderClick(0)} 
            projTitle='risc-v processor' />
        <Project 
            folder={folders[1]} 
            onMouseEnter={() => folderMouseEnter(1)} 
            onMouseLeave={()=>folderMouseLeave(1)} 
            handleFolderClick={()=>handleFolderClick(1)}
            projTitle='bayesian inference on az diabetes'/>
        <Project 
            folder={folders[2]} 
            onMouseEnter={() => folderMouseEnter(2)} 
            onMouseLeave={()=>folderMouseLeave(2)} 
            handleFolderClick={()=>handleFolderClick(2)}
            projTitle='lisp interpreter'
            />
    </div> 

    <div className='projectsRow'>
        <Project 
            folder={folders[3]}
            onMouseEnter={() => folderMouseEnter(3)} 
            onMouseLeave={()=>folderMouseLeave(3)} 
            handleFolderClick={()=>handleFolderClick(3)}
            projTitle='star battle'/>
        <Project 
            folder={folders[4]} 
            onMouseEnter={() => folderMouseEnter(4)} 
            onMouseLeave={()=>folderMouseLeave(4)} 
            handleFolderClick={()=>handleFolderClick(4)}
            projTitle='snek'/>
        <Project 
            folder={folders[5]} 
            onMouseEnter={() => folderMouseEnter(5)} 
            onMouseLeave={()=>folderMouseLeave(5)} 
            handleFolderClick={()=>handleFolderClick(5)}
            projTitle='in the works...'/>
    </div>
    </div>);
}


function Project({folder, onMouseEnter, onMouseLeave, handleFolderClick, projTitle}) {
    return (
        <div className="project">
            <img src={folder} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={handleFolderClick} className="folder-img"/>
            <div> {projTitle} </div>
        </div>
    );
    
}

function Popup({idx}) {
    let projContext;
    let projOverview;

    if (idx == null) return null;

    switch (idx) {
        case 0:
            projContext = "project for 6.191 (computation structures)";
            projOverview = 'pipelined 4-stage risc-v processor with bypassing and stalling. processor uses a two-way seat-associative cache with lru replacement.';
            break;
        case 1:
            projContext = 'summer research project @ ratmann lab, imperial college of london'
            projOverview = 'constructed two new bayesian inference models based on the softmax function, conducted mcmc algorithms to evaluate the importance of various factors in predicting diabetes.';
            break;
        case 2:
            projContext = 'project for 6.101 (fundamentals of programming)'
            projOverview = 'lisp interpreter to parse and execute s-expressions. Supports core language features such as arithmetic operations, conditionals, variable scoping, and user-defined functions.';
            break;
        case 3:
            projContext = 'final group project for 6.102 (software construction)';
            projOverview = 'Star Battle game. includes a client/server architecture and a web interface to play the game.';
            break;
        case 4:
            projContext = 'just for fun'
            projOverview = 'modified snake game where the snake’s speed increases with each consumed food item.';
            break;
        default:
            projContext = 'hmmm...';
            projOverview = 'check again soon!';
            break;
    }

    return (
        <div className="popup-background">
            <div className="popup-content">
                <div className="popup-projContext">
                    {projContext}
                </div>
                <div className="popup-projOverview">
                    {projOverview}
                </div>
            </div>
        </div>
    )
}