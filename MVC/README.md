
## Chapter 5 - Backend Directory Structure / MVC / Router

### [[ Chapter Notes ]] 

MVC (Model-View-Controller) is **a pattern in software design commonly used to implement user interfaces (VIEW), data (MODEL), and controlling logic (CONTROLLER)**. It emphasizes a separation between the software's business logic and display.

In Our Project this will be :
**Model** - Database Schema's and Business logics and rules
**View** - Server Side Templates (or React front-end)
**Controller** - functions attached to routes for modifying request and sending responses.  It's a link between the Model and View.

**Router**
- These are like mini-application on which you can make set of Routes independently. 
- Routers can be attached to main Server App using `server.use(router)`

Arrange Directory in Server like this :

**Controllers** - file containing functions which are attached to each route path 
**Routes** - files containing routers
**Models** :  to be discussed in later chapters
**Views**: to be discussed in later chapters