document.addEventListener('DOMContentLoaded', () => {
  const display = document.getElementById('display');
  let x = 0;
  let input = '';
  let pendingOp = null;

  function refresh() {
    display.textContent = input !== '' && pendingOp ? evalOp(x, pendingOp, parseFloat(input)) : (input || x);
  }

  function evalOp(a, op, b) 
  {
    switch (op) 
    {
      case '+=': return a + b;
      case '-=': return a - b;
      case '*=': return a * b;
      case '/=': return b !== 0 ? a / b : 'Error';
      case '%=': return a % b;
      case '**=': return a ** b;
    }
  }

  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const val = btn.textContent;
      if (btn.classList.contains('number')) {
        if (val === '.' && input.includes('.')) return;
        input += val;
      } else if (btn.classList.contains('clear')) {
        x = 0;
        input = '';
        pendingOp = null;
      } else if (btn.classList.contains('operator')) {
        if (val === '++') {
          x++;
        } else if (val === '--') {
          x--;
        } else {
          if (input !== '') {
            x = pendingOp ? evalOp(x, pendingOp, parseFloat(input)) : parseFloat(input);
          }
          pendingOp = val;
          input = '';
        }
      }
      refresh();
    });
  });
});
