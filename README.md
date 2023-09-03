# Windows CMD Web Protocol

## Description:

Using this code and the steps below, you can run windows commands in a web browser! Once this is set up, you will be able to run most non-admin commands through any web browser like Chrome, Firefox, or Edge. To run a command, you can use cmd://COMMAND HERE in a web browser. You can even run multiple commands in succession by separating the commands with " and ".

## Warning:

To set this up, you will need to edit the Windows Registry. If you are not comfortable doing this, or do not have administrator access you can still run commands in the command line or PowerShell. This can introduce a securty vulnerability; websites can call these commands. There are several layers of customizable validation in place to minimize these risks. Do not worry if you make a typo when editing the registry. It will almost certainly have no negative effect on your computer. However, if you edit or delete registry keys or values that you did not create when following these steps you could cause damage to your computer.

## Setup

**Editing the Windows Registry can cause catastrophic damage to your computer if not done correctly. Please follow these steps carefully.**

### - Step 1:

Run "Registry Editor" as administrator. If you do not run it as administrator, you are able to view the registry but not edit it.

### - Step 2:

Right-click "HKEY_CLASSES_ROOT" and click "New > Key". Call this key "cmd", this is case sensitive.

### - Step 3:

Right-click the new "cmd" key you created in the last step. Click "New > Key" and call this one "shell". This, like "cmd" is case sensitive.

### - Step 4:

Right-click the new "shell" key you created in the last step. Click "New > Key" and call this one "open". This, like "cmd" and "shell" is case sensitive.

### - Step 5:

Right-click the new "open" key you created in the last step. Click "New > Key" and call this one "command". This, like "cmd" is case sensitive.

### - Step 6:

Left-click the "cmd" key you created. On the right side of the Registry Editor, there should be a list of values. There should be one right now that says (default) on it. Double click the text that says (default). In the value, put "URL:cmd Protocol" without the quotation marks. This is case sensitive. Press OK.

### - Step 7:

Right-click in an empty part of the list on the right side in "cmd". Click "New > String Value". The name should be "URL Protocol" and it should have no value.

### - Step 8:

Download the code from this repository and extract it's contents. It is fine if you did this earlier.

### - Step 9:

Install NodeJS if you do not already have it. It can be downloaded here: [NodeJS Download](https://nodejs.org/en)

### - Step 10:

In the Registry Editor, click on "command". Edit (default) by double clicking it. The value should be: "cmd.exe /k node c:\PATH\TO\CODE\main.js %1". Replace the path with the actual path to extracted code.

### - Step 11:

Test it by going to: "cmd://echo testing123" in a web browser. There should be a popup. Click yes and the command line will open. If everything is worked properly, if you enter 'y' into the command line the command should run.

## Change validation:

By default, this will not require a password but will require you to enter 'y' before a command runs. This can be changed in main.js. In the options section at the top marked by a comment, you can change a few options. You can enable a password by changing usePW to true. The password is "cmdpw1" by default. You can also change the password by generating a hash for it with the `generatePashHash(password)` function and replacing the current hash with the hash generated. The last option you can change is activateWithoutValidation. This will remove all validation after the command line opens, and will run commands right away. It is highly recommended to leave this off as it can be a security vulnerability by allowing any website to run commands on your computer.

## Limitations:

Not all commands can be run through this. As of now, the program can only be run as a standard user. Admin commands cannot be used. You _can_ run multiple commands at once. However, rather than using an ampersand (&) to separate commands, you need to use " and " with whitespace to either side. URLs have a special use for ampersands, so they cannot be used to call commands.

## License:

MIT License

Copyright 2023 ThePixelist11

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Credits:

[Enderman - YT](https://www.youtube.com/@Endermanch) - Registry changes and inspiration
