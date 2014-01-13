Singleton Design Pattern
=========================

Singleton pattern is known to restrict instantiation of class to a single object.

Advantages
==================
1. Reduced memory footprint
2. Single point of access
3. Delayed initialization that prevents instantiation until required

Disadvantages
===============
1. Once instantiated, they’re hardly ever “reset”
2. Harder to unit test and sometimes introduces hidden dependencies

The presence of singleton is often an indication that module in a system are either tightly coupled or that logic is overly spread across multiple parts of a code base.