
    // Prompt the user for input
    var userInput = prompt("Enter username:");
    var passInput = prompt("Enter password:");
  
    // Simulating the content of user.txt
    var userText = "UploadTest:Jopoa\nUploadDevjj:Kamiunapopop";
  
    // Check if user exists in user.txt
    if (userText.includes(userInput)) {
      // Get the line of the user from user.txt
      var lines = userText.split('\n');
      var lineOfUser = lines.find(line => line.includes(userInput));
  
      // Extract password from the line of the user
      var password = lineOfUser.split(':')[1].trim();
  
      // Check if the provided password matches
      if (password === passInput) {
        // Create the iframe with accomplish.html as the source
        var iframe = document.createElement('iframe');
        iframe.src = 'NothingHereLolWhatAreYouDoing.html';
        document.body.appendChild(iframe);
      }
    }