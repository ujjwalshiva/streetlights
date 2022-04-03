# Streetlight Complaints

Project submitted to HackPrinceton 2022

## Web Link: https://ujjwalshiva.github.io/streetlights

## Inspiration
We came across several streetlights in our surroundings that don't work, and the authorities would never show up to fix the issue. Empathizing with the problem, we felt that an efficient system is required that can simplify this process and convey the same to the administration.

## What it does
Our solution is a web application that enables users to lodge a complaint when encountered a faulty streetlight. On entering the necessary details and submitting, the location data and the image link is passed on to the administration, who can then resolve the issues in the near future.

## How we built it
The graphical interface of the web application is developed using responsive HTML and CSS. The data collected from the user is processed using JavaScript programming language, along with the location data fetched by reverse geocoding. The image captured by the user is uploaded using the imgbb API, which hosts the image and provides a shareable link. On submission, all the data is uploaded to Firebase Realtime Database, through which a JSON response can be obtained for easier access.

## Challenges we ran into
The main challenge we ran into was connecting to the back-end database. After several revisions, we were able to shift to a better alternative that served our purpose.

## Accomplishments that we're proud of
We came across integrating technology to develop a sustainable model which will enable an easy complaint registry for several problems. We're glad we were able to finish this project in such a short span of time.

## What we learned
We were able to learn how to efficiently use APIs while developing a web application. We were also able to learn how to design a much user-friendly interface and connect with Google Firebase.

## What's next for Spotlight
We plan to take it much further by implementing several useful features and extending this idea to various other problems as well.
