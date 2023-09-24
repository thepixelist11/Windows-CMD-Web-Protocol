# Windows CMD Web Protocol

## Description:

Using this code and the steps below, you can run windows commands in a web browser! Once this is set up, you will be able to run most non-admin commands through any web browser like Chrome, Firefox, or Edge. To run a command, you can use cmd://COMMAND HERE in a web browser. You can even run multiple commands in succession by separating the commands with " and ".

## Warning:

⚠️ Caution: Editing the Windows Registry

Editing the Windows Registry can potentially cause catastrophic damage to your computer if not done correctly. Please follow these steps carefully. If you are not comfortable with these operations or do not have administrator access, consider seeking assistance.

Security Implications: This setup allows websites to call commands on your computer, which introduces a security vulnerability. To minimize these risks, customizable validation layers have been implemented. While making a typo when editing the registry is unlikely to harm your computer, editing or deleting registry keys or values not created during these steps could lead to system instability.

## Automated Setup
Download the setup.bat file with this command: 

## Manual Setup

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

## Limitations:

**Command Restrictions:** Not all commands can be executed through this system. Currently, only non-administrative commands are supported, and administrative commands cannot be run.

**Command Separation:** To run multiple commands in succession, use " and " with whitespace to either side instead of the ampersand (&). This is necessary due to URL limitations, as ampersands serve a special purpose in URLs.

## License:

MIT License

Copyright 2023 thepixelist11

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Credits:

[Enderman - YT](https://www.youtube.com/@Endermanch) - Registry changes and inspiration
