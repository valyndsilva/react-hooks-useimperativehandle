# useImperativeHandle Hook

useImperativeHandle Hook allows you to call a function in the parent component that is defined in a child component. You have to use the useRef Hook when using the useImperativeHandle Hook.
You also need to wrap the forwardRef Hook in the child component to allow the parent to access what is inside the child component itself. The parent won't be rendered multiple times which is once case where you would want to use the useImperativeHandle Hook.

Note:  Use the useImperativeHandle Hook for modals or when you want to display information in a info circle or when you hover over.