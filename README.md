This is my personal projects setup using Mithril.JS, Vite, JSX and Bootstrap.  

The projects is set up to use Mithril routing where each route renders a component from the page directory.
The components in the page directory use the Page component.  
The Page component includes the Navigation component.

The project uses global state and actions responsible for mutating and retreiving a read only version of the state.
The state object itself is meant to be immutable outside of the actions, therefore the actions object can return an
immutable reference to the application state.  

Add new state for the application to the state object, but use actions to create methods that mutate it.  
