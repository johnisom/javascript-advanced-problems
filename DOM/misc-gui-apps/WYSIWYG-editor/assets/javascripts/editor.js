const isHyperlink = function isHyperlink() {
  const container = document.getSelection().getRangeAt(0)
                            .commonAncestorContainer;
  let nodeName;
  if (container.nodeType === Node.ELEMENT_NODE) {
    nodeName = container.nodeName;
  } else if (container.nodeType === Node.TEXT_NODE) {
    nodeName = container.parentNode.nodeName;
  }

  return nodeName === 'A';
};

const toggleButton = function toggleButton(btn) {
  const active = document.queryCommandState(btn.dataset.command);
  btn.classList.toggle('applied', active);
};

$(() => {
  const $faces = $('button.face');
  const $link = $('button.link');
  const $lists = $('button.list');
  const $aligns = $('button.align');
  const $content = $('#content');

  /**
   * I used ‘setTimeout’ instead of listening on ‘keyup’ because the ‘keyup’
   * event fires too late for a good UX.
   */
  $content.on('click keydown', (e) => {
    if (e instanceof KeyboardEvent && e.key.length > 1) return;
    setTimeout(() => {
      $link.toggleClass('applied', isHyperlink());
      $faces.each((_, btn) => toggleButton(btn));
      $lists.each((_, btn) => toggleButton(btn));
      $aligns.each((_, btn) => toggleButton(btn));
    }, 0);
  });

  $faces.on('click', function() {
    document.execCommand(this.dataset.command);
    toggleButton(this);
  });

  $link.on('click', () => {
    if (isHyperlink()) {
      document.execCommand('unlink');
    } else {
      const url = prompt('Please enter the url to insert…');
      document.execCommand('createLink', false, url);
    }

    $link.toggleClass('applied', isHyperlink);
    toggleButton($faces[2]);
  });

  $lists.on('click', function() {
    document.execCommand(this.dataset.command);
    $lists.each((_, btn) => toggleButton(btn));
  });

  $aligns.on('click', function() {
    document.execCommand(this.dataset.command);
    $aligns.each((_, btn) => toggleButton(btn));
  });
});
