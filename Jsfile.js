
  function decreaseValue() {
    const input = document.getElementById('numberInput');
    let value = parseInt(input.value, 10);
    value = isNaN(value) ? 0 : value;
    value = value > 0 ? value - 1 : 0;
    input.value = value;
  }

  function increaseValue() {
    const input = document.getElementById('numberInput');
    let value = parseInt(input.value, 10);
    value = isNaN(value) ? 0 : value;
    input.value = value + 1;
  }
