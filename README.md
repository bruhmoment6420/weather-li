<h1 align="center">
  <img src="https://github.com/bruhmoment6420/weather-li/blob/main/assets/logo.png" width="250" height="250"/><br/>
  Weather-LI
</h1>

This is an app which shows the weather inside your console. I wrote it completely with JavaScript with the help of NodeJS.
This uses Prompts, OpenWeatherMap and Figlet to show everything.

## Readme Contents
* Demo
* Usage
* Uninstalling

## Demo
![gif](https://github.com/bruhmoment6420/weather-li/blob/main/assets/demo.gif)

## Usage  
The following describes the ways to use the app. (ALL REQUIRE NODE TO BE INSTALLED)

### Installation Way
This is the recommended way to install this app. To do so just open a console with ```sudo``` or administrator privilages and type:
```
npm install -g weather-li
```
As mentioned above you will need [NodeJS](https://nodejs.org/en/) installed for this.

### Non NPM Installation Way:
This is the way to install this app using the source code.

#### Step 1
Clone the project repo:
```
git clone https://github.com/bruhmoment6420/weather-li.git
```
#### Step 2
Go into the project directory:
```
cd weather-li
```
#### Step 3
Install dependencies:
```
npm run mount
```
### Step 4
Install the app globally (In the case of a permission error. For linux use the ```sudo``` command in front to get admin perms. For windows just open a Admin Prompt):
```
npm install -g
```
#### Step 5
Run the app by typing ```weather``` anywhere in the console. It is now installed globally and can be used at a moments notice.

### Downloaded Way (broken):
Download one of the binaries given in the releases section according to your os. This is not recommended. Use this method a your own risk

### Manual Way:
The following steps shows how to use Weather-LI manually.

#### Step 1
Clone the project repo:
```
git clone https://github.com/bruhmoment6420/weather-li.git
```
#### Step 2
Go into the project directory:
```
cd weather-li
```
#### Step 3 
Install the necessary packages:
```
npm install
```
### Step 4
Run the app:
```
npm run start
```

## Uninstalling
Supposing that you installed the app using either 'Installation Way' or 'Non NPM Installation Way' the uninstall process is the same:
```
npm uninstall -g weather-li
```
