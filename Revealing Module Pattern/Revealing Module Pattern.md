Revealing Module Pattern
===========================

We can simply define all the functions and variables in private scope and return an anonymous object with pointer to private functionality we wish to reveal as public.

Advantages
==========

1. Ease readability

Disadvantages
=============

1. If private function refer to public function that public function can't be overridden if a patch is necessary.

2. Modules created with revealing module pattren may be more fragile than those created with original module pattern.