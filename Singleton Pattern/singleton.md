Singleton Design Pattern
=========================

Singleton pattern is known to restrict instantiation of class to a single object.

Advantages
==================
Reduced memory footprint
Single point of access
Delayed initialization that prevents instantiation until required

Disadvantages
===============
Once instantiated, they’re hardly ever “reset”
Harder to unit test and sometimes introduces hidden dependencies

The presence of singleton is often an indication that module in a system are either tightly coupled or that logic is overly spread across multiple parts of a code base.