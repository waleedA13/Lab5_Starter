# Lab 5 - Starter

**Name:** Waleed

## GitHub Pages

- [Expose (Party Horn)](https://waleedA13.github.io/Lab5_Starter/expose.html)
- [Explore (Speech Synthesis)](https://waleedA13.github.io/Lab5_Starter/explore.html)

## Check Your Understanding

**1) Would you use a unit test to test the "message" feature of a messaging application? Why or why not?**

No, I wouldn't use a unit test for this. Sending a message involves a lot of different parts working together, like the UI, the network request, the backend, the database, and actually delivering the message to the other user. A unit test only tests one small piece of code in isolation, so it wouldn't be able to test all of those parts interacting with each other. Something like an integration test or end-to-end test would be better for this.

**2) Would you use a unit test to test the "max message length" feature of a messaging application? Why or why not?**

Yes, a unit test would be perfect for this. Checking if a message is over 80 characters is a simple, isolated piece of logic. You could write a function that takes in a string and returns whether it's valid or not, and then test it with different inputs like a 79 character string, an 80 character string, and an 81 character string. There are no external dependencies or other parts of the app involved, so a unit test works great here.
