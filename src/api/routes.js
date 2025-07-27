const express = require('express');
const readline = require('readline');

const app = express();
const port = 3000;

// Set up the server (non-blocking) 
// 
const server = app.listen(port, () => {console.log(`Server running on port ${port}`);
showMenu();
});

//Set up readline interface for console input //

const rl = readline.createInterface({
    input: ProcessingInstruction.stdin,
    output: ProcessingInstruction.stdout
});

function showMenu(){
    console.log('\n===Server Control Panel ===');
    console.log('1. Show server status');
    console.log('2. Show connected clients');
    console.log('3. Restart server');
    console.log('4. Exit');

    rl.question('Choose an option:',handleMenuChoice);
}

function handleMenuChoice(choice){
    switch(choice){
        case '1':
            console.log('Server is running and healthy');
            break;
        case '2':
            console.log('Connected clients:0');//You'd implement actual logic
            break;
        case '3':
            console.log('Restarting server...');
            //Restart Logic here
            break;
        case '4':
            console.log('Shutting down...')
            server.close();
            rl.close();
            return
    }


    setTimeout(showMenu,1000); //Show menu again after a delay
}



//Your regular API Routes
app.get('/',(req,res) =>{
    res.send('HelloWorld!');
});