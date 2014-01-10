Module Pattern
===========================

In JavaScript, the module pattern is used to emulate the copcept of classes in such a way that we are able to include private and public methods or variables in a single object.

Advantages
==========

1. A lot of cleaner for developers comping from OOP background
2. Supports private data in JS

Disadvantages
=============

1. When we wish to change visibility, we actually have to make changes to each place the member was used.

2. We also can't access private members in methods that are added to object at later point.