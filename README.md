
# iReport
iReport is an application that helps to give instant news and constant awareness of corruption in society
by citizens so as to enable the government to fight against the existing rampant corruption rate in African counrties. 

# MOTIVATION
I have been inspired to build such an application so that African governments and anti-corruption agencies
find it easy to reachout to communities, citizens and execute justice where it is neccessary thus fighting corruption amidst us together. 

**Application Features**
* Users can create an account and log in.
* Users can create a red-flag report.
* Users can create an intervention report.
* Users can change geolocation of red-flag and intervention reports.
* Users can see the details of their red-flag and intervention reports
* Admin can change the status of users report


# A user can perform the following :
 Use the following endpoints to perform the specified tasks 
    
    EndPoint                                     | Functionality
    ------------------------                     | ----------------------
    Get /reports/                                | Fetch all reports
    Get /reports/<int:report_id>                 | Fetch a specific report
    POST /users/<int:user_id>/reports            | Fetch all reports by a specific user
    PUT /report/<int:report_id>/cancel/          | Change geolocation and status of the specific report
    POST /reports/                               | Create a report
    
**Getting started with the app**

**Technologies used to build the application**

* [Python 3.7.1](https://docs.python.org/3/)

* [Flask](http://flask.pocoo.org/)

# Installation

Create a new directory and initialize git in it. Clone this repository by running
```sh

```
Create a virtual environment. For example, with virtualenv, create a virtual environment named env using
```sh
$ virtualenv env
```
Activate the virtual environment
```sh
$ cd env/scripts/activate
```
Install the dependencies in the requirements.txt file using pip
```sh
$ pip install -r requirements.txt
```

Start the application by running
```sh
$ python run.py
```
Test your setup using a client app like postman

```sh
```
Heroku link
```sh

```
