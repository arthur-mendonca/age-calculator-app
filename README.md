# Frontend Mentor - Age calculator app solution

This is a solution to the [Age calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View an age in years, months, and days after submitting a valid date through the form
- Receive validation errors if:
  - Any field is empty when the form is submitted
  - The day number is not between 1-31
  - The month number is not between 1-12
  - The year is in the future
  - The date is invalid e.g. 31/04/1991 (there are 30 days in April)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: See the age numbers animate to their final number when the form is submitted

### Links

- Live Site URL: [Vercel page](https://age-calculator-app-arthur-mendonca.vercel.app/#)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- React Hook Forms
- Zod Validator
- Date-fns

### What I learned

This app may seem very simple but it's kind of tricky.

Validation took most part of the job. I've chosen Zod to help validate the input fields in a way they accept only valid date format (DD-MM-YYYY) and also don't accept invalid dates such as 31.02.1998 or 99.04.2020.

As for the form, I've used the React Hook Form to also implement the validations and error messages.

And for date manipulation I used the Date-fns lib, which helps dealing with the date content.

Also worth mentioning I used React with Typescript as framework of choice, because of the architecture of the app that I had in mind. I wanted to create separate components to make the code the most organised as possible.

### Continued development

I will continue focusing on the javascript Date object and forms manipulation in future projects.

## Author

- Website - [Arthur Mendonça](https://www.arthurmendonca.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Linkedin - [@arthur-silva-mendonca](https://www.linkedin.com/in/arthur-silva-mendonça/)
- Instagram - [@arthurmendonca11](https://www.instagram.com/arthurmendonca11)
