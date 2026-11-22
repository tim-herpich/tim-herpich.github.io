// Keep Blowfish's checkbox-driven menu while providing keyboard-operable controls.
(() => {
  const toggle = document.getElementById("mobile-menu-toggle");
  const triggerLabel = document.querySelector('label[for="mobile-menu-toggle"]');
  const dialog = toggle?.parentElement.querySelector('[role="dialog"]');
  const closeLabel = dialog?.querySelector('label[for="mobile-menu-toggle"]');
  if (!toggle || !triggerLabel || !dialog || !closeLabel) return;

  const makeButton = (label, name, className) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `${label.className} ${className}`;
    button.setAttribute("aria-label", name);
    button.append(...label.childNodes);
    label.replaceWith(button);
    return button;
  };

  const trigger = makeButton(triggerLabel, "Open navigation menu", "mobile-navigation-toggle");
  const close = makeButton(closeLabel, "Close navigation menu", "mobile-navigation-close");
  dialog.id = "mobile-navigation-dialog";
  dialog.setAttribute("aria-label", "Main navigation");
  trigger.setAttribute("aria-controls", dialog.id);
  trigger.setAttribute("aria-expanded", "false");

  const setOpen = (open, restoreFocus = true) => {
    toggle.checked = open;
    trigger.setAttribute("aria-expanded", String(open));
    // Wait for the theme's visibility transition to make the controls focusable.
    if (open) requestAnimationFrame(() => requestAnimationFrame(() => {
      if (toggle.checked) close.focus();
    }));
    else if (restoreFocus) trigger.focus();
  };

  trigger.addEventListener("click", () => setOpen(!toggle.checked));
  close.addEventListener("click", () => setOpen(false));
  document.addEventListener("keydown", event => {
    if (!toggle.checked) return;
    if (event.key === "Escape") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Tab") {
      const controls = [...dialog.querySelectorAll('a[href], button, input, select, textarea, [tabindex="0"]')]
        .filter(element => element.getClientRects().length && getComputedStyle(element).visibility !== "hidden");
      const first = controls[0];
      const last = controls[controls.length - 1];
      if (event.shiftKey && (document.activeElement === first || !dialog.contains(document.activeElement))) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && (document.activeElement === last || !dialog.contains(document.activeElement))) {
        event.preventDefault();
        first?.focus();
      }
    }
  });

  // Close the overlay when resizing into the desktop navigation layout.
  window.addEventListener("resize", () => {
    if (toggle.checked && !trigger.getClientRects().length) setOpen(false, false);
  });
})();
