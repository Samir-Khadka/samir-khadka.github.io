/* a11y-dialogs.js
 * Keyboard accessibility for the bio modal (#aboutModal) and the
 * Skills Archive drawer (#sidebarDrawer) on samir-khadka.com.np
 *
 * What it does:
 *  - Escape closes whichever dialog is open
 *  - Tab is trapped inside the open dialog (focus can't escape to the page)
 *  - On open: focus moves into the dialog (respects existing autofocus,
 *    e.g. the drawer's search input); on close: focus returns to the
 *    element that opened it
 *  - Ensures role="dialog", aria-modal="true" and an aria-label are present
 *
 * HOW TO APPLY (pick one):
 *  A) Upload this file to the repo root (next to script.js), then add
 *     <script src="a11y-dialogs.js"></script>
 *     just before </body> in index.html, projects.html, interests.html
 *     and contact.html.
 *  B) Paste the whole IIFE into the end of script.js instead.
 *
 * No changes to existing open/close code are required: the script watches
 * for the dialogs opening/closing via MutationObserver and hooks in.
 */
(function () {
  'use strict';

  var DIALOGS = [
    { id: 'aboutModal',    label: 'About Samir Khadka' },
    { id: 'sidebarDrawer', label: 'Skills Archive' }
  ];

  var OPEN_CLASS_RE = /(^|\s)(open|active|show|visible)(\s|$)/;

  var openDialog = null;  // currently open dialog element
  var opener = null;      // element that had focus before the dialog opened

  function focusables(root) {
    return Array.prototype.slice.call(
      root.querySelectorAll(
        'a[href], button:not([disabled]), textarea:not([disabled]), ' +
        'input:not([disabled]), select:not([disabled]), ' +
        '[tabindex]:not([tabindex="-1"])'
      )
    ).filter(function (el) {
      // skip hidden elements
      return el.offsetParent !== null;
    });
  }

  function findCloseButton(el) {
    return el.querySelector(
      '[data-close], .close, .modal-close, .drawer-close, ' +
      'button[aria-label*="close" i], button[aria-label*="dismiss" i]'
    );
  }

  function isOpen(el) {
    if (!el) return false;
    if (OPEN_CLASS_RE.test(el.className || '')) return true;
    var s = window.getComputedStyle(el);
    return s.display !== 'none' &&
           s.visibility !== 'hidden' &&
           parseFloat(s.opacity || '1') > 0;
  }

  function closeDialog(el) {
    if (!el) return;
    // Prefer the dialog's own close button so existing close logic runs.
    var btn = findCloseButton(el);
    if (btn) { btn.click(); return; }
    el.classList.remove('open', 'active', 'show', 'visible');
    el.setAttribute('aria-hidden', 'true');
  }

  function onOpen(el) {
    openDialog = el;
    opener = document.activeElement;
    el.removeAttribute('aria-hidden');
    // Let any existing autofocus (e.g. the drawer's search input) win;
    // otherwise move focus to the close button or first focusable element.
    setTimeout(function () {
      var active = document.activeElement;
      if (active && active !== document.body && el.contains(active)) return;
      var btn = findCloseButton(el);
      var f = focusables(el);
      var target = btn || f[0] || el;
      if (target.focus) target.focus();
    }, 60);
  }

  function onClose() {
    if (opener && opener.focus) {
      try { opener.focus(); } catch (e) { /* noop */ }
    }
    openDialog = null;
    opener = null;
  }

  document.addEventListener('keydown', function (e) {
    if (!openDialog) return;

    if (e.key === 'Escape' || e.key === 'Esc') {
      e.preventDefault();
      closeDialog(openDialog);
      return;
    }

    if (e.key === 'Tab') {
      var f = focusables(openDialog);
      if (f.length === 0) { e.preventDefault(); return; }
      var first = f[0];
      var last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  }, true);

  function watch(el) {
    var wasOpen = isOpen(el);
    new MutationObserver(function () {
      var nowOpen = isOpen(el);
      if (nowOpen && !wasOpen) onOpen(el);
      else if (!nowOpen && wasOpen) onClose();
      wasOpen = nowOpen;
    }).observe(el, { attributes: true, attributeFilter: ['class', 'style'] });
    if (wasOpen) onOpen(el);
  }

  function init() {
    DIALOGS.forEach(function (d) {
      var el = document.getElementById(d.id);
      if (!el) return; // dialog not present on this page — skip quietly
      el.setAttribute('role', 'dialog');
      el.setAttribute('aria-modal', 'true');
      if (!el.getAttribute('aria-label')) el.setAttribute('aria-label', d.label);
      el.tabIndex = -1; // programmatically focusable, not in tab order
      watch(el);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
