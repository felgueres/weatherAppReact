### Middleware

Middleware are functions that take an action and depending on the action's type and payload, the middleware can choose to block, modify or let pass the action before getting to the reducers. Some sort of the gatekeepers between actions and reducers.

Redux-Promise unpacks a promise, so that you actually work with the resulting data, making your code neat and apparently synchronous although it is not!

In redux you never mutate the state, you return a new one completely. So for example, you dont want to push stuff into an array in your state, you would rather concat the current element of the array with the new stuff and return an entirely new piece of state.
