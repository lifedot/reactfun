import React, { useEffect, useState } from 'react';

import Creed from './Creed';
import DD from './DD';
import Greeter from './Components/Greeter';


const App = () => {
    const [username, setUsername] = useState("")
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
      setTimeout(() => {
          setLoaded(true);
      }, 3000);
    }, [loaded]);

    if (loaded) {
        
    
    
    return (
        <>
           <Creed/>
           <DD/>
           <Greeter name ="Ricky Bobby" phrase="If you're not first, you're last!"/>
           <Greeter name ="Donald Duck" phrase="Where is my Daisy!"/>
           <Greeter name ="Daffy Duck" phrase="Sufferin Succotash!"/>
           <Greeter name ="Darkwing Duck" phrase="I got no time for CRIME!"/>
           <input type="text" placeholder="Type your name" value={username} onChange={(e) => setUsername(e.target.value)}/>
           <p>You are logging in as {username}</p>
        </>
    );
    } else {
        
        return (
            <>
            <h2>Page Loading...</h2>
            <button onClick={() => setLoaded(true)}>Load Page</button>
            </>
        )
    }
}

export default App;