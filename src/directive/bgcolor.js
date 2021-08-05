/*
created - new! This is called before the element's attributes or event listeners are applied.

beforeMount- Occurs once the directive is bound to the element. Occurs only once.

mounted- Occurs once the element is inserted into the parent DOM.

beforeUpdate: new! This is called before the element itself is updated, much like the component lifecycle hooks.

Updated - This hook is called once the component and the children have been updated.

beforeUnmount: new! Similar to component lifecycle hooks, this will be called right before an element is unmounted.

unmounted - This hook is called once the directive is removed. Also called only once.
*/
export default function(app){

  app.directive('bgcolor', {
      beforeMount: function(el, binding, vnode) {
          el.style.background = binding.value;
          //el.parentNode && el.parentNode.removeChild(el);
      }
  })

}
