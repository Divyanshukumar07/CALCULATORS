document.addEventListener('DOMContentLoaded', () => {
  const display = document.getElementById('display');
  let input = '';

  function updateDisplay() {
    display.textContent = input || '0';
  }

  function reverseNumber(num) {
    return parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num);
  }

  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const val = btn.textContent;

      if (btn.classList.contains('number')) {
        if (val === '.' && input.includes('.')) return;
        input += val;
      } else if (btn.classList.contains('clear')) {
        input = '';
      } else if (btn.classList.contains('reverse')) {
        if (input) {
          const num = parseFloat(input);
          input = String(reverseNumber(num));
        }
      }
      updateDisplay();
    });
  });

  updateDisplay();
});
