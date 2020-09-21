var VueClickAway = (function (exports) {
  'use strict';

  const handleClickOutside = (el, binding, vnode, event) => {
    let vm = vnode.context;
    let callback = binding.value;

    if (
      (!el || !el.contains(event.target)) &&
      callback &&
      typeof callback === "function"
    ) {
      return callback.call(vm, event);
    }
  };

  const onMounted = (el, binding, vnode) => {
    document.addEventListener(
      "click",
      (event) => handleClickOutside(el, binding, vnode, event),
      true
    );
  };

  const onUnmounted = () => {
    document.removeEventListener("click", handleClickOutside, true);
  };

  const onUpdated = (el, binding) => {
    if (binding.value === binding.oldValue) {
      return;
    }
    onMounted(el, binding);
  };

  const directive = {
    mounted: onMounted,
    updated: onUpdated,
    unmounted: onUnmounted,
  };

  const mixin = {
    directives: { ClickAway: directive },
  };

  exports.default = directive;
  exports.mixin = mixin;

  return exports;

}({}));
