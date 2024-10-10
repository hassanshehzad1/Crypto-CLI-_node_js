# Crypto-CLI-_node_js
A command-line interface (CLI) built with Node.js to manage cryptocurrency information and API keys. This tool allows you to store, display, and remove your cryptocurrency API keys, as well as check the latest price of various coins directly from the terminal.
<h1>
  Features:
</h1>
Set API Key: Securely store your cryptocurrency API key (for services CoinGecko).
Show API Key: Display the stored API key in the terminal.
Remove API Key: Delete the stored API key when it’s no longer needed.
Check Coin Price: Fetch and display the latest price of any cryptocurrency by using its ticker symbol (e.g., bitcoin, ethereum).
NPM packages for your command-line interface (CLI) project: commander, inquirer, and colors. 
<h2>How to use</h2>
open terminal and type index 
then type index key command 
index key show : show the api key
index key set : Set the api key
index key remove : Remove the api key
index check price : check default coins prices

<h2>How to check coins prices</h2> 
index check price --coin=bitcoin --cur=usd 


<h2> Commander</h2>
Purpose: commander is a popular package for building CLI applications. It helps manage command-line arguments, options, and subcommands in a structured way.
Usage: It simplifies handling different commands (like set, show, remove, price) and options in your CLI project.

<h2>Inquirer</h2>
Purpose: inquirer is a powerful tool for creating interactive command-line prompts. It's great for gathering user input with options like lists, confirmations, text inputs, etc.
Usage: You can use inquirer in your project to interactively ask the user for input, such as selecting a cryptocurrency from a list or confirming actions.

<h2></h2>
urpose: colors is a simple package to add colors and styles to your terminal output, making your CLI output more visually appealing and easier to read.
Usage: You can use it to highlight important messages, errors, or successes (e.g., green for success, red for errors).
